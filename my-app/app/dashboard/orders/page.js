"use client"
import { useRouter } from "next/navigation";
export default function orders() {
    const router=useRouter()
    const back=()=>{
      router.push('/dashboard')
    }
    return (
      <section className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1>Order Details</h1>
       <button onClick={back}>back</button>
      </section>
    );
  }
  