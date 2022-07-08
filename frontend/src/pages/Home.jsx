import Header from "../components/header";
import { useState, useEffect } from "react";
import axios from "axios";
// import Blog from "../components/blogPreview";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import parse from "html-react-parser";
import React from "react";
import Navbar from "../components/navbar";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  async function getBlogs() {
    try {
      const data = await axios.get("http://localhost:3001/api/v1/home");
      setBlogs(data.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(id) {
    try{
      const res = await axios.delete(`http://localhost:3001/api/v1/delete/${id}`) 
      console.log(res)
      setBlogs(res.data)
    }
    catch(err){
      console.error(err);
    }
  }

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
        <Navbar />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="home flex flex-col gap-2 ">
          <Header />
          <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
            {/* <section className="blogs flex flex-col gap-12 justify-top items-center mt-14 border-yellow-800 max-w-2xl mx-auto"> */}
            {blogs.map((blog) => {
              return (
                <div
                  key={blog._id}
                  className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20"
                >
                  <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                    20 Nov 2020
                  </p>
                  <Link
                    to={`/blog/${blog?._id}`}
                    className="hover:text-purple-900 inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    aria-label="Read article"
                    title="Nori grape silver beet broccoli kombu beet"
                  >
                    {blog?.title}
                  </Link>
                  <p className="max-w-xs mx-auto mb-2 text-gray-700">
                    {parse(`${blog?.body}`)}
                  </p>
                  <div className="flex justify-center gap-8 items-center">
                    <Link
                      to={`/blog/${blog?._id}`}
                      aria-label=""
                      className="hover:text-purple-900 inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      Read more
                    </Link>
                    <Link to={`/edit/${blog?._id}`}>
                      <FiEdit />
                    </Link>
                    <button onClick={() => {
                      handleDelete(blog?._id)
                    }}>
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              );
            })}
            {/* </section> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
