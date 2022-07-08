import { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineSave } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import ReactQuill from "react-quill";
import Footer from "../components/footer";

import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

import modules from "../components/editor";

import "../styles/edit.css";
import axios from "axios";

export default function EditBlog() {
  const bodyRef = useRef();
  const titleRef = useRef();
  const inputRef = useRef();
  const [backgroundImg, setBg] = useState("");

  async function changeBg(file) {
    const reader = new FileReader();
    if (file) {
      console.log("file is found");
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        setBg(reader.result);
      };
    }
  }

  const params = useParams();

  const [blog, setBlog] = useState({});
  useEffect(() => {
    if (params.blogId) {
      (async function () {
        try {
          let blog = await axios.get(
            `http://localhost:3001/api/v1/blogs/${params.blogId}`
          );
          setBlog(blog?.data[0]);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, []);

  const navigate = useNavigate();
  async function handleSave() {
    // submit all data to api
    // all data:
    try {
      const body = bodyRef.current.state.value,
      title = titleRef.current.textContent;
      
      if(params.blogId){
      const res = await axios.patch(
        `http://localhost:3001/api/v1/edit/${params.blogId}`,
        { body, title }
      ); 
      // navigate to blog page
        navigate(`/blog/${params.blogId}`)
      }
      else{
        const res = await axios.post(
          `http://localhost:3001/api/v1/new/`,
          { body, title }
        ); 
        console.log(res);
        // navigate to blog page
          navigate(`/blog/${res.data._id}`)
        // }
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleCancel() {
    // navigate to blog page
    navigate("/")
  }

  return (
    <>
      <header
        style={{
          backgroundImage: `url("${backgroundImg}")`,
        }}
        className="relative flex mb-14 flex-col justify-center items-center text-center px-4 py-24 min-h-[20rem] h-[70vh] max-h-[40rem] text-gray-200 bg-gray-800"
      >
        <h2
          className="font-semibold text-5xl md:text-7xl w-11/12 max-w-[53rem]"
          contentEditable="true"
          ref={titleRef}
        >
          {blog?.title || "Title of the blog goes here where it belongs"}
        </h2>
      </header>
      <section
        id="body"
        className="text-xl flex flex-col mx-auto w-10/12 max-w-[44rem]"
      >
        <ReactQuill
          ref={bodyRef}
          theme="snow"
          modules={modules}
          value={blog?.body}
          placeholder="Type the body here:"
        />
        <div className="mt-4  flex  justify-end gap-3 ">
          <button
            onClick={handleCancel}
            className="btn rounded px-4 py-1 bg-orange-300 text-orange-900 flex items-center gap-2"
          >
            <MdOutlineCancel />
            Cancel
          </button>
          <button
            onClick={() => {
              handleSave();
            }}
            className="btn active:opacity-95 rounded px-4 py-1 bg-gray-800 text-gray-50 flex items-center gap-2"
          >
            <AiOutlineSave />
            Save
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
