import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import BlogPage from "./BlogPage";
import BlogDetails from "./BlogDetails";
import CreateBlog from "./CreateBlog";
import { useState } from "react";

function Landing() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "first blog",
      content: "content of the first blog",
      createdBy: "Saravana",
      createAt: "15 min ago.",
      comments: [{}],
    },
    {
      id: 2,
      title: "second blog",
      content: "content of the second blog",
      createdBy: "Saravana",
      createAt: "15 min ago.",
      comments: [{}],
    },
    {
      id: 3,
      title: "third blog",
      content: "content of the third blog",
      createdBy: "Saravana",
      createAt: "15 min ago.",
      comments: [{}],
    },
  ]);

  function updateBlog(blog) {
    console.log(blog);
    console.log("blog added ");
    setBlogs([...blogs, blog]);
  }

  return (
    <div>
      <Navbar updateBlogs={setBlogs} />

      <Routes>
        <Route exact path="/" element={<BlogPage blogs={blogs} />}></Route>
        <Route path="/blog/:id" element={<BlogDetails blogs={blogs} />}></Route>
        <Route
          path="/create-blog"
          element={
            <CreateBlog updateBlog={(blog) => updateBlog(blog)} blogs={blogs} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default Landing;
