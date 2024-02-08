"use client"
import { useState } from "react"
import { useEffect } from "react"

export default function Posts({params}){ 
    const id=params.id
    const [post,setPost]=useState(null)
    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_API_URL+'/post/'+id)
        .then((res)=>res.json())
        .then((res)=>setPost(res))
       },[])
   return(
    <>
    { post && <main class="container mx-auto px-4 py-6">
        <h2 class="text-4xl font-bold mb-4">{post.title}</h2>
        <p class="text-gray-500">Published on {post.created_at_formatted}</p>
        <img width={500} src={post.image} alt="Post Image" class="my-4"/>
        <p>{post.desc}</p>
    </main>
   }
   </>
   )
}