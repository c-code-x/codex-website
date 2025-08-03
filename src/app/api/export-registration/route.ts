import ExcelJS from 'exceljs';
import { Pool } from 'pg';
import { NextRequest } from 'next/server';
import { getSession } from '@/lib/session';

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

// FIX: Add helper to check for admin role
async function isAdmin(email: string): Promise<boolean> {
  const res = await pool.query("SELECT role FROM users WHERE user_email=$1", [email]);
  return res.rows[0]?.role === "admin" || res.rows[0]?.role === "superadmin";
}

export async function GET(req: NextRequest) {
  // **SECURITY FIX: Add authorization check**
  const session = await getSession(req);
  if (!session?.user?.email || !(await isAdmin(session.user.email))) {
    return new Response("Forbidden: Requires admin access", { status: 403 });
  }

  const url = new URL(req.url);
  const eventId = url.searchParams.get('event_id');
  if (!eventId) {
    return new Response('event_id is required', { status: 400 });
  }

  // ... rest of the function is good, no changes needed below this line ...
  // 1) fetch the event name
  const ev = await pool.query('SELECT event_name FROM events WHERE event_id = $1', [eventId]);
  if (ev.rowCount === 0) {
    return new Response('Event not found', { status: 404 });
  }
  const eventName = ev.rows[0].event_name as string;

  // 2) fetch only that event’s registrations + user info
  const { rows } = await pool.query(
    `
    SELECT u.user_name AS name, u.user_email AS email, u.roll_no AS rollNo,
           u.semester AS semester, u.branch AS branch, r.created_at AS registeredAT
    FROM registrations r
    JOIN users u ON r.user_id = u.user_id
    WHERE r.event_id = $1
    ORDER BY r.created_at DESC
    `,
    [eventId]
  );

  // 3) build workbook
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Registrations');

  ws.columns = [
    { header: 'Sl No.', key: 'slno', width: 12 },
    { header: 'Name', key: 'name', width: 25 },
    { header: 'Email', key: 'email', width: 30 },
    { header: 'Roll No.', key: 'rollNo', width: 15 },
    { header: 'Semester', key: 'semester', width: 10 },
    { header: 'Branch', key: 'branch', width: 15 },
    { header: 'Registered At', key: 'registeredAT', width: 20 },
  ];
  var num = 1;
  rows.forEach(r => {
    ws.addRow({
      slno: num++,
      name: r.name,
      email: r.email,
      rollNo: r.rollno,
      semester: r.semester,
      branch: r.branch,
      registeredAT: (r.registeredat as Date).toISOString(),
    });
  });

  const buffer = await wb.xlsx.writeBuffer();
  return new Response(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': `attachment; filename="${eventName}_registrations.xlsx"`,
    },
  });
}