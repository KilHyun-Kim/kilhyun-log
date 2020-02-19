import React from "react";
import TravelPage, { TravelFolder } from "./TravelPage";

const TravelPageList = props => {
  const values = [
    {
      href: "/travel/koki",
      src: "https://static.thenounproject.com/png/3129331-200.png",
      srcAlt: "폴더",
      mapSrc: "https://static.thenounproject.com/png/585798-200.png",
      mapSrcAlt: "코타키나발루",
      info: "Kota Kinabalu"
    },
    {
      href: "/travel/saipan",
      src: "https://static.thenounproject.com/png/3129331-200.png",
      srcAlt: "폴더",
      mapSrc: "https://static.thenounproject.com/png/1042874-200.png",
      mapSrcAlt: "사이판",
      info: "Saipan"
    },
    {
      href: "/travel/osaka",
      src: "https://static.thenounproject.com/png/3129331-200.png",
      srcAlt: "폴더",
      mapSrc: "https://static.thenounproject.com/png/4499-200.png",
      mapSrcAlt: "오사카",
      info: "Osaka"
    }
  ];
  return (
    <div className="TravelContainer">
      <TravelFolder Folder="사진" />
      <div className="TravelLists">
        {values.map((value, index) => {
          return (
            <TravelPage
              href={value.href}
              src={value.src}
              mapSrc={value.mapSrc}
              info={value.info}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TravelPageList;
