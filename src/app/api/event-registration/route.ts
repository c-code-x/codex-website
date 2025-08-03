import { NextRequest, NextResponse } from "next/server";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
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

// GET: Return all event_ids the user is registered for
export async function GET(req: NextRequest) {
  const session = await getSession(req);
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
  try {
    const session = await getSession(req);
    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 1. Get the user's ID from the database
    const userRes = await pool.query(
      "SELECT user_id FROM users WHERE user_email = $1",
      [session.user.email]
    );
    if (userRes.rowCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const userId = userRes.rows[0].user_id;

    // 2. Get the event ID from the request and validate it
    const { event_id } = await req.json();
    if (!event_id) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }

    // 3. Verify the event exists in the database before proceeding
    const eventRes = await pool.query(
      "SELECT 1 FROM events WHERE event_id = $1",
      [event_id]
    );
    if (eventRes.rowCount === 0) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    // 4. Check if the user is already registered for this event
    const registrationRes = await pool.query(
      "SELECT 1 FROM registrations WHERE user_id = $1 AND event_id = $2",
      [userId, event_id]
    );
    if ((registrationRes.rowCount ?? 0) > 0) {
      return NextResponse.json({ error: "User already registered for this event" }, { status: 400 });
    }

    // 5. Insert the new registration
    const registrationId = uuidv4();
    await pool.query(
      "INSERT INTO registrations (reg_id, user_id, event_id) VALUES ($1, $2, $3)",
      [registrationId, userId, event_id]
    );

    return NextResponse.json({ success: true });

  } catch (err) {
    // Catch any unexpected errors (e.g., database connection issues)
    console.error("Registration API Error:", err);
    return NextResponse.json({ error: "An internal error occurred" }, { status: 500 });
  }
}