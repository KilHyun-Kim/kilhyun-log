import React from "react";
import ProjectTopic, {
  ProjectImage,
  ProjectExplain,
  ProjectBackface
} from "../ProjectTopic";
import { PageFooter } from "../../BasicPageComp";

import electionImage from "../../../image/koreamap (1).jpg";

const PromiseElection = () => {
  return (
    <div className="BasicContainer">
      <ProjectImage src={electionImage} alt="workroom8363" />
      <ProjectTopic topic="PromiseElection 이 무엇인가요?" />
      <ProjectExplain
        explain1="2020.4.15 제 21대 국회의원 선거의 각 구마다의 후보와 공약을 보여주는 웹 사이트"
        p11="- 국회의원 선거에 있어서 자기 구역의 후보가 누가 있는지 공약이 어떤지를 모르고 선거하는 경우가 많다고 판단"
        p12="- 웹의 접근성, 편리성을 활용하여 바쁜 현대인에게 간단하게 알릴 수 있는 웹이 존재하면 좋겠다고 판단"
        p13="- 아이디어로 생각하고 기획부터 제작까지 혼자 진행한 프로젝트"
      />
      <ProjectTopic topic="사용한 기술(언어)" />
      <ProjectBackface
        src1="data:image/png;base64,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"
        back1h3="React"
        back1="- HTML5의 시멘틱 태그 사용"
        src2="data:image/png;base64,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"
        back2h3="JSX"
        back2="- <map/> , <area/> 태그를 활용"
        back21="- 디자인적인 요구사항을 반영"
        src3="data:image/png;base64,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"
        back3h3="AWS"
        back3="- 웹 사이트의 기능적 부분을 맡아서 처리"
      />
      <ProjectTopic topic="LINK" />

      <ProjectTopic topic="완성되지 않은 이유" />
      <ProjectExplain
        explain1="1. 제작해본 첫 페이지"
        p11="- 시작(설계) 부터 끝(서버 렌더링) 까지 나만의 손으로 만든 첫 페이지였다."
        p12="- 어떤 기술을 사용해야하는지, 어떻게 시작 해야하는지 등 어려움이 많았다."
        p13="- 하지만 나는 내가 맡은 일로써 최선을 다하여 제작에 몰두 했다."
        explain2="2. 가죽공방으로부터의 무관심"
        p21="- 소통의 한계, 바쁘다는 핑계로 요구사항 뒷전"
        p22="- 흐지부지"
        p23="- 사진도 안줌"
      />

      <ProjectTopic topic="배운점" />
      <ProjectExplain
        explain1="1. 사소한 아이디어를 가지고 웹을 적용하여 많은 파급력을 일으킬 수 있다는 생각을 가짐"
        p11="- 확실한 소통의 경로가 필요하다고 느꼈다."
        p12="- 소비자의 요구사항을 제대로 파악하여 내가 갖고있는 기술을 최대한 활용하영 요구사항을 만족시켜야 한다."
        explain2="2. "
        p21="- 돈이 오고 감으로써 동기부여 및 "
      />
      <PageFooter Prev="/project/workroom8363" List="/project" Next="" />
    </div>
  );
};

export default PromiseElection;
