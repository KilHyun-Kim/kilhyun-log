import React from "react";
import "../../../css/dev/DevelopmentComp.css";

import DevelopmentComp, {
  DevelopmentHead,
  DevelopmentContent,
  JSCode,
  DevelopmentScroll
} from "../../development/components/DevelopmentComp";

const React1 = () => {
  return (
    <div className="DevContainer">
      <DevelopmentHead title="React" subtitle="리액트를 시작하며..." />
      <DevelopmentContent
        topic1="1. 왜 리액트인가?"
        _explanation1="- 기술은 간편하게, 쉽게, "
      />
    </div>
  );
};

export default React1;
