export default function({heading, subtitle}) {
  return (
    <>

      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-32">
        
        <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-6xl">{heading || "a.Blog"}</span>
          </span>{' '} 
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        {"Good reads for all needs. Enjoy the best articles by the best in their various industries" && subtitle}
        </p>
      </div> 
    </>
  )
} 