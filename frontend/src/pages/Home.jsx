import Header from "../components/header"
import Blog from "../components/blogPreview"
import Footer from "../components/footer"

export default function Home() {

  return (
    <>
      <div className="home flex flex-col gap-2">
        <Header />
        <section className="blogs flex flex-col gap-5 justify-top items-center border-yellow-800">
          <Blog />
        </section>
        <Footer />
      </div>
    </>

  )
}
