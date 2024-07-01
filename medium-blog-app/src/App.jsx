import { BrowserRouter } from "react-router-dom";
import Landing from "../src/pages/Landing";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    </>
  );
}

export default App;
