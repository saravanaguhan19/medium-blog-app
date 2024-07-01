import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  const [blog, setBlog] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Go Back ⏪
      </button>

      <div className="flex  flex-col justify-center items-center">
        <form action="">
          <input
            className="border-none   w-[650px] h-[120px]  font-medium text-4xl outline-none"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            id="title"
          />
          <div>
            <textarea
              className="w-[450px] h-[500px]  outline-none text-4xl"
              placeholder="Tell a story..."
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center items-center my-4 bg-black w-28 text-white">
            <button onClick={() => setBlog({ title, content })}>Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
