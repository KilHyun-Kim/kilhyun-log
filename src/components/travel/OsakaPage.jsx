import React, { useState } from "react";
import { TravelFolder, TravelImage } from "./TravelPage";
import "../../css/TravelBC.css";

import osaka1 from "../../image/osaka/osaka(1).jpg";
import osaka2 from "../../image/osaka/osaka(2).jpg";
import osaka3 from "../../image/osaka/osaka(3).jpg";
import osaka4 from "../../image/osaka/osaka(4).jpg";
import osaka5 from "../../image/osaka/osaka(5).jpg";
import osaka6 from "../../image/osaka/osaka(6).jpg";
import osaka7 from "../../image/osaka/osaka(7).jpg";
import osaka8 from "../../image/osaka/osaka(8).jpg";
import osaka9 from "../../image/osaka/osaka(9).jpg";
import osaka10 from "../../image/osaka/osaka(10).jpg";
import osaka11 from "../../image/osaka/osaka(11).jpg";
import osaka12 from "../../image/osaka/osaka(12).jpg";
import osaka13 from "../../image/osaka/osaka(13).jpg";
import osaka14 from "../../image/osaka/osaka(14).jpg";
import osaka15 from "../../image/osaka/osaka(15).jpg";
import osaka16 from "../../image/osaka/osaka(16).jpg";
import osaka17 from "../../image/osaka/osaka(17).jpg";
import osaka18 from "../../image/osaka/osaka(18).jpg";
import osaka19 from "../../image/osaka/osaka(19).jpg";
import osaka20 from "../../image/osaka/osaka(20).jpg";
import osaka21 from "../../image/osaka/osaka(21).jpg";
import osaka22 from "../../image/osaka/osaka(22).jpg";
import osaka23 from "../../image/osaka/osaka(23).jpg";
import osaka24 from "../../image/osaka/osaka(24).jpg";
import osaka25 from "../../image/osaka/osaka(25).jpg";
import osaka26 from "../../image/osaka/osaka(26).jpg";
import osaka27 from "../../image/osaka/osaka(27).jpg";
import osaka28 from "../../image/osaka/osaka(28).jpg";
import osaka29 from "../../image/osaka/osaka(29).jpg";
import osaka30 from "../../image/osaka/osaka(30).jpg";
import osaka31 from "../../image/osaka/osaka(31).jpg";
import osaka32 from "../../image/osaka/osaka(32).jpg";
import osaka33 from "../../image/osaka/osaka(33).jpg";
import osaka34 from "../../image/osaka/osaka(34).jpg";
import osaka35 from "../../image/osaka/osaka(35).jpg";
import osaka36 from "../../image/osaka/osaka(36).jpg";
const OsakaPage = () => {
  const [images] = useState([
    { src: osaka1, text: "숙소에서 함께 김치!!.jpg" },
    { src: osaka2, text: "비행기 처음타는 우지.jpg" },
    { src: osaka3, text: "비행기 안에서 풍경.jpg" },
    { src: osaka4, text: "비행기가 맘에든 우지.jpg" },
    { src: osaka5, text: "비행기 쓰담 우지.jpg" },
    { src: osaka6, text: "머리 꾸미는 우지.jpg" },
    { src: osaka7, text: "우지의 뒷모습.jpg" },
    { src: osaka8, text: "Kota Kinabalu!.jpg" },
    { src: osaka9, text: "코타키나발루 거리.jpg" },
    { src: osaka10, text: "좋은날씨와 예쁜꽃.jpg" },
    { src: osaka11, text: "풍경과 우지의 뒷모습.jpg" },
    { src: osaka12, text: "맛집이라면서요ㅠ.jpg" },
    { src: osaka13, text: "커피집에서 지친 우지.jpg" },
    { src: osaka14, text: "어머 이 각도도 이쁘냐.jpg" },
    { src: osaka15, text: "코키 예쁜 건물.jpg" },
    { src: osaka16, text: "코키 예쁜 건물(2).jpg" },
    { src: osaka17, text: "코타키나발루 거리.jpg" },
    { src: osaka18, text: "코끼리와 우지.jpg" },
    { src: osaka19, text: "졸예다.jpg" },
    { src: osaka20, text: "코키 거리.jpg" },
    { src: osaka21, text: "코키를 뒤집어 놓으셨다.jpg" },
    { src: osaka22, text: "커플샷.jpg" },
    { src: osaka23, text: "얼굴티 네 맞습니다.jpg" },
    { src: osaka24, text: "예쁜배경에서 나.jpg" },
    { src: osaka25, text: "어깨 짱짱맨.jpg" },
    { src: osaka26, text: "ㅋㅋㅋㅋ귀여워.jpg" },
    { src: osaka27, text: "어머 예쁘세요.jpg" },
    { src: osaka28, text: "해보러 가는길.jpg" },
    { src: osaka29, text: "세계 3대 석양 우지.jpg" },
    { src: osaka30, text: "너가 더 예뻐.jpg" },
    { src: osaka31, text: "석양 맛집이네.jpg" },
    { src: osaka32, text: "사실 저녁에 길잃어서 살짝 다툼.jpg" },
    { src: osaka33, text: "석양 맛집이네.jpg" },
    { src: osaka34, text: "석양 맛집이네.jpg" },
    { src: osaka35, text: "석양 맛집이네.jpg" },
    { src: osaka36, text: "석양 맛집이네.jpg" }
  ]);

  return (
    <div className="TravelWrapper">
      <div className="TravelContainer">
        <TravelFolder Folder="Osaka" />
        <TravelImage images={images} />
      </div>
    </div>
  );
};

export default OsakaPage;
