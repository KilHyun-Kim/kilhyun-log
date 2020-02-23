import React, { useState } from "react";
import koki1 from "../../image/koki/koki1.jpg";
import koki2 from "../../image/koki/koki2.jpg";
import koki3 from "../../image/koki/koki3.jpg";
import koki4 from "../../image/koki/koki4.jpg";
import koki5 from "../../image/koki/koki5.jpg";
import koki6 from "../../image/koki/koki6.jpg";
import koki7 from "../../image/koki/koki7.jpg";
import koki8 from "../../image/koki/koki8.jpg";
import koki9 from "../../image/koki/koki9.jpg";
import koki10 from "../../image/koki/koki10.jpg";
import koki11 from "../../image/koki/koki11.jpg";
import koki12 from "../../image/koki/koki12.jpg";
import koki13 from "../../image/koki/koki13.jpg";
import koki14 from "../../image/koki/koki14.jpg";
import koki15 from "../../image/koki/koki15.jpg";
import koki16 from "../../image/koki/koki16.jpg";
import koki17 from "../../image/koki/koki17.jpg";
import koki18 from "../../image/koki/koki18.jpg";
import koki19 from "../../image/koki/koki19.jpg";
import koki20 from "../../image/koki/koki20.jpg";
import koki21 from "../../image/koki/koki21.jpg";
import koki22 from "../../image/koki/koki22.jpg";
import koki23 from "../../image/koki/koki23.jpg";
import koki24 from "../../image/koki/koki24.jpg";
import koki25 from "../../image/koki/koki25.jpg";
import koki26 from "../../image/koki/koki26.jpg";
import koki27 from "../../image/koki/koki27.jpg";
import koki28 from "../../image/koki/koki28.jpg";
import koki29 from "../../image/koki/koki29.jpg";
import koki30 from "../../image/koki/koki30.jpg";
import koki31 from "../../image/koki/koki31.jpg";
import koki32 from "../../image/koki/koki32.jpg";
import { TravelFolder } from "./TravelPage";
import ExifOrientationImg from "react-exif-orientation-img";

import "../../css/TravelBC.css";

const KokiPage = () => {
  const [images] = useState([
    { src: koki1, text: "숙소에서 함께 김치!!.jpg" },
    { src: koki2, text: "비행기 처음타는 우지.jpg" },
    { src: koki3, text: "비행기 안에서 풍경.jpg" },
    { src: koki4, text: "비행기가 맘에든 우지.jpg" },
    { src: koki5, text: "비행기 쓰담 우지.jpg" },
    { src: koki6, text: "머리 꾸미는 우지.jpg" },
    { src: koki7, text: "우지의 뒷모습.jpg" },
    { src: koki8, text: "Kota Kinabalu!.jpg" },
    { src: koki9, text: "코타키나발루 거리.jpg" },
    { src: koki10, text: "좋은날씨와 예쁜꽃.jpg" },
    { src: koki11, text: "풍경과 우지의 뒷모습.jpg" },
    { src: koki12, text: "맛집이라면서요ㅠ.jpg" },
    { src: koki13, text: "커피집에서 지친 우지.jpg" },
    { src: koki14, text: "어머 이 각도도 이쁘냐.jpg" },
    { src: koki15, text: "코키 예쁜 건물.jpg" },
    { src: koki16, text: "코키 예쁜 건물(2).jpg" },
    { src: koki17, text: "코타키나발루 거리.jpg" },
    { src: koki18, text: "코끼리와 우지.jpg" },
    { src: koki19, text: "졸예다.jpg" },
    { src: koki20, text: "코키 거리.jpg" },
    { src: koki21, text: "코키를 뒤집어 놓으셨다.jpg" },
    { src: koki22, text: "커플샷.jpg" },
    { src: koki23, text: "얼굴티 네 맞습니다.jpg" },
    { src: koki24, text: "예쁜배경에서 나.jpg" },
    { src: koki25, text: "어깨 짱짱맨.jpg" },
    { src: koki26, text: "ㅋㅋㅋㅋ귀여워.jpg" },
    { src: koki27, text: "어머 예쁘세요.jpg" },
    { src: koki28, text: "해보러 가는길.jpg" },
    { src: koki29, text: "세계 3대 석양 우지.jpg" },
    { src: koki30, text: "너가 더 예뻐.jpg" },
    { src: koki31, text: "석양 맛집이네.jpg" },
    { src: koki32, text: "사실 저녁에 길잃어서 살짝 다툼.jpg" }
  ]);

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
      pop.style.display = "block";
      pop.style.top = tpos + "px";
      pop.style.left = lpos + "px";
    }
  };
  const closeLayer = IdName => {
    const pop = document.getElementById(IdName);
    pop.style.display = "none";
    cnt = 0;
  };
  const style = {
    position: "absolute",
    width: "100%",
    height: "auto",
    display: "none",
    zIndex: "2",
    backgroundColor: "black"
  };
  const style2 = {
    width: "50%",
    height: "100%",
    margin: "0 auto"
  };

  const imageList = images.map((image, index) => (
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

  return (
    <div className="TravelWrapper">
      <div className="TravelContainer">
        <TravelFolder Folder="Kota Kinabalu" />
        <div className="TravelImageLists">{imageList}</div>
      </div>
    </div>
  );
};

export default KokiPage;
