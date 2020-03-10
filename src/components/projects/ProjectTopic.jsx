import React from "react";
import "../../css/BasicProjectPage.css";
import ExifOrientationImg from "react-exif-orientation-img";

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

export const ProjectMainImage = props => {
  return (
    <div className="ProjectImage">
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export const ProjectMainCircleImage = props => {
  return (
    <div className="ProjectImageCircle">
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

// export const ProjectTwoImage = props => {
//   // let cnt = 0;
//   // const openLayer = (IdName, tpos, lpos) => {
//   //   if (cnt === 0) {
//   //     const pop = document.getElementById(IdName);
//   //     pop.style.display = "block";
//   //     pop.style.top = tops + "px";
//   //     pop.style.left = lpos + "px";
//   //   }
//   // };
//   // const closeLayer = IdName => {
//   //   const pop = document.getElementById(IdName);
//   //   pop.style.display = "none";
//   //   cnt = 0;
//   // };
//   let cnt = 0;
//   const openLayer = IdName => {
//     if (cnt === 0) {
//       cnt++;
//       const pop = document.getElementById(IdName);
//       pop.style.display = "inline";
//     }
//   };
//   const closeLayer = IdName => {
//     const pop = document.getElementById(IdName);
//     pop.style.display = "none";
//     cnt = 0;
//   };
//   const style = {
//     position: "fixed",
//     width: "100%",
//     height: "100",
//     display: "none",
//     zIndex: "4",
//     top: "0",
//     backgroundColor: "black"
//   };
//   const style2 = {
//     width: "50%",
//     height: "100%",
//     margin: "0 auto"
//   };

//   console.log(props);
// const imageList = props.twoimages.map((image, index) => (
//   <>
//     <div className="Pamphlet" key={index} onClick={() => openLayer(index)}>
//       <img src={image.src} />
//     </div>
//     <div id={index} style={style} onClick={() => closeLayer(index)}>
//       <img src={image.src} style={style2} />
//     </div>
//   </>
// ));

// return <div className="twoImageContainer"></div>;
// };

export const ProjectImage = props => {
  let cnt = 0;
  const openLayer = (IdName, tpos, lpos) => {
    if (cnt === 0) {
      cnt++;
      lpos = "0";
      const pop = document.getElementById(IdName);
      pop.style.display = "inline-block";
      pop.style.left = lpos + "px";
    }
  };

  const closeLayer = IdName => {
    const pop = document.getElementById(IdName);
    pop.style.display = "none";
    cnt = 0;
  };
  const style = {
    position: "fixed",
    width: "100%",
    height: "100%",
    display: "none",
    zIndex: "4",
    top: "0",
    backgroundColor: "black",
    textAlign: "center"
  };
  const style2 = {
    width: "40%",
    height: "100%"
  };

  const projectImageList = props.images.map(image => (
    <>
      <div key={image.id} onClick={() => openLayer(image.id)}>
        <ExifOrientationImg src={image.src} />
      </div>
      <div id={image.id} style={style} onClick={() => closeLayer(image.id)}>
        <ExifOrientationImg src={image.src} style={style2} />
      </div>
    </>
  ));

  return <div className="ProjectImageList">{projectImageList}</div>;
};
