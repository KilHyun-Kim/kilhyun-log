import React from "react";
import "../../../css/dev/DevelopmentComp.css";
import DevelopmentComp, {
  DevelopmentHead,
  DevelopmentContent,
  JSCode,
  DevelopmentScroll
} from "../../development/components/DevelopmentComp";

const Sass1 = () => {
  return (
    <div className="DevContainer">
      <DevelopmentHead title="Sass (1)" subtitle="Sass 를 시작하며" />
      <DevelopmentContent
        topic1="왜 Sass(Scss) ?"
        subtopic1="'Sass는 기초 언어에 힘과 우아함을 더해주는 CSS의 확장이다.'"
        _explanation1="- CSS의 경우 쉽고 재밌지만, 작업이 복잡해질 경우 불편함도 같이 커진다."
        _explanation2="- 불필요한 선택자(Selector)의 과용과 연산 기능의 한계, 구문(Statement)의 부재 등 프로젝트의 규모가 커질수록 아쉬움도 같이 커진다."
      />
      <DevelopmentContent
        topic1="앞으로의 프로젝트"
        subtopic1="다음 프로젝트는 'React + TypeScript + Scss(sass)'로 진행을 할 것이기 때문에 시작하게 됨"
        _explanation1="- 좀더 성장하는 계기가 될것이라 믿어 의심치 않는다."
        _explanation2="- 자 그러면 시작해보자!"
      />
    </div>
  );
};

export default Sass1;
