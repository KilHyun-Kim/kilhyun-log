import React from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import Routers from "./Router";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routers />
      <div
        className="TopButton"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <FaRegArrowAltCircleUp size="100%" />
      </div>
    </div>
  );
}

export default App;
