'use client'
import Image from "../../node_modules/next/image";
import LoginForm from "./login/page";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  const token = typeof window !== "undefined" ? localStorage.getItem('token') : null;

  useEffect(() => {
    if (token) {
      router.push('/todolist');
    }
  }, [token, router]);

  return (
    <div className="flex flex-col mx-auto items-center">
      {!token ? <LoginForm /> : <div></div>}
    </div>
  );
}
