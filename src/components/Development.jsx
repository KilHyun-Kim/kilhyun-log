import React from "react";
import Title from "./Title";
import "../css/Project.css";
import DevelopmentPage from "./development/DevelopmentPage";

const Development = () => {
  return (
    <div className="projectContainer">
      <Title title="＜DEVELOPMENT /＞" />
      <DevelopmentPage />
    </div>
  );
};

export default Development;
