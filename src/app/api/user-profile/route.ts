import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

// GET: Fetch the current user's profile
export async function GET(req: NextRequest) {
  const session = await getSession(req);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { rows } = await pool.query(
      "SELECT user_name, user_email, roll_no, semester, branch, college_name, profile_pic, role FROM users WHERE user_email = $1",
      [session.user.email]
    );

    if (rows.length === 0) { return NextResponse.json({ error: "User not found" }, { status: 404 }); }
    return NextResponse.json(rows[0]);
  } catch (err) {
    console.error("GET /api/user-profile error:", err);
    return NextResponse.json({ error: "Failed to fetch user profile" }, { status: 500 });
  }
}

// PUT: Update the current user's profile. (both initial setup and subsequent edits.)
export async function PUT(req: NextRequest) {
  const session = await getSession(req);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { user_name, roll_no, semester, branch, college_name, profile_pic } = await req.json();

    // Add server-side validation for required fields
    if (!user_name || !roll_no) {
      return NextResponse.json({ error: "Username and Roll Number are required" }, { status: 400 });
    }

    const result = await pool.query(
      `UPDATE users
       SET user_name = $1, roll_no = $2, semester = $3, branch = $4, college_name = $5, profile_pic = $6
       WHERE user_email = $7`,
      [user_name, roll_no, semester, branch, college_name, profile_pic, session.user.email]
    );

    // Check if the user existed and was updated
    if (result.rowCount === 0) {
        return NextResponse.json({ error: "User not found, could not update profile." }, { status: 404 });
    }
    return NextResponse.json({ message: "Profile updated successfully" });
  } catch (err) {
    console.error("PUT /api/user-profile error:", err);
    return NextResponse.json({ error: "An internal error occurred" }, { status: 500 });
  }
}