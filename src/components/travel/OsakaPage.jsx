import React, { useState } from "react";
import {
  TravelFolder,
  TravelImage,
  TravelFooter,
  TravelReady
} from "./TravelPage";
import "../../css/TravelBC.css";

import osaka1 from "../../image/osaka/osaka(1).jpg";
import osaka2 from "../../image/osaka/osaka(2).jpg";
import osaka3 from "../../image/osaka/osaka(3).jpg";
import osaka4 from "../../image/osaka/osaka(4).jpg";
import osaka6 from "../../image/osaka/osaka(6).jpg";
import osaka7 from "../../image/osaka/osaka(7).jpg";
import osaka8 from "../../image/osaka/osaka(8).jpg";
import osaka9 from "../../image/osaka/osaka(9).jpg";
import osaka10 from "../../image/osaka/osaka(10).jpg";
import osaka11 from "../../image/osaka/osaka(11).jpg";
import osaka12 from "../../image/osaka/osaka(12).jpg";
import osaka13 from "../../image/osaka/osaka(13).jpg";
import osaka14 from "../../image/osaka/osaka(14).jpg";
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
const OsakaPage = () => {
  const [images] = useState([
    { src: osaka1, text: "오사카로 갑니다!.jpg" },
    { src: osaka2, text: "공항에서 만난 피카츄!.jpg" },
    { src: osaka3, text: "함께간 친구, 오사카로 가는 열차.jpg" },
    { src: osaka4, text: "오사카 거리의 스파이더맨.jpg" },
    { src: osaka6, text: "그 유명한 일본 자판기.jpg" },
    { src: osaka7, text: "오사카 거리의 풍경(1).jpg" },
    { src: osaka8, text: "오사카 거리의 풍경(2).jpg" },
    { src: osaka9, text: "오사카 거리의 풍경(3).jpg" },
    { src: osaka10, text: "오사카 거리의 풍경(4).jpg" },
    { src: osaka11, text: "튀김, 맥주, 그리고 하루의 끝.jpg" },
    { src: osaka12, text: "타코야끼 맛집!.jpg" },
    { src: osaka13, text: "일본은 이런게 엄청 이뻐.jpg" },
    { src: osaka14, text: "밤거리 너무 좋구요~.jpg" },
    { src: osaka16, text: "첫 숙소 Welcome 길현 반가워 한글!.jpg" },
    { src: osaka17, text: "첫 숙소 좋았지(Air Bnb) .jpg" },
    { src: osaka18, text: "숙소앞 전봇대.jpg" },
    { src: osaka19, text: "일본 음식점 메뉴판.jpg" },
    { src: osaka20, text: "시장 골목 색감이 이뻐.jpg" },
    { src: osaka21, text: "두번째 숙소.jpg" },
    { src: osaka22, text: "오사카 성 풍경.jpg" },
    { src: osaka23, text: "오사카 성 가는길.jpg" },
    { src: osaka24, text: "이게 바로 오사카 성.jpg" },
    { src: osaka25, text: "회전 초밥 집 신기방기.jpg" },
    { src: osaka26, text: "이거 두배는 먹음 ㅋ.jpg" },
    { src: osaka27, text: "일본 색깔의 술집 이런 느낌 좋은듯.jpg" },
    { src: osaka28, text: "두번째 숙소 앞 주차장 (Good).jpg" },
    { src: osaka29, text: "지하철 역에서 한컷.jpg" },
    { src: osaka30, text: "아 이거 맛잇엇음.jpg" },
    { src: osaka31, text: "오사카 밤거리를 거닐었지.jpg" },
    { src: osaka32, text: "여긴 마지막 숙소 호텔임.jpg" },
    { src: osaka33, text: "호텔 앞 골목(이날 거대 태풍옴ㅋ).jpg" },
    { src: osaka34, text: "호텔 조식.jpg" }
  ]);

  return (
    <div className="TravelWrapper">
      <div className="TravelContainer">
        <TravelFolder Folder="Osaka" />
        <TravelImage images={images} />
        <TravelReady />
      </div>
      <TravelFooter List="/travel" />
    </div>
  );
};

export default OsakaPage;
