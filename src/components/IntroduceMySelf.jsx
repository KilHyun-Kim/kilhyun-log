import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import "../css/IntroduceMySelf.css";
import Kilhyun from "../image/image001.png";
const IntroduceMySelf = props => {
  return (
    <div className="myselfContainer">
      <div className="myPicture">
        <img src={Kilhyun} alt={props.alt} />
      </div>
      <div className="__intro">
        <p>development & life log</p>
      </div>
      <div className="goal">
        <p>" 풀스택을 꿈꾸는 아기 개발자 "</p>
        <p className="__pbold">
          <b>김 길 현</b>(Kilikili)
        </p>
      </div>
      <div className="Expression">
        <div></div>
      </div>
      <div className="__SNSIcon">
        <ul>
          <li>
            <a href="https://github.com/KilHyun-Kim" target="blank">
              <GoMarkGithub size="100%" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kiryeonee_wj/?hl=ko"
              target="blank"
            >
              <FaInstagram size="90%" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IntroduceMySelf;
