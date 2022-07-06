import Header from "../components/header";
import axios from "axios"
import Blog from "../components/blogPreview";
import Footer from "../components/footer";
// import Nav from "../components/nav  ";

export default function Home() {
  async function getBlogs() {
    const data = await axios.get("http://localhost:3001/api/v1/home")
    console.log(data);
  }
  getBlogs();
  return (
    <>
      <div className="home flex flex-col gap-2">
        {/* <nav className="fixed flex justify-between px-14 py-3 ">
          <p>Logo</p>
          <div className="flex ">
            <p>Logo</p>
            <p>Logo</p>
          </div>
        </nav> */}
        <Header />
        <section className="blogs flex flex-col gap-5 justify-top items-center border-yellow-800">
          {
            
          }
        </section>
        <Footer />
      </div>
    </>
  );
}
