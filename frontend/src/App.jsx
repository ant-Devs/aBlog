import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css";
import EditBlog from "./pages/EditBlog";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog/:blogId" element={<Blog />} />
        <Route path="edit/:blogId" element={<EditBlog />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
