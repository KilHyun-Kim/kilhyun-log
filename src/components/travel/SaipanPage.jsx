import React, { useState } from "react";
import {
  TravelFolder,
  TravelImage,
  TravelFooter,
  TravelReady
} from "./TravelPage";
import "../../css/TravelBC.css";

import saipan1 from "../../image/saipan/saipan(1).jpg";
import saipan2 from "../../image/saipan/saipan(2).jpg";
import saipan3 from "../../image/saipan/saipan(3).jpg";
import saipan4 from "../../image/saipan/saipan(4).jpg";
import saipan5 from "../../image/saipan/saipan(5).jpg";
import saipan6 from "../../image/saipan/saipan(6).jpg";
import saipan7 from "../../image/saipan/saipan(7).jpg";
import saipan8 from "../../image/saipan/saipan(8).jpg";
import saipan11 from "../../image/saipan/saipan(11).jpg";
import saipan12 from "../../image/saipan/saipan(12).jpg";
import saipan15 from "../../image/saipan/saipan(15).jpg";
import saipan17 from "../../image/saipan/saipan(17).jpg";
import saipan18 from "../../image/saipan/saipan(18).jpg";
import saipan19 from "../../image/saipan/saipan(19).jpg";
import saipan20 from "../../image/saipan/saipan(20).jpg";
import saipan21 from "../../image/saipan/saipan(21).jpg";
import saipan22 from "../../image/saipan/saipan(22).jpg";
import saipan23 from "../../image/saipan/saipan(23).jpg";

const SaipanPage = () => {
  const [images] = useState([
    { src: saipan1, text: "사이판으로!!.jpg" },
    { src: saipan2, text: "내가 좋아하는 숙소 앞 풍경.jpg" },
    { src: saipan3, text: "숙소 앞 해변.jpg" },
    { src: saipan4, text: "사이판 만세절벽.jpg" },
    { src: saipan5, text: "2차 세계대전 대한민국 위령탑.jpg" },
    { src: saipan6, text: "저녁밥을 고르시는 부모님.jpg" },
    { src: saipan7, text: "저녁밥은 T-bone 스테이크!.jpg" },
    { src: saipan8, text: "한적한 사이판 바다.jpg" },
    { src: saipan11, text: "저녁 노을이 아름다워서.jpg" },
    { src: saipan12, text: "사이판 카지노.jpg" },
    { src: saipan15, text: "신난 엄마 꽃받침.jpg" },
    { src: saipan17, text: "앵무새(?)모형.jpg" },

    { src: saipan18, text: "저녁 식사 중 풍경.jpg" },
    { src: saipan19, text: "식사후 거닐었던 해변에서.jpg" },
    { src: saipan20, text: "사이판 밤거리.jpg" },
    { src: saipan21, text: "한적함이 너무좋아.jpg" },
    { src: saipan22, text: "또 가고 싶다.jpg" },
    { src: saipan23, text: "엄마의 어퍼컷(feat.닭아저씨).jpg" }
  ]);
  return (
    <div className="TravelWrapper">
      <div className="TravelContainer">
        <TravelFolder Folder="saipan" />
        <TravelImage images={images} />
        <TravelReady />
      </div>
      <TravelFooter List="/travel" />
    </div>
  );
};

export default SaipanPage;
