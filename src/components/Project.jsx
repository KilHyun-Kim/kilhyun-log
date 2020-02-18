import React from "react";
import Title from "./Title";
import "../css/Project.css";
import ProjectList from "./projects/ProjectList";

const Project = () => (
  <div className="projectContainer">
    <Title title="＜PROJECT /＞" />
    <ProjectList />
  </div>
);
export default Project;
