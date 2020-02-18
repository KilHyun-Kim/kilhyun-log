import React from "react";
import Title from "../../Title";
import BasicPageComp from "../../BasicPageComp";

const TypescriptPageList = () => {
  const typescriptValue = [
    {
      hyperLink: "/development/typescript/2",
      projectName: "TypeScript (2)",
      explanation: "타입 스크립트의 기본",
      addEx: "Kilikili",
      days: "2020.02.18",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkwHQXF-IBgKHlLjknQYO19p17CglyiDfk3vmvwhMtU29qvHU"
    },
    {
      hyperLink: "/development/typescript/1",
      projectName: "TypeScript (1)",
      explanation: "타입 스크립트의 기본",
      addEx: "Kilikili",
      days: "2020.02.18",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkwHQXF-IBgKHlLjknQYO19p17CglyiDfk3vmvwhMtU29qvHU"
    }
  ];
  return (
    <div className="projectContainer">
      <Title title="< TYPESCRIPT />" />
      <div className="__listContainer">
        {typescriptValue.map((value, index) => {
          return (
            <BasicPageComp
              hyperLink={value.hyperLink}
              projectName={value.projectName}
              explanation={value.explanation}
              addEx={value.addEx}
              days={value.days}
              src={value.src}
              alt={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TypescriptPageList;
