"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export const dynamic = "force-dynamic";

export default function AuthErrorPage() {
  const params = useSearchParams();
  const error = params?.get("error") || "Unknown";
  const router = useRouter();
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      if (window.confirm( `Authentication Failed. \n Please use your GITAM email.\nError: ${error}`)) {
        router.push("/login");
      } else {
        router.push("/");
      }
      effectRan.current = true;
    }
  }, [router, error]);
  
  return null;
}