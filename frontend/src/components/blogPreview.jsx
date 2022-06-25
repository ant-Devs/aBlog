
export default function Blog({ date, views, title, image }) {
  return (
    <>
      <div className="flex justify-bewteen gap-2 items-center min-w-[19rem] w-10/12 max-w-[25rem] h-32">
        <div>
          <h3 className="text-xl tracking-7  font-bold" style={{ "lineHeight": "1.1", "flex": "1 1 80%" }}>{title || "Title of the blogger goes here too again"}</h3>
          <div className="flex text-sm text-neutral-700 gap-5">
            <p>{date || "date"}</p>
            <p>{views || "views"}</p>
          </div>
        </div>

        <div className="bg-gray-400  h-full min-w-[8rem]" style={{ "flex": "1 1 80%" }}>
          <img src={image} alt="pic" />
        </div>
      </div>
    </>
  )
} 
