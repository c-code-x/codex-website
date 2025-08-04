import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest } from "next/server";

// --- Test-only helper to get a session ---
export async function getSession(req: NextRequest): Promise<Session | null> {
  const mockEmail = req.headers.get('x-cypress-mock-user-email');

  if (process.env.NODE_ENV === 'development' && mockEmail) {
    console.log(`[Mock Session] Creating session for: ${mockEmail}`);
    // Return a fake session object that mimics the real NextAuth session structure
    return {
      user: { email: mockEmail, name: 'Mock User' },
      expires: '2099-01-01T00:00:00.000Z',
    };
  }
  //no mock header is present, use the real session
  return await getServerSession(authOptions);
}