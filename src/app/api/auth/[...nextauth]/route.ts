import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
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

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const email = user.email?.toLowerCase() ?? "";
      if (!email.endsWith("@gitam.in")) {
        return false;
      }
      try {
        await pool.query(
          `INSERT INTO USERS (
            USER_ID, USER_NAME, USER_EMAIL, PROFILE_PIC, ROLL_NO, SEMESTER, BRANCH, COLLEGE_NAME
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          ON CONFLICT (USER_EMAIL) DO NOTHING`,
          [
            uuidv4(),
            user.name ?? "",
            email,
            user.image ?? "",
            null,
            null,
            null,
            "GITAM",
          ]
        );
      } catch (error) {
        console.error("Failed to insert user:", error);
        return false;
      }
      return true;
    },
    async session({ session }) {
      // Attach rollNo, semester, branch to session if available
      if (session.user?.email) {
        const { rows } = await pool.query(
          "SELECT USER_NAME, ROLL_NO, SEMESTER, BRANCH FROM USERS WHERE USER_EMAIL = $1",
          [session.user.email]
        );
        if (rows[0]) {
          session.user.name = rows[0].user_name;
          session.user.rollNo = rows[0].roll_no;
          session.user.semester = rows[0].semester;
          session.user.branch = rows[0].branch;
        }
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };