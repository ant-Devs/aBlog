export default function Nav() {
  return (
    < nav className="bg-gray-800 absolute w-full bottom-0 rounded-t-[0.8rem]" >
      <div className="flex items-center justify-between px-9 space-x-4">
        <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trending</a>
      </div>
    </nav >

  )
}     
