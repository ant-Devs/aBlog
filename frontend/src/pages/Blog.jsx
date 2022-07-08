import Footer from "../components/footer"

import {useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import parse  from "html-react-parser";
import Navbar from "../components/navbar";
import Header from "../components/header";

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
    <div className="fixed top-0 w-full">
      
    <Navbar />
    </div>
      <article className=" mx-auto blog">
        <Header heading={blog?.title} />
        <section id="body" className="text-xl flex flex-col mx-auto w-10/12 max-w-[44rem]">
          {parse(`${blog?.body}`)}
        </section>

      </article>

      <Footer />


    </>

  )
}
