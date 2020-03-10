import React from "react";
import { Link } from "react-router-dom";
import { FaListAlt } from "react-icons/fa";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";

import "../css/BasicPageComp.css";

export const PageSequence = props => {
  return (
    <div className="listSequence">
      <ul>
        <li>
          <Link to={props.list1} />
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export const PageFooter = props => {
  return (
    <footer>
      <div className="PageFooterContainer">
        <ul>
          <li>
            <Link to={props.Prev}>
              <p>
                <TiArrowLeftOutline />
                <span>Previous Post</span>
              </p>
            </Link>
          </li>
          <li>
            <Link to={props.List}>
              <p>
                <FaListAlt />
                <span>List</span>
              </p>
            </Link>
          </li>
          <li>
            <Link to={props.Next}>
              <p>
                <span>Next Post</span>
                <TiArrowRightOutline />
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
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
