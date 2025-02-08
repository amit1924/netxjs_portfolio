"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    router.push("/api/auth/login"); // ✅ Automatically redirects to Auth0 login
  }, [router]);

  return null; // ✅ No UI, just redirects
}
