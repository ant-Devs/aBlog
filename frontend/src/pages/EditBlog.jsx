import { useRef, useState } from "react";
import ReactQuill from 'react-quill';
import Footer from "../components/footer"

import "react-quill/dist/quill.bubble.css"
import "react-quill/dist/quill.snow.css"

import modules from "../components/editor"

import "../styles/edit.css"


export default function EditBlog() {

  const bodyRef = useRef();
  const titleRef = useRef();
  const inputRef = useRef();
  const [backgroundImg, setBg] = useState();

  return (
    <>
      <header
        style={{
          "backgroundImage": `url()`
        }}
        className="relative flex mb-14 flex-col justify-center items-center text-center px-4 py-24 min-h-[20rem] h-[70vh] max-h-[40rem] text-gray-200 bg-gray-800">
        <h2
          className="font-semibold text-5xl md:text-7xl w-11/12 max-w-[53rem]"
          contentEditable="true"
          ref={titleRef}
        >
          Title of the blog goes here where it belongs
        </h2>

        <button
          className="absolute bottom-10 active:scale-90 right-40 btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded text-3xl"
          onClick={() => {
            inputRef.current.click();
          }}
        >

          <input
            ref={inputRef}
            value={backgroundImg}
            onChange={(e) => {
              // let fileReader = new FileReader();

              // fileReader.onload = function(event) {
              //   setBg(event.target.result);
              // }
              // fileReader.readAsDataURL(e.target.files[0])
              setBg(e.target.files[0])
            }}
            className="hidden"
            type="file"
            accept="image/jpeg, image/png"
          />

          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"></path></svg>
        </button>
      </header>
      <section id="body" className="text-xl flex flex-col mx-auto w-10/12 max-w-[44rem]">

        <ReactQuill
          ref={bodyRef}
          theme="snow"
          modules={modules}
          placeholder="Type the body here:"
        />
      </section>

      <Footer />
    </>
  )
}
