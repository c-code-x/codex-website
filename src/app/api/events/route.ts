import { NextRequest, NextResponse } from "next/server";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Pool } from "pg";
import { v4 as uuidv4 } from "uuid";
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

// GET: List all events (publicly accessible)
export async function GET() {
  try {
    const res = await pool.query("SELECT * FROM events ORDER BY event_date DESC");
    return NextResponse.json({ events: res.rows });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}

// POST: Add a new event (admin only)
export async function POST(req: NextRequest) {
  const session = await getSession(req);
  if (!session?.user?.email || !(await isAdmin(session.user.email))) {
    return NextResponse.json({ error: "Forbidden: Requires admin access" }, { status: 403 });
  }

  try {
    const { event_name, event_date, event_description, duration, whatsapp_link, poster } = await req.json();

    if (!event_name || !event_date) {
      return NextResponse.json({ error: "Event name and date are required" }, { status: 400 });
    }

    const event_id = uuidv4();
    await pool.query(
      `INSERT INTO events (event_id, event_name, event_date, event_description, duration, whatsapp_link, poster)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [event_id, event_name, event_date, event_description, duration, whatsapp_link, poster]
    );
    return NextResponse.json({ success: true, event_id }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}