import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { Pool } from "pg";
import { v4 as uuidv4 } from "uuid";

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

async function isAdmin(email: string) {
  const res = await pool.query("SELECT role FROM users WHERE user_email=$1", [email]);
  return res.rows[0]?.role === "admin" || res.rows[0]?.role === "superadmin";
}

// GET: List all events
export async function GET() {
  const res = await pool.query("SELECT * FROM events ORDER BY event_date DESC");
  return NextResponse.json({ events: res.rows });
}

// POST: Add new event or fetch event details by event_id based on "action" field
export async function POST(req: NextRequest) {
  const { action, ...body } = await req.json();

  if (action === "insert") {
    const { event_name, event_date, event_description, duration, whatsapp_link, poster } = body;
    const event_id = uuidv4();
    await pool.query(
      `INSERT INTO events (event_id, event_name, event_date, event_description, duration, whatsapp_link, poster )
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [event_id, event_name, event_date, event_description, duration, whatsapp_link, poster ]
    );
    return NextResponse.json({ success: true, event_id });
  } 
  else if (action === "fetch") {
    const { event_id } = body;
    if (!event_id) { return NextResponse.json({ error: "event_id is required" }, { status: 400 }); }
    const res = await pool.query("SELECT * FROM events WHERE event_id=$1", [event_id]);
    if (res.rows.length === 0) { return NextResponse.json({ error: "Event not found" }, { status: 404 }); }
    return NextResponse.json({ event: res.rows[0] }); 
  } 
  else { return NextResponse.json({ error: "Invalid action" }, { status: 400 }); }
}

// PUT: Update event
export async function PUT(req: NextRequest) {
  const session = await getServerSession();
  if (!session?.user?.email || !(await isAdmin(session.user.email))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  const { event_name, event_date, event_description, duration, whatsapp_link, poster, visibility, event_id } = await req.json();
  await pool.query(
    `UPDATE events SET event_name=$1, event_date=$2, event_description=$3, duration=$4, whatsapp_link=$5, poster=$6, visibility=$7, updated_at=NOW()
     WHERE event_id=$8`,
    [event_name, event_date, event_description, duration, whatsapp_link, poster, visibility, event_id ]
  );
  return NextResponse.json({ success: true });
}

// DELETE: Remove event
export async function DELETE(req: NextRequest) {
  const session = await getServerSession();
  if (!session?.user?.email || !(await isAdmin(session.user.email))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  const { event_id } = await req.json();
  await pool.query("DELETE FROM events WHERE event_id=$1", [event_id]);
  return NextResponse.json({ success: true });
}