import React from "react";
import MainSlider from "./MainSlider";
import WorkroomImage from "../image/workroom8363.png";
import MaydayImage from "../image/smilemaydayicon.png";
import OtherprojectImage from "../image/otherproject.png";
import PromiseElection from "../image/koreamap (1).jpg";
// import WhiteImage from "../image/WhiteImage";
const MainSliderList = () => {
  const values = [
    {
      title: "Project",
      topic1: "MAYDAY",
      _src1: MaydayImage,
      _link1: "/project/mayday",
      alt1: "mayday",
      topic2: "Workroom8363",
      _src2: WorkroomImage,
      _link2: "/project/workroom8363",
      alt2: "workroom8363",
      topic3: "Promise Election",
      _src3: PromiseElection,
      _link3: "/project/election",
      alt3: "other",
      topic4: "MAYDAY",
      _src4: OtherprojectImage,
      _link4: "/project/mayday",
      id: "#circle"
    },
    {
      title: "Development",
      topic1: "JavaScript",
      _src1:
        "data:image/png;base64,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",
      _link1: "/development/javascript",
      alt1: "JavaScript",
      topic2: "TypeScript",
      _src2:
        "https://pbs.twimg.com/profile_images/1149708719178993664/3Hb8W4aX_400x400.png",
      _link2: "/development/typescript",
      alt2: "TypeScript",
      topic3: "React",
      _src3: "https://hackernoon.com/hn-images/1*To2H39eauxaeYxYMtV1afQ.png",
      _link3: "/development/react",
      alt3: "React",
      topic4: "CSS3",
      _src4:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
      _link4: "/development/css",
      alt4: "css3",
      _src5: OtherprojectImage,
      _link5: "/development"
    },
    {
      title: "Travel",
      topic1: "Saipan",
      _src1: "https://static.thenounproject.com/png/1751342-200.png",
      _link1: "/travel/saipan",
      topic2: "Kota Kinabalu",
      _src2: "https://static.thenounproject.com/png/622878-200.png",
      _link2: "/travel/koki",
      topic3: "Osaka",
      _src3: "https://static.thenounproject.com/png/777624-200.png",
      _link3: "/travel/osaka",
      topic4: "Osaka",
      _link4: "/travel/osaka",
      _src4: OtherprojectImage,
      _link5: "/travel"
    }
  ];

  return (
    <div className="MainSlider">
      {values.map((value, index) => {
        return (
          <MainSlider
            title={value.title}
            topic1={value.topic1}
            _src1={value._src1}
            _link1={value._link1}
            topic2={value.topic2}
            _src2={value._src2}
            _link2={value._link2}
            topic3={value.topic3}
            _src3={value._src3}
            _link3={value._link3}
            topic4={value.topic44}
            _src4={value._src4}
            _link4={value._link4}
            topic5={value.topic5}
            _src5={value._src5}
            _link5={value._link5}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default MainSliderList;
