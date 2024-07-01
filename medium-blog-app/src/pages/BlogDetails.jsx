import { useNavigate } from "react-router-dom";

function BlogDetails() {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <>
      blog details page
      <button type="button" onClick={handleClick}>
        Go Back ⏪
      </button>
    </>
  );
}

export default BlogDetails;
