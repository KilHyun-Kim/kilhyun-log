import React, { useState } from "react";
import { TravelFolder, TravelImage, TravelFooter } from "./TravelPage";
import "../../css/TravelBC.css";

import saipan1 from "../../image/saipan/saipan(1).jpg";
import saipan2 from "../../image/saipan/saipan(2).jpg";
import saipan3 from "../../image/saipan/saipan(3).jpg";
import saipan4 from "../../image/saipan/saipan(4).jpg";
import saipan5 from "../../image/saipan/saipan(5).jpg";
import saipan6 from "../../image/saipan/saipan(6).jpg";
import saipan7 from "../../image/saipan/saipan(7).jpg";
import saipan8 from "../../image/saipan/saipan(8).jpg";
import saipan9 from "../../image/saipan/saipan(9).jpg";
import saipan10 from "../../image/saipan/saipan(10).jpg";
import saipan11 from "../../image/saipan/saipan(11).jpg";
import saipan12 from "../../image/saipan/saipan(12).jpg";
import saipan13 from "../../image/saipan/saipan(13).jpg";
import saipan14 from "../../image/saipan/saipan(14).jpg";
import saipan15 from "../../image/saipan/saipan(15).jpg";
import saipan16 from "../../image/saipan/saipan(16).jpg";
import saipan17 from "../../image/saipan/saipan(17).jpg";
import saipan18 from "../../image/saipan/saipan(18).jpg";
import saipan19 from "../../image/saipan/saipan(19).jpg";
import saipan20 from "../../image/saipan/saipan(20).jpg";
import saipan21 from "../../image/saipan/saipan(21).jpg";
import saipan22 from "../../image/saipan/saipan(22).jpg";
import saipan23 from "../../image/saipan/saipan(23).jpg";
import saipan24 from "../../image/saipan/saipan(24).jpg";

const SaipanPage = () => {
  const [images] = useState([
    { src: saipan1, text: "숙소에서 함께 김치!!.jpg" },
    { src: saipan2, text: "비행기 처음타는 우지.jpg" },
    { src: saipan3, text: "비행기 안에서 풍경.jpg" },
    { src: saipan4, text: "비행기가 맘에든 우지.jpg" },
    { src: saipan5, text: "비행기 쓰담 우지.jpg" },
    { src: saipan6, text: "머리 꾸미는 우지.jpg" },
    { src: saipan7, text: "우지의 뒷모습.jpg" },
    { src: saipan8, text: "Kota Kinabalu!.jpg" },
    { src: saipan9, text: "코타키나발루 거리.jpg" },
    { src: saipan10, text: "좋은날씨와 예쁜꽃.jpg" },
    { src: saipan11, text: "풍경과 우지의 뒷모습.jpg" },
    { src: saipan12, text: "맛집이라면서요ㅠ.jpg" },
    { src: saipan13, text: "커피집에서 지친 우지.jpg" },
    { src: saipan14, text: "어머 이 각도도 이쁘냐.jpg" },
    { src: saipan15, text: "코키 예쁜 건물.jpg" },
    { src: saipan16, text: "코키 예쁜 건물(2).jpg" },
    { src: saipan17, text: "코타키나발루 거리.jpg" },
    { src: saipan18, text: "코끼리와 우지.jpg" },
    { src: saipan19, text: "졸예다.jpg" },
    { src: saipan20, text: "코키 거리.jpg" },
    { src: saipan21, text: "코키를 뒤집어 놓으셨다.jpg" },
    { src: saipan22, text: "커플샷.jpg" },
    { src: saipan23, text: "얼굴티 네 맞습니다.jpg" },
    { src: saipan24, text: "예쁜배경에서 나.jpg" }
  ]);
  return (
    <div className="TravelWrapper">
      <div className="TravelContainer">
        <TravelFolder Folder="saipan" />
        <TravelImage images={images} />
      </div>
      <TravelFooter List="/travel" />
    </div>
  );
};

export default SaipanPage;
