import React from "react";
import "../../css/TravelPage.css";

export const TravelFolder = props => {
  return (
    <div className="FirstRow">
      <div className="Icon">
        <img
          src="https://static.thenounproject.com/png/715939-200.png"
          alt="폴더"
        />
      </div>
      <p>{props.Folder}</p>
      <div className="rightIcons">
        <img
          src="https://static.thenounproject.com/png/3123810-200.png"
          alt="최소화"
        />
        <img
          src="https://static.thenounproject.com/png/2042437-200.png"
          alt="최대화"
        />
        <img
          src="https://static.thenounproject.com/png/2939490-200.png"
          alt="닫기"
        />
      </div>
    </div>
  );
};

export const TravelImage = props => {
  console.log(props.src);
  return (
    <div className="TravelImages">
      <img src={props.src1} alt={props.alt1} />
      <img src={props.src2} alt={props.alt2} />
      <img src={props.src3} alt={props.alt3} />
      <img src={props.src4} alt={props.alt4} />
      <p>{props.text}</p>
    </div>
  );
};

const TravelPage = props => {
  return (
    <div className="TravelLists">
      <a href={props.href}>
        <div className="Koki">
          <img src={props.src} alt={props.srcAlt} />
          <div className="MapImage">
            <img src={props.mapSrc} alt={props.mapSrcAlt} />
          </div>
          <p>{props.info}</p>
        </div>
      </a>
    </div>
  );
};

export default TravelPage;
