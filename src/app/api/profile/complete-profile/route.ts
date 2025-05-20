import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { Pool } from 'pg';
//import useRouter from 'next/router';

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  // const router=useRouter();

  if (!email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { rollNo, semester, branch, username } = await req.json();

  try {
    await pool.query(
      "UPDATE USERS SET ROLL_NO = $1, SEMESTER = $2, BRANCH = $3, USER_NAME = $4 WHERE USER_EMAIL = $5",
      [rollNo, semester, branch, username, email]
    );
    
    // router.push('')
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}