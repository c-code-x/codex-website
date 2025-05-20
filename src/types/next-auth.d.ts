import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      rollNo?: string | null;
      semester?: string | null;
      branch?: string | null;
    }
  }
}