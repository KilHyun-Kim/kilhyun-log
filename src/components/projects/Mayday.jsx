import React from "react";
import ProjectTopic, {
  ProjectExplain,
  ProjectImage,
  ProjectBackface,
  ProjectVideo,
  ProjectTwoImage,
  PriceImage
} from "./ProjectTopic";
import maydayimage from "../../image/smilemaydayicon.png";
import capstone1 from "../../image/mayday/capstone1.jpg";
import capstone2 from "../../image/mayday/capstone2.png";
import price1 from "../../image/mayday/price1.jpg";
import price2 from "../../image/mayday/price2.png";

const Mayday = () => {
  return (
    <div className="BasicContainer">
      <ProjectImage src={maydayimage} alt="mayday" />
      <ProjectTopic topic="MAYDAY가 무엇인가요?" />
      <ProjectExplain
        explain1="Arduino & Android 플랫폼을 활용한 긴급구조 어플리케이션"
        p11="- 화재나 강력 범죄 발생 시 시민들의 신속한 신고와 사건에 대한 빠른인지 및 대처가 필요 "
        p12="- Mayday 어플을 사용하면 원 클릭만으로 정확하고 빠른 신고 가능"
      />
      <p></p>
      <ProjectTopic topic="MAYDAY 주요 기능" />
      <ProjectBackface
        src1="data:image/png;base64,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"
        back1h3="Arduino Sensor"
        back1="- 아두이노의 센서를 이용해 현재의 온·습도·유해 가스량을 실시간으로 측정"
        back11="- 위급상황시 사용자에게 알리고 바로 신고"
        src2="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEfVHVDo1HC_oIu7YytPqPTIVvG2kJjnFSjxXBvZ506NHEYcs5"
        back2h3="자동 연락 기능"
        back2="- 주변 사람 및 지인의 연락처를 미리 등록"
        back21="- 위급상황 발생시 등록된 연락처에 곧바로 연락"
        src3="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROfVPi0sHoReHP8S0k1Nu9RtY02n6-mp0l_YmXsdXe9jQDINNM"
        back3h3="Google Maps"
        back3="- 사용자의 현재 위치와 주변 소방서 및 경찰서 위치를 알 수 있다."
        back31="- 클릭 한번으로 112, 119에 사용자의 위치와 위급 상황 문자 전송"
      />
      <ProjectBackface
        src1="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9IfxmoOwK0yBKSjVSYe9iY35gWt9MhkKeOTyawiy0E7M2TGlw"
        back1h3="Deep learning"
        back1="- 낙상 감지"
        back11="- 딥 러닝과 가속도 센서를 활용하여 위급 상황을 판단"
        src2="https://static.thenounproject.com/png/1927723-200.png"
        back2h3="Machine learning"
        back2="- 머신러닝 기술을 이용하여 주변 사물 인식하는 기능 구현"
        back21="- 구조대의 정확한 위치 판단 및 신속한 구조를 도움"
        src3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/////AAD/4eH/+Pj/8vL/bW3//Pz/5OT/2dn/nJz/7e3/oqL/eXn/5+f/iIj/9vb/QkL/vr7/YWH/KSn/NTX/rKz/z8//tLT/ysr/MzP/mZn/kJD/f3//T0//c3P/1dX/IiL/Vlb/srL/DQ3/jIz/q6v/X1//R0f/xMT/PT3/b2//hIT/Wlr/fHz/TU3/FRUqmY+uAAAEwUlEQVR4nO2d63KbMBCFVUy4GtvYBNyQxNe4dtKk7/92BTdtmsR2VrAgIc73ozOdTtGewUir1WpXCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgEsdxBgPb9dJ9nK0fwjD0/Zt89DQcDq9Kpsc/i789jfIb3y/+/WGdxfvUc+3BoPi/qs0/gTMOIteaZ2E+uh1O75LltzosD3fT4e0oD7O55UbBWJ2uQeSlcTh63K0Os00tTZfYzCar3f02jOcLtz2xi2z0M1k2p+qs2mWy22Zew+rc8KV1ZR9ZhW5T8oJwolrdKz/CoAF91lC1rnc8c7/I4F61pE/cc75H50a1nJPcsC2eXqJayxkSppk1VC3kAiGHwJ1qFReZ1tZn67JCnGNi1xMY6PoJvpHUmlPtmWr7CcxqvEWnCwKL/Uj1VWOl2nYiq6oCt6otJzOqJjBWbbcEcRWBtmqrpagy20xVGy1FhZV/rtpmSebSCr+rNlmS77IC16otlmYtqVB/b+0jiZzALq0Uf9lLKVQfUpPnTkZgpNraSshsMnzVxlZCZsPftaXiDxJzjava1opEZIVdnElL6P63XuFtOs9khV1cK0peqALteoec6lhS91BdnWjoU42n2tDKUKP8nFPpivFZX0N1Ta8Zx4zSNncp10SFnD6b1aoL6BMV5oxjFgpF0FrIJycqfGIc0zo+cd9S8JwaN71lHPOPQjHg/F2c55aokPPM3vr70OgH41PPMSQq5PxsrLfHZs27StSo6R3jmP8pFGPOD/wk1CMazmNf692TvYZ/qhOiQs4dvvXh2ZzexGeIYWGH83v5qFCMm9x8Es9KHc68w08KhUgPjM9/z4aokHPMEwqbzNChKRxwDnlSobCvOMf4j4EuCoWYN+PHaaSwoWxAnRQWfhynZ/EKTSHrAf4FhULE7D9VWigq4BzyokIx5k5ooR3OsIbaLisUwuL142jBNotzyK8UFluOdocrYQ0mEobk9ONo4cS2FQqxYNvN6KqQz4+jKVwwjXaEqFDYjyzDLfRVWPhxHNtSmsKUYaR/0BUKhyF0nGqtkGNkvRW29w7N/w7Nn0vNXw/h00ihpV9q/t7C/P2h+Xv8FuM07OdttLIE5sfaEC+Voq8xb8XnFuafPfXg/ND4M+AOn+NTs/XNz8UwP5/G/Jwo8/PazM9NND+/1PwcYfPzvM3P1Tf/voX5d2a6eQu4hHrvyfy7a529f0i/r/6s2tSK0O+Qmn8PuKtXLOl3uc2/j9+DmgrdXBGliu81cKTQOFK1TcRetbkVkKtPY36NId6z51bIJBV2bsGQfYV9qNdmfs29HtRN7JT/Xan2ZZfql26rCexBDdqu1BGe1ag+b3wt6B7U8+5BTXah+8pfv66+6EFvBCG85hJg6nHg6xykZ9zG52zwFehXaJC1z0yJ+9x+E6sLsPcKKrHDNtIpKDTT7+mIG65Uq2uyZ9crXpbvkuWv1pVtlsnP5vuuveFEXroPt/fT1aTx3nmjY++8+r5LZd73PzzUaqu30af/4XmOPSzHxSuex9n6+qHsYenn27KH5eO/HpaPZQ/Lbe6XPSwfrtdZPE+9aKxrD0sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAPvEbi6+DYsQAymIAAAAASUVORK5CYII="
        back3h3="YouTube"
        back3="- 위급상황 대처 YOUTUBE 영상제공"
        back31="- 소화기 사용법 / CPR 방법 / 심장 제세동기(AED) 사용법"
      />
      <ProjectTopic topic="구현영상" />
      <ProjectVideo
        src="https://www.youtube.com/embed/XFl4ZCeU_Ok"
        title="Mayday 구현영상"
      />

      <ProjectTopic topic="캡스톤 디자인 대회 출전 당시 팜플렛" />
      <ProjectTwoImage
        src1={capstone1}
        alt1="capstone1"
        src2={capstone2}
        alt2="capstone2"
      />
      <ProjectTopic topic="수상내역" />
      <ProjectExplain
        explain1="Arduino & Android 플랫폼을 활용한 긴급구조 어플리케이션"
        p11="1. 학교 캠퍼스에서 1등"
        p12="2. 캠퍼스 대표로 참가한 경상대학교 본캠퍼스에서의 캡스톤 디자인 대회에서 스마트 기술상 수상"
        p13="3. 전국 대학교들이 모인 대전대학교 캡스톤 디자인대회에서 수상"
      />
      <PriceImage src1={price1} alt1="price1" src2={price2} alt2="price2" />

      <ProjectTopic topic="배운점" />
      <ProjectExplain
        explain1="1. 프로젝트에서 각 분야의 협동의 중요성"
        p11="- 캡스톤 디자인 프로젝트이며, 총 6명이서 진행되는 프로젝트였다."
        p12="- 6명 각각이 자신의 분야를 맡아서 프로젝트를 진행하였고, 그 중 나는 어플의 전체적인 UI&UX 제작파트와 낙상 감지 기능 제작파트에 참여하였다."
        p13="- 프로젝트를 진행하며 각각의 분야들이 협동을 했기에 좋은 작품이 나올 수 있었다."
        explain2="2. 새로운 언어를 배운다는 것에대한 두려움을 떨쳤다."
        p21="- Android Studio를 사용하여 어플을 제작하였다."
        p22="- Java, XML를 짧은 시간에 공부하여 능숙하게 사용할 수 있도록 하였다. "
        p23="- 다양한 시도를 통하여 새로운 언어를 배우는 것에 대한 두려움을 떨칠 수 있었다."
        explain3="3. 그 외의 배운점 "
        p31="- 팀에서 어플의 전체적인 UI & UX 를 맡음으로써 Front-end 의 가능성과 앞으로의 진로를 결정하는 계기가 되었다."
        p32="- 아이디어 프로젝트에 대한 흥미가 생겼다."
        p33="- 어플 제작에 대한 관심도가 증가했다."
      />
    </div>
  );
};

export default Mayday;
