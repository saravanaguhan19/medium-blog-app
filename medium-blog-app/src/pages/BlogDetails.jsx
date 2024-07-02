import { useNavigate, useParams } from "react-router-dom";

function BlogDetails({ blogs }) {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  const { id } = useParams();

  const selectedBlog = blogs.find((blog) => blog.id == id);
  console.log(selectedBlog);

  return (
    <>
      blog details page
      <button type="button" onClick={handleClick}>
        Go Back ⏪
      </button>
      <div>blog number .{id}</div>
      <div>{selectedBlog.title}</div>
      <div>{selectedBlog.content}</div>
    </>
  );
}

export default BlogDetails;
