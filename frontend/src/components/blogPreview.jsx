
export default function Blog({ date, views, title, image }) {
  return (
    <>
      <div className="flex justify-bewteen gap-2 items-center min-w-[19rem] w-9/12 max-w-[25rem] md:max-w-[40rem] ">
        <div>
          <h3 className="text-xl md:text-4xl font-bold" style={{ "lineHeight": "1", "flex": "1 1 90%" }}>{title || "Title of the blogger goes here too again"}</h3>
          <div className="flex md:mt-3 mt-2 text-sm md:text-xl text-neutral-700 gap-5">
            <p>{date || "date"}</p>
            <p>{views || "views"}</p>
          </div>
        </div>

        <div className="bg-gray-400 h-28 md:h-44 min-w-[8rem] max-w-[15rem]" style={{ "flex": "1 1 80%" }}>
          <img src={image} alt="pic" />
        </div>
      </div>
    </>
  )
} 
