"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import LoginForm from "@/components/loginPage";
import RegistrationForm from "@/components/registrationForm";
import RegisteredEvents from "@/components/RegisteredEvents";

export default function Home() {
  const { data: session, status, update } = useSession();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>({});
  const [form, setForm] = useState({ rollNo: "", semester: "", branch: "", username: "", });
  const router = useRouter();

  const handleProfileSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      await fetch("/api/user-profile", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
      });
      await update?.();
      const fresh = await fetch("/api/user-profile").then(r => r.json());
      setProfile({
      rollNo: fresh.roll_no, semester: fresh.semester, branch: fresh.branch, user_name: fresh.user_name, 
      college_name: fresh.college_name, email: fresh.user_email,
  image: fresh.profile_pic,
      });
  }
  // Sync form with profile/session
  useEffect(() => {
    if (!profile) return;
    setForm({
      rollNo: profile.rollNo || "",
      semester: profile.semester || "",
      branch: profile.branch || "",
      username: profile.user_name || session?.user?.name || "",
    });
  }, [profile, session]);

  // Fetch profile and update DB with Google info if needed
  useEffect(() => {
    if (status !== "authenticated") {
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch("/api/user-profile")
      .then((res) => res.json())
      .then(async (data) => {
        // Update DB with Google info if missing
     
        setProfile({
          rollNo: data.roll_no, semester: data.semester,
          branch: data.branch, user_name: data.user_name,
          college_name: data.college_name, email: data.user_email,     // ✅ Fixed: use user_email
        image: data.profile_pic,
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [status, session]);

  if (status === "loading" || loading) return <div>Loading…</div>;
  if (status === "unauthenticated") return <LoginForm />;

  const incomplete = !profile.rollNo || !profile.semester || !profile.branch;
  if (incomplete) {
    return (
      <RegistrationForm
        rollNo={form.rollNo}
        semester={form.semester}
        branch={form.branch}
        username={form.username}
        collegename={profile.college_name || ""}
        error=""
        onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
        handleSubmit={handleProfileSubmit}
      />
    ); 
  }

  // Profile complete
  return ( router.push("/user-dashboard"));
}