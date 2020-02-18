import React from "react";
import "../../css/BasicProjectPage.css";
const ProjectTopic = props => {
  return (
    <div className="ProjectTopic">
      <h2>{props.topic}</h2>
    </div>
  );
};

export default ProjectTopic;

export const ProjectExplain = props => {
  return (
    <div className="ProjectExplain">
      <h3> {props.explain1}</h3>
      <p> {props.p11}</p>
      <p>{props.p12}</p>
      <p>{props.p13}</p>
      <h3> {props.explain2}</h3>
      <p> {props.p21}</p>
      <p>{props.p22}</p>
      <p>{props.p23}</p>
      <h3> {props.explain3}</h3>
      <p> {props.p31}</p>
      <p>{props.p32}</p>
      <p>{props.p33}</p>
    </div>
  );
};

export const ProjectImage = props => {
  return (
    <div className="ProjectImage">
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export const ProjectBackface = props => {
  return (
    <div className="panelList">
      <div class="panel">
        <div class="front card">
          <div className="frontcontent">
            <img src={props.src1} alt={props.alt1} />
          </div>
        </div>
        <div class="back card">
          <div className="backcontent">
            <h3>{props.back1h3}</h3>
            <p>{props.back1}</p>
            <p>{props.back11}</p>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="front card">
          <div className="frontcontent">
            <img src={props.src2} alt={props.alt2} />
          </div>
        </div>
        <div class="back card">
          <div className="backcontent">
            <h3>{props.back2h3}</h3>
            <p>{props.back2}</p>
            <p>{props.back21}</p>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="front card">
          <div className="frontcontent">
            <img src={props.src3} alt={props.alt3} />
          </div>
        </div>
        <div class="back card">
          <div className="backcontent">
            <h3>{props.back3h3}</h3>
            <p>{props.back3}</p>
            <p>{props.back31}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectVideo = props => {
  return (
    <div className="videoCon">
      <iframe
        width="1063"
        height="554"
        src={props.src}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title={props.title}
      ></iframe>
    </div>
  );
};

export const ProjectTwoImage = props => {
  // let cnt = 0;
  // const openLayer = (IdName, tpos, lpos) => {
  //   if (cnt === 0) {
  //     const pop = document.getElementById(IdName);
  //     pop.style.display = "block";
  //     pop.style.top = tops + "px";
  //     pop.style.left = lpos + "px";
  //   }
  // };
  // const closeLayer = IdName => {
  //   const pop = document.getElementById(IdName);
  //   pop.style.display = "none";
  //   cnt = 0;
  // };
  return (
    <div className="twoImageContainer">
      <img src={props.src1} alt={props.alt1} />
      <img src={props.src2} alt={props.alt2} />
    </div>
  );
};

export const PriceImage = props => {
  return (
    <div className="PriceImage">
      <img src={props.src1} alt={props.alt} />
      <img src={props.src2} alt={props.alt} />
    </div>
  );
};
