import React from "react";
import "../css/Main.css";
import ToggleButton from "./ToggleButton";
import MainSliderList from "./MainSliderList";
// Image Link

const Main = () => {
  return (
    <main>
      <ToggleButton />
      <MainSliderList />
    </main>
  );
};

export default Main;
