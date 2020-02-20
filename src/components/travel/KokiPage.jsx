import React from "react";
import { TravelFolder, TravelImage } from "./TravelPage";
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
const KokiPage = () => {
  const imageValues = [
    {
      src1: koki1,
      text1: "첫날 숙소에서 함께 김치!!.jpg",
      src2: koki2,
      text2: "비행기 처음타는 우지.jpg",
      src3: koki3,
      text3: "비행기 안에서 풍경.jpg",
      src4: koki4,
      text4: "비행기가 맘에든 우지.jpg"
    },
    {
      src1: koki5,
      text1: "비행기 쓰담 우지.jpg",
      src2: koki6,
      text2: "머리 꾸미는 우지.jpg",
      src3: koki7,
      text3: "우지의 뒷모습.jpg",
      src4: koki8,
      text4: "Kota Kinabalu!.jpg"
    },
    {
      src1: koki9,
      text1: "코타키나발루 거리.jpg",
      src2: koki10,
      text2: "좋은날씨와 예쁜꽃.jpg",
      src3: koki11,
      text3: "코키 풍경과 우지의 뒷모습.jpg",
      src4: koki12,
      text4: "맛집이라고 했잖아요..?.jpg"
    },
    {
      src1: koki13,
      text1: "커피집에서 지친 우지.jpg",
      src2: koki14,
      text2: "어머 이 각도도 이쁘냐.jpg",
      src3: koki15,
      text3: "코키 예쁜 건물.jpg",
      src4: koki16,
      text4: "코키 예쁜 건물(2).jpg"
    },
    {
      src1: koki17,
      text1: "코타키나발루 거리.jpg",
      src2: koki18,
      text2: "코끼리와 우지.jpg",
      src3: koki19,
      text3: "졸예다.jpg",
      src4: koki20,
      text4: "코키 거리.jpg"
    },
    {
      src1: koki21,
      text1: "코키를 뒤집어 놓으셨다.jpg",
      src2: koki22,
      text2: "커플샷.jpg",
      src3: koki23,
      text3: "얼굴티 네 맞습니다.jpg",
      src4: koki24,
      text4: "예쁜배경에서 나.jpg"
    },
    {
      src1: koki25,
      text1: "어깨 짱짱맨.jpg",
      src2: koki26,
      text2: "ㅋㅋㅋㅋ귀여워.jpg",
      src3: koki27,
      text3: "어머 예쁘세요.jpg",
      src4: koki28,
      text4: "해보러 가는길.jpg"
    },
    {
      src1: koki29,
      text1: "세계 3대 석양 우지.jpg",
      src2: koki30,
      text2: "너가 더 예뻐.jpg",
      src3: koki31,
      text3: "석양 맛집이네.jpg",
      src4: koki32,
      text4: "사실 저녁에 길잃어서 살짝 다툼.jpg"
    }
  ];
  return (
    <div className="TravelContainer">
      <TravelFolder Folder="Kota Kinabalu" />
      <div className="TravelImageLists">
        {imageValues.map((imagevalue, index) => {
          return (
            <TravelImage
              src1={imagevalue.src1}
              text1={imagevalue.text1}
              src2={imagevalue.src2}
              text2={imagevalue.text2}
              src3={imagevalue.src3}
              text3={imagevalue.text3}
              src4={imagevalue.src4}
              text4={imagevalue.text4}
              alt="koki1"
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default KokiPage;
