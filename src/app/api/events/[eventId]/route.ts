import { NextRequest, NextResponse } from "next/server";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Pool } from "pg";
import { getSession } from '@/lib/session';

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: { rejectUnauthorized: false },
});


async function isAdmin(email: string): Promise<boolean> {
  const res = await pool.query("SELECT role FROM users WHERE user_email=$1", [email]);
  const role = res.rows[0]?.role;
  return role === "admin" || role === "superadmin";
}

// GET: Fetch a single event by its ID
export async function GET(req: NextRequest, { params }: { params: { eventId: string } }) {
  try {
    const { eventId } = params;
    const res = await pool.query("SELECT * FROM events WHERE event_id=$1", [eventId]);
    if (res.rowCount === 0) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json({ event: res.rows[0] });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch event" }, { status: 500 });
  }
}

// PUT: Update a single event (admin only)
export async function PUT(req: NextRequest, { params }: { params: { eventId: string } }) {
  const session = await getSession(req);
  if (!session?.user?.email || !(await isAdmin(session.user.email))) {
    return NextResponse.json({ error: "Forbidden: Requires admin access" }, { status: 403 });
  }

  try {
    const { eventId } = params;
    const { event_name, event_date, event_description, duration, whatsapp_link, poster, visibility } = await req.json();
    
    const result = await pool.query(
      `UPDATE events SET event_name=$1, event_date=$2, event_description=$3, duration=$4, whatsapp_link=$5, poster=$6, visibility=$7, updated_at=NOW()
       WHERE event_id=$8`,
      [event_name, event_date, event_description, duration, whatsapp_link, poster, visibility, eventId]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update event" }, { status: 500 });
  }
}

// DELETE: Remove a single event (admin only)
export async function DELETE(req: NextRequest, { params }: { params: { eventId: string } }) {
  const session = await getSession(req);
  if (!session?.user?.email || !(await isAdmin(session.user.email))) {
    return NextResponse.json({ error: "Forbidden: Requires admin access" }, { status: 403 });
  }

  try {
    const { eventId } = params;
    const result = await pool.query("DELETE FROM events WHERE event_id=$1", [eventId]);

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete event" }, { status: 500 });
  }
}