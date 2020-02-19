import React from "react";
import TravelPage, { TravelFolder, TravelImage } from "./TravelPage";
import koki1 from "../../image/koki/koki1.jpg";
import koki2 from "../../image/koki/koki2.jpg";
import koki3 from "../../image/koki/koki3.jpg";
import koki4 from "../../image/koki/koki4.jpg";
const KokiPage = () => {
  const imageValues = [
    {
      src1: koki1,
      text1: "",
      src2: koki2,
      src3: koki3,
      src4: koki4
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
              src2={imagevalue.src2}
              src3={imagevalue.src3}
              src4={imagevalue.src4}
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
