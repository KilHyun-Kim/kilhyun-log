import React from "react";
import ProjectTopic, {
  ProjectExplain,
  ProjectImage,
  ProjectBackface,
  ProjectVideo,
  ProjectTwoImage,
  PriceImage
} from "../ProjectTopic";
import maydayimage from "../../../image/smilemaydayicon.png";
import capstone1 from "../../../image/mayday/capstone1.jpg";
import capstone2 from "../../../image/mayday/capstone2.png";
import price1 from "../../../image/mayday/price1.jpg";
import price2 from "../../../image/mayday/price2.png";

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
      <ProjectBackface
        src1="data:image/png;base64,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"
        back1h3="Android Studio"
        back1="- 어플 제작을 위해 안드로이드 스튜디오를 사용"
        src2="data:image/png;base64,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"
        back2h3="Java"
        back2="- Android Studio의 주요 언어로 Java 사용"
        src3="data:image/png;base64,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"
        back3h3="XML"
        back3="- Android Studio의 디자인 언어로 XML을 사용"
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
