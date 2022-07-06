import Header from "../components/header";
import { useState, useEffect } from 'react';
import axios from "axios"
import Blog from "../components/blogPreview";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
// import Nav from "../components/nav  ";

export default function Home() {

  const [blogs, setBlogs] = useState([]);

  async function getBlogs() {
    try {
      const data = await axios.get("http://localhost:3001/api/v1/home")
      setBlogs(data.data);
    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getBlogs();
  }, [])

  return (
    <>
      <div className="home flex flex-col gap-2">
        <Header />
        <section className="blogs flex flex-col gap-12 justify-top items-center mt-14 border-yellow-800 max-w-2xl mx-auto">
          {
            blogs.map((blog) => {
              return <>
                <Link to={`blog/${blog._id}`}>
                <figure className="flex gap-3">
                  <figcaption className="w-8/12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold">{blog?.title}</h3>
                      <p>{blog.body?.substr(0, 160)+"..."}</p>
                    </div>
                    <div className="flex gap-5 text-sm text-gray-700">
                      <p>{blog?.author}</p>
                      <p>{blog?.date}</p>
                    </div>
                  </figcaption>
                  <div className="bg-gray-400 w-5/12 min-h-[9rem]">
                    <img src="" alt="" srcset="" />
                  </div>
                </figure>
                </Link>
              </>
            })
          }
        </section>
        <Footer />
      </div>
    </>
  );
}
