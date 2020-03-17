import React from "react";
import BasicPageComp from "../BasicPageComp";
import Mayday from "../../image/smilemaydayicon.png";
import WORKROOM8363 from "../../image/workroom8363.png";
import Algoppobja from "../../image/koreaColormap.gif";

const ProjectList = () => {
  const projectValue = [
    {
      hyperLink: "/project/mayday",
      projectName: "MAYDAY",
      explanation: "Arduino & Android 플랫폼을 활용한 긴급구조 어플리케이션",
      addEx: "AndroidStudio, Java / UI&UX",
      days: "2019.10.31",
      src: Mayday,
      alt: "Mayday"
    },
    {
      hyperLink: "/project/workroom8363",
      projectName: "WORKROOM8363",
      explanation: "WORKROOM8363 - 가죽공방 웹 사이트",
      addEx:
        "HTML, CSS, JavaScript, Ajax, Node.JS, AWS / UI&UX, Front-end,back-end",
      days: "2019.12.15",
      src: WORKROOM8363,
      alt: "workroom8363"
    },
    {
      hyperLink: "/project/algoppobja",
      projectName: "Algoppobja",
      explanation: "2020.4.15 국회의원 선거 후보 정보 및 공약 웹 사이트 ",
      addEx: "React, JSX , AWS / UI&UX , Front-end",
      days: "2020.2.20",
      src: Algoppobja,
      alt: "korea"
    }
  ];
  return (
    <div className="__listContainer">
      {projectValue.map((value, index) => {
        return (
          <BasicPageComp
            hyperLink={value.hyperLink}
            projectName={value.projectName}
            explanation={value.explanation}
            addEx={value.addEx}
            days={value.days}
            src={value.src}
            alt={value.alt}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
