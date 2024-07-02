import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/create-blog");
  return (
    <div className="flex justify-between items-center">
      <div
        className="text-4xl font-bold font-san ml-2  cursor-pointer"
        onClick={() => navigate("/")}
      >
        Medium
      </div>
      <div className="flex justify-between gap-3">
        <input
          className="border-2 w-64 rounded-xl text-xl outline-none "
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        <button
          className="bg-black text-white rounded-l p-2"
          onClick={handleClick}
        >
          Create Blog
        </button>
      </div>
      <div className="rounded-full bg-red-700 w-14 h-14 flex justify-center items-center text-white font-mono font-bold text-2xl mt-3 mr-2">
        S
      </div>
    </div>
  );
}

export default Navbar;
