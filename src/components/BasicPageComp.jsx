import React from "react";
import { Link } from "react-router-dom";

import "../css/BasicPageComp.css";

export const PageSequence = props => {
  return (
    <div className="listSequence">
      <ul>
        <li>1</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

const BasicPageComp = props => {
  return (
    <div className="__listContent">
      <Link to={props.hyperLink} className="listimage">
        <img src={props.src} alt={props.alt} />
      </Link>
      <div className="listExplanation">
        <Link to={props.hyperLink} className="link_post">
          <strong className="tit_post">{props.projectName}</strong>
          <p className="p_post">{props.explanation}</p>
        </Link>
        <div className="detael_info">
          <Link to={props.hyperLink}>{props.addEx}</Link>
          <span className="txt_bar"></span>
          <span className="txt_date">{props.days}</span>
        </div>
      </div>
    </div>
  );
};

export default BasicPageComp;
