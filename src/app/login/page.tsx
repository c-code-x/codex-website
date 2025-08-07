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
  const [form, setForm] = useState({ roll_no: "", semester: "", branch: "", user_name: "" });
  const router = useRouter();

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/user-profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    await update?.();
    const fresh = await fetch("/api/user-profile").then((r) => r.json());
    setProfile(fresh);
  };

  // Sync form with profile/session
  useEffect(() => {
    if (!profile) return;
    setForm({
      roll_no: profile.roll_no || "",
      semester: profile.semester || "",
      branch: profile.branch || "",
      user_name: profile.user_name || session?.user?.name || "",
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
        setProfile(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [status, session]);

  if (status === "loading" || loading) return <div>Loading…</div>;
  if (status === "unauthenticated") return <LoginForm />;

  const incomplete = !profile.roll_no || !profile.semester || !profile.branch;
  if (incomplete) {
    return (
      <RegistrationForm
        roll_no={form.roll_no}
        semester={form.semester}
        branch={form.branch}
        user_name={form.user_name}
        college_name={profile.college_name || ""}
        error=""
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        handleSubmit={handleProfileSubmit}
      />
    );
  }

  // Profile complete
  return router.push("/user-dashboard");
}