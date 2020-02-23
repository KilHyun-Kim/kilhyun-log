import React from "react";
import { TravelFolder, TravelImage } from "./TravelPage";
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
  const imageValues = [
    {
      src1: osaka1,
      text1: "사이판으로 가는 비행기표!.jpg",
      src2: osaka2,
      text2: "사이판에서의 숙소앞 풍경.jpg",
      src3: osaka3,
      text3: "숙소 앞 해변가.jpg",
      src4: osaka4,
      text4: "사이판 명소 만세절벽.jpg"
    },
    {
      src1: osaka5,
      text1: "한국인 위령탑.jpg",
      src2: osaka6,
      text2: "저녁 메뉴 고르는 부모님.jpg",
      src3: osaka7,
      text3: "저녁은 T Bone Steak.jpg",
      src4: osaka8,
      text4: "사이판은 바다가 예쁨.jpg"
    },
    {
      src1: osaka9,
      text1: "MaNaGaHa Island.jpg",
      src2: osaka10,
      text2: "폼좀 잡아봄.jpg",
      src3: osaka11,
      text3: "사이판 초저녁.jpg",
      src4: osaka12,
      text4: "여기는 카지노.jpg"
    },
    {
      src1: osaka13,
      text1: "일몰과 나.jpg",
      src2: osaka15,
      text2: "신난 엄마.jpg",
      src3: osaka16,
      text3: "가족사진.jpg",
      src4: osaka17,
      text4: "예쁜 새 모형.jpg"
    },
    {
      src1: osaka21,
      text1: "한적한 사이판 해변.jpg",
      src2: osaka18,
      text2: "저녁식사를 위해.jpg",
      src3: osaka19,
      text3: "식사후 해변을 거닐며 엄마.jpg",
      src4: osaka20,
      text4: "사이판의 밤거리.jpg"
    },
    {
      src1: osaka21,
      text1: "평범한 사이판 풍경.jpg",
      src2: osaka22,
      text2: "닭 아저씨에게 어퍼컷을 날리는 엄마.jpg",
      src3: osaka23,
      text3: "예쁜 풍경 사이판.jpg",
      src4: osaka24,
      text4: "예쁜 풍경 사이판.jpg"
    },
    {
      src1: osaka25,
      text1: "평범한 사이판 풍경.jpg",
      src2: osaka26,
      text2: "닭 아저씨에게 어퍼컷을 날리는 엄마.jpg",
      src3: osaka27,
      text3: "예쁜 풍경 사이판.jpg",
      src4: osaka28,
      text4: "예쁜 풍경 사이판.jpg"
    },
    {
      src1: osaka29,
      text1: "평범한 사이판 풍경.jpg",
      src2: osaka30,
      text2: "닭 아저씨에게 어퍼컷을 날리는 엄마.jpg",
      src3: osaka31,
      text3: "예쁜 풍경 사이판.jpg",
      src4: osaka32,
      text4: "예쁜 풍경 사이판.jpg"
    },
    {
      src1: osaka33,
      text1: "평범한 사이판 풍경.jpg",
      src2: osaka34,
      text2: "닭 아저씨에게 어퍼컷을 날리는 엄마.jpg",
      src3: osaka35,
      text3: "예쁜 풍경 사이판.jpg",
      src4: osaka36,
      text4: "예쁜 풍경 사이판.jpg"
    }
  ];
  // return (
  //   <div className="TravelWrapper">
  //     <div className="TravelContainer">
  //       <TravelFolder Folder="Kota Kinabalu" />
  //       <div className="TravelImageLists">
  //         {imageValues.map((imagevalue, index) => {
  //           return (
  //             <TravelImage
  //               src1={imagevalue.src1}
  //               text1={imagevalue.text1}
  //               src2={imagevalue.src2}
  //               text2={imagevalue.text2}
  //               src3={imagevalue.src3}
  //               text3={imagevalue.text3}
  //               src4={imagevalue.src4}
  //               text4={imagevalue.text4}
  //               alt="koki1"
  //               key={index}
  //             />
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default OsakaPage;
