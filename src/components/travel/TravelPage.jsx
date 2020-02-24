import React from "react";
import "../../css/TravelPage.css";
// import ExifOrientationImg from "react-exif-orientation-img";
import { Link } from "react-router-dom";
import ExifOrientationImg from "react-exif-orientation-img";

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
  let cnt = 0;
  const openLayer = (IdName, tpos, lpos) => {
    if (cnt === 0) {
      cnt++;
      const pop = document.getElementById(IdName);

      if (IdName >= 3 && IdName < 6) {
        tpos = 430;
      } else if (IdName >= 6 && IdName < 9) {
        tpos = 680;
      } else if (IdName >= 9 && IdName < 12) {
        tpos = 920;
      } else if (IdName >= 12 && IdName < 15) {
        tpos = 1200;
      } else if (IdName >= 15 && IdName < 18) {
        tpos = 1450;
      } else if (IdName >= 18 && IdName < 21) {
        tpos = 1700;
      } else if (IdName >= 21 && IdName < 24) {
        tpos = 1950;
      } else if (IdName >= 24 && IdName < 27) {
        tpos = 2200;
      } else if (IdName >= 27 && IdName < 30) {
        tpos = 2450;
      } else if (IdName >= 30 && IdName < 33) {
        tpos = 2700;
      }
      pop.style.display = "inline";
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
    height: "100",
    display: "none",
    zIndex: "2",
    top: "0",
    backgroundColor: "black"
  };
  const style2 = {
    width: "50%",
    height: "100%",
    margin: "0 auto"
  };

  const imageList = props.images.map((image, index) => (
    <>
      <div
        className="img_wrapper box1"
        key={index}
        onClick={() => openLayer(index, 0, 0)}
      >
        <ExifOrientationImg src={image.src} />
        <p>{image.text}</p>
        <div className="hover_box" key={index}></div>
      </div>
      <div id={index} style={style} onClick={() => closeLayer(index)}>
        <ExifOrientationImg src={image.src} style={style2} />
      </div>
    </>
  ));

  return <div className="TravelImageLists">{imageList}</div>;
};

const TravelPage = props => {
  return (
    <div className="TravelLists">
      <Link to={props.href}>
        <div className="Koki">
          <img src={props.src} alt={props.srcAlt} />
          <div className="MapImage">
            <img src={props.mapSrc} alt={props.mapSrcAlt} />
          </div>
          <p>{props.info}</p>
        </div>
      </Link>
    </div>
  );
};

export default TravelPage;
