import Footer from "../components/footer"

import {useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export default function Blog() {
  const params = useParams();
  

  const [blog, setBlog] = useState("")

  useEffect(()=>{
    (async function getBlog() {
      let blog = await axios.get(`http://localhost:3001/api/v1/blogs/${params.blogId}`)
      console.log(blog.data[0])
      setBlog(blog.data[0])
    })()
  },[])

  return (
    <>

      <article className=" mx-auto blog">
        <header className="flex mb-14 flex-col justify-center items-center text-center px-4 py-24 min-h-[20rem] h-[70vh] max-h-[40rem] text-gray-200 bg-gray-800">
          <h2 className="font-semibold text-5xl md:text-7xl w-11/12 max-w-[53rem]">{blog?.title}</h2>
        </header>
        <section id="body" className="text-xl flex flex-col mx-auto w-10/12 max-w-[44rem]">
          {blog?.body}
        </section>

      </article>

      <Footer />


    </>

  )
}
