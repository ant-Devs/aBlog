import './App.css';
// import Navbar from "./components/navbar"
import Header from "./components/header"
import Blog from "./components/blogPreview"

function App() {
  return (
    <div className="App ">

      <div className="home flex flex-col gap-2">

        <Header />

        <section className="blogs flex flex-col gap-5 justify-top items-center border-yellow-800">
          <Blog />
        </section>
      </div>

    </div>
  );
}

export default App;


