import React from "react";
import Title from "../../Title";
import BasicPageComp from "../../BasicPageComp";

const ReactPageList = () => {
  const reactValue = [
    {
      hyperLink: "/development/react/1",
      projectName: "props & state (1)",
      explanation: "리액트의 Props & State",
      addEx: "Kilikili",
      days: "2020.02.18",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt-cqDQExlA06PDUkxD5egEWH3NVqUi9CnWvy74D4vv63dfnDk"
    }
  ];
  return (
    <div className="projectContainer">
      <Title title="< REACT />" />
      <div className="__listContainer">
        {reactValue.map((value, index) => {
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
export default ReactPageList;
