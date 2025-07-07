import { getServerSession } from "next-auth/next";

import { authOptions } from "../auth/[...nextauth]/route";
import { Pool } from "pg";
import { NextRequest, NextResponse } from "next/server";

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

export async function GET(req: Request) 
{
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email)
  {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { rows } = await pool.query(
    "SELECT USER_NAME, USER_EMAIL, ROLL_NO, SEMESTER, BRANCH, COLLEGE_NAME, PROFILE_PIC, ROLE FROM USERS WHERE USER_EMAIL = $1",
    [session.user.email]
  );

  if (!rows[0]) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(rows[0]);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  if (!email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { rollNo, semester, branch, username } = body;

  try {
    const result = await pool.query(
      "UPDATE USERS SET ROLL_NO = $1, SEMESTER = $2, BRANCH = $3, USER_NAME = $4 WHERE USER_EMAIL = $5",
      [rollNo, semester, branch, username, email]
    );
    if (result.rowCount === 0) { return NextResponse.json({ error: "User not found or no changes made" }, { status: 404 }); }
    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Database error:", err);
    return NextResponse.json({ 
      error: "Failed to update", 
      details: err instanceof Error ? err.message : "Unknown error" 
    }, { status: 500 });
  }
}


export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const {
      user_name,
      roll_no,
      semester,
      branch,
      college_name,
      profile_pic, // optional: if you're editing image too
    } = await req.json();

    await pool.query(
      `UPDATE users
       SET user_name = $1,
           roll_no = $2,
           semester = $3,
           branch = $4,
           college_name = $5,
           profile_pic=$6
       WHERE user_email = $7`,
      [user_name, roll_no, semester, branch, college_name,profile_pic, session.user.email]
    );
console.log(profile_pic);
    return NextResponse.json({ message: "Profile updated successfully" });
  } catch (err) {
    console.error("PUT /api/edit-profile error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}