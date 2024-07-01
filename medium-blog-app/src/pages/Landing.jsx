import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import BlogPage from "./BlogPage";
import BlogDetails from "./BlogDetails";
import CreateBlog from "./CreateBlog";

function Landing() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<BlogPage />}></Route>
        <Route path="/blog" element={<BlogDetails />}></Route>
        <Route path="/create-blog" element={<CreateBlog />}></Route>
      </Routes>
    </div>
  );
}

export default Landing;
