import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import BlogPage from "./BlogPage";
import BlogDetails from "./BlogDetails";
import CreateBlog from "./CreateBlog";
import { useState } from "react";

function Landing() {
  const [blogs, setBlogs] = useState([
    {
      title: "",
      content: "",
      createdBy: "Saravana",
      createAt: "15 min ago.",
      comments: [{}],
    },
  ]);


  const [blog , setBlog] = useState({
    title: "",
    content: "",
    createdBy: "Saravana",
    createAt: "15 min ago.",
    comments: [{}],
  })

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
