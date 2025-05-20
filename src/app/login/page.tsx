"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import LoginForm from "@/components/loginPage";
import RegistrationForm from "@/components/registrationForm";

export default function Login() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<{
    rollNo?: string;
    semester?: string;
    branch?: string;
    user_name?: string;
    college_name?: string;
  }>({});

  // ----- lift form inputs into page -----
  const [formData, setFormData] = useState({
    rollNo: profile.rollNo || "",
    semester: profile.semester || "",
    branch: profile.branch || "",
    username: profile.user_name || session?.user?.name || "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // ----------------------------------------

  // fetch DB profile once authenticated
  useEffect(() => {
    if (status !== "authenticated") {
      setLoading(false);
      return;
    }
    fetch("/api/profile/user-profile")
      .then((res) => res.json())
      .then((data) => {
        // 1) map snake_case → camelCase
        setProfile({
          rollNo: data.roll_no,
          semester: data.semester,
          branch: data.branch,
          user_name: data.user_name,
          college_name: data.college_name,
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [status]);

  if (status === "loading" || loading) {
    return <div>Loading…</div>;
  }

  if (!session) {
    return <LoginForm />;
  }

  // show complete-profile form if ANY missing
  const incomplete = !profile.rollNo || !profile.semester || !profile.branch;
  if (incomplete) {
    return (
      <RegistrationForm
        rollNo={formData.rollNo}
        semester={formData.semester}
        branch={formData.branch}
        username={formData.username}
        collegename={profile.college_name || ""}
        error=""
        onChange={handleFormChange}
        handleSubmit={async (e) => {
          e.preventDefault();
          const body = { ...formData };
          await fetch("/api/profile/complete-profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          // poll the session until it has the new fields
          for (let i = 0; i < 5; i++) {
            const s = await update?.();
            if (s?.user?.rollNo) break;
            await new Promise((r) => setTimeout(r, 500));
          }
          // now re‐fetch your DB profile (and map again)
          const fresh = await fetch("/api/profile/user-profile").then((r) => r.json());
          setProfile({
            rollNo: fresh.roll_no,
            semester: fresh.semester,
            branch: fresh.branch,
            user_name: fresh.user_name,
            college_name: fresh.college_name,
          });
          // finally redirect off the “complete” view
          router.push("/");
        }}
      />
    );
  }

  // fully signed‐in + profile complete
  return (
    router.push("/") // redirect to dashboard
  );
}