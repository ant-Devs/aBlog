import Header from "../components/header";
import { useState, useEffect } from 'react';
import axios from "axios"
// import Blog from "../components/blogPreview";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import {FiEdit} from "react-icons/fi"

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
                <figure className="flex gap-3">
                  <figcaption className="w-8/12 flex flex-col justify-between">
                    <Link to={`blog/${blog._id}`}>
                      <div>
                        <h3 className="text-2xl font-semibold">{blog?.title}</h3>
                        <p>{blog.body?.substr(0, 160) + "..."}</p>
                      </div>
                    </Link>
                    <div className="w-5/6 flex justify-between gap-5 text-sm text-gray-700">
                      <div>
                        <p>{blog?.author}</p>
                        <p>{blog?.date}</p>
                      </div>
                      <div className="">
                        <Link to={`edit/${blog._id}`}>
                          <FiEdit />
                        </Link>
                      </div>
                    </div>
                  </figcaption>
                  <div className="bg-gray-400 w-5/12 min-h-[9rem]">
                    <img src="" alt="" srcset="" />
                  </div>
                </figure>
              </>
            })
          }
        </section>
        <Footer />
      </div>
    </>
  );
}
