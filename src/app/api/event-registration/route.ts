import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
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

// GET: Return all event_ids the user is registered for
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get user_id from DB using session email
  const userRes = await pool.query(
    "SELECT user_id FROM users WHERE user_email = $1",
    [session.user.email]
  );
  if (!userRes.rows[0]) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const user_id = userRes.rows[0].user_id;

  // Get all event_ids for this user
  const regRes = await pool.query(
    `SELECT e.* FROM registrations r JOIN events e ON r.event_id = e.event_id WHERE r.user_id = $1`,
    [user_id]
  );
  return NextResponse.json({ events: regRes.rows });
}

// POST: Register user for an event
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get user_id from DB using session email
  const userRes = await pool.query(
    "SELECT user_id FROM users WHERE user_email = $1",
    [session.user.email]
  );
  if (!userRes.rows[0]) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const user_id = userRes.rows[0].user_id;

  // Get event_id from frontend (by event_name or event_id)
  const { event_id, event_name } = await req.json();

  // Support both event_id and event_name (events_id)
  let actual_event_id = event_id;
  if (!actual_event_id && (event_id || event_name)) {
    const res = await pool.query(
      "SELECT event_id FROM events WHERE event_name = $1",
      [event_id || event_name]
    );
    actual_event_id = res.rows[0]?.event_id;
    if (!actual_event_id) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
  }

  // Check if already registered
  const already = await pool.query(
    "SELECT 1 FROM registrations WHERE user_id = $1 AND event_id = $2",
    [user_id, actual_event_id]
  );
  if (already.rowCount && already.rows.length > 0) {
    return NextResponse.json({ error: "User already registered for this event" }, { status: 400 });
  }

  // Register
  const reg_id = uuidv4();
  try {
    await pool.query(
      "INSERT INTO registrations (reg_id, user_id, event_id) VALUES ($1, $2, $3)",
      [reg_id, user_id, actual_event_id]
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to register" }, { status: 500 });
  }
}