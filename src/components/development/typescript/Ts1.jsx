import React from "react";
import "../../../css/dev/DevelopmentComp.css";
import DevelopmentComp, {
  DevelopmentHead,
  DevelopmentContent,
  JSCode,
  DevelopmentScroll
} from "../../development/components/DevelopmentComp";
const Ts1 = () => {
  return (
    <div className="DevContainer">
      <DevelopmentHead title="TypeScript" subtitle="TypeScript 기초(1)" />
      <DevelopmentContent
        topic1="1. 왜 TypeScript 인가?"
        subtopic1="TypeScript는 자바스크립트 개발에 정적 타입 시스템을 도입하고자 시도한 수많은 선택지 중 현재 가장 많은 사용자 커뮤니티를 갖고 있다. 과연 타입스크립트는 어떤 장점 덕분에 선두주자의 위치를 차지할 수 있었을까?"
        _explanation1="- 먼저 타입이 있는 자바스크립트란 단어는 보다 정확히는 정적 타입 시스템(static type system)을 도입한 자바스크립트라는 뜻이다."
        _explanation2="- 정적 타입 시스템이 있는 언어, 즉 정적 타입 언어(statically typed language)에서는 프로그램의 예상 동작을 타입을 통해 나타내고, 그 예상에 걸맞게 동작할 지의 여부를 타입 검사기(type checker)를 통해 실행 전에 확인할 수 있다. "
      />
      <DevelopmentContent
        topic1="2. JavaScript 상위집합"
        subtopic1="정적 타입 시스템이라는, 기존 자바스크립트에 전혀 없었던 개념을 제공함에도 불구하고 타입스크립트는 자바스크립트와 완전히 동떨어진 다른 언어가 아니다."
        _explanation1="- 타입스크립트는 현존하는 자바스크립트의 문제를 풀기 위해 등장했고, 그 수단으로 정적 타입 분석을 내세웠다. "
      />

      <DevelopmentContent
        topic1="3. TypeScript 장점"
        subtopic1="3.1 보다 빠른 버그 발견"
        _explanation1="- 정적 타입 시스템은 프로그램이 실제로 실행되기 전에 상당수의 오류를 잡아낼 수 있다. "
        _explanation2="- 같은 종류의 오류가 동적 타입 언어에서는 코드 리뷰, 심지어는 실제 배포가 일어날 때 까지도 안 발견되는 경우도 잦다. 소프트웨어 개발 파이프라인에서는 오류가 늦게 발견 될수록 더 큰 금전적, 시간적 비용을 치루어야 하므로 이는 매우 큰 이점이다."
      />
      <DevelopmentContent
        subtopic1="3.2 툴링"
        _explanation1="- 소스 코드에 대한 정적 타입 분석이 가능하다면 컴파일러 및 코드 에디터가 코드를 실행하지 않고도 프로그램에 대해 훨씬 더 많은 정보를 알 수 있다."
        _explanation2="- 대표적인 예시가 바로 에디터의 자동 완성 기능이다. 만약 타입 시스템이 어떤 변수의 타입 정보를 정확히 안다면, 해당 변수의 멤버로 존재할 수 있는 변수만을 자동 완성 후보로 추천할 수 있다."
      />
      <DevelopmentContent
        subtopic1="3.3 주석으로서의 타입"
        _explanation1="- 마지막으로, 타입은 프로그래머의 의도를 기술하는 주석과 같은 역할을 한다. "
        _explanation2="- 주석이나 변수명과는 다르게, 타입 정의와 다르게 동작하는 프로그램은 실행 자체가 불가능하다는 점에서 타입은 앞서 언급된 다른 수단보다 훌륭한 명세 수단으로 동작한다."
      />
    </div>
  );
};

export default Ts1;
