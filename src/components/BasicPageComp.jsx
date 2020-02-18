import React from "react";
import "../css/BasicPageComp.css";
const BasicPageComp = props => {
  return (
    <div className="__listContent">
      <a href={props.hyperLink} className="listimage">
        <img src={props.src} alt={props.alt} />
      </a>
      <div className="listExplanation">
        <a href={props.hyperLink} className="link_post">
          <strong className="tit_post">{props.projectName}</strong>
          <p className="p_post">{props.explanation}</p>
        </a>
        <div className="detael_info">
          <a href={props.hyperLink}>{props.addEx}</a>
          <span className="txt_bar"></span>
          <span className="txt_date">{props.days}</span>
        </div>
      </div>
    </div>
  );
};

export default BasicPageComp;
