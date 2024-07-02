import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog({ updateBlog, blogs }) {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Go Back ⏪
      </button>

      <div className="flex  flex-col justify-center items-center">
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
            className="w-[650px] h-[500px]  outline-none text-4xl"
            placeholder="Tell a story..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center items-center my-4  text-white">
          <button
            className="rounded-xl  bg-black w-28 h-12"
            onClick={(e) => {
              e.preventDefault();

              updateBlog({
                id: blogs.length + 1,
                title: title,
                content: content,
                createdBy: "Saravana",
                createAt: new Date().toString(),
                comments: [{}],
              });

              setTitle("");

              setContent("");

              navigate("/");
            }}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
