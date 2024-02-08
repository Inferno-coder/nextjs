"use client"
import { useRouter } from "next/navigation";
export default function dashboard() {
  const router=useRouter()
    const back=()=>{
      router.push('/')
    }
    return (
      <section className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1>Dashboard</h1>
       <button onClick={back}>back</button>
      </section>
    );
  }
  