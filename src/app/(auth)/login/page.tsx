"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/api/auth/login"); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Login with Auth0
      </button>

      <p className="mt-4">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
