import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Go Back ⏪
      </button>

      <div className="flex justify-center items-center">
        <form action="">
          <input
            className="border-none  bg-red-500 w-[450px] h-[150px]  font-medium text-4xl outline-none"
            placeholder="Title"
            
            type="text"
            name="title"
            id="title"
          />
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
