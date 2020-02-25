import React from "react";
import Title from "../../Title";
import BasicPageComp, { PageSequence } from "../../BasicPageComp";

const ReactPageList = () => {
  const reactValue = [
    {
      hyperLink: "/development/react/5",
      projectName: "React Hooks",
      explanation: "Hooks란? ",
      addEx: "Kilikili",
      days: "2020.02.23",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRocUoXxlU56R1famwmPRbu0KojGdkG0m6qbiKXmw_SQ6RMV62u"
    },
    {
      hyperLink: "/development/react/4",
      projectName: "LifeCycle API",
      explanation: "리액트의 Props & State",
      addEx: "Kilikili",
      days: "2020.02.18",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw6okdjEaiI-FLyYGxnStPc6zePEAACc_DFyKpciDBlX1jghk2"
    },

    {
      hyperLink: "/development/react/3",
      projectName: "props & state (2)",
      explanation: "리액트의 Props & State",
      addEx: "Kilikili",
      days: "2020.02.18",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt-cqDQExlA06PDUkxD5egEWH3NVqUi9CnWvy74D4vv63dfnDk"
    },
    {
      hyperLink: "/development/react/2",
      projectName: "props & state (1)",
      explanation: "리액트의 Props & State",
      addEx: "Kilikili",
      days: "2020.02.18",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt-cqDQExlA06PDUkxD5egEWH3NVqUi9CnWvy74D4vv63dfnDk"
    },
    {
      hyperLink: "/development/react/1",
      projectName: "React",
      explanation: "리액트를 시작하며",
      addEx: "Kilikili",
      days: "2020.02.21",
      src:
        "data:image/png;base64,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"
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
      <footer>
        <PageSequence list1="1" />
      </footer>
    </div>
  );
};
export default ReactPageList;
