import React from "react";
import "../../../css/dev/DevelopmentComp.css";

import {
  DevelopmentHead,
  DevelopmentContent,
  JSCode
} from "../../development/components/DevelopmentComp";

const React1 = () => {
  return (
    <div className="DevContainer">
      <DevelopmentHead title="React" subtitle="리액트를 시작하며..." />
      <DevelopmentContent
        topic1="1. 왜 리액트인가?"
        subtopic1="HTML과 CSS, 그리고 순수 자바스크립트 만으로도 웹페이지를 얼마든지 제작할 수 있다."
        _explanation1="- 특히 단순한 정적 페이지를 만드는 것이 목적이라면 React와 같은 프론트엔드 라이브러리는 큰 이득이 되지 못한다."
        subtopic2="하지만 요즘의 웹은 정적이고 단순한 페이지가 아니다. 웹앱 혹은 웹 어플리케이션이라 불릴 정도로 복잡하고 동적이다. "
        _explanation5="- 웹 어플리케이션에서 UI를 동적으로 나타내기 위해서는 복잡하고 많은 상태를 관리해야 하는 부담이 생긴다."
        _explanation6="- React를 사용하면 사용자와 상호작용할 수 있는 interactive한 UI를 쉽게 만들 수 있다."
        _explanation7="- React를 사용하면 기능과 UI 구현에 집중하고 불필요한 주의력 분산을 줄일 수 있게 된다."
      />
      <DevelopmentContent
        topic1="2. 리액트의 중요한 특징"
        subtopic1="React는 다음 3가지의 중요한 특징을 지니고 있다."
        subtopic2="이 요소들은 분리된 것이 아니라 서로 연결되면서 React를 지탱한다."
      />
      <DevelopmentContent
        topic1="2.1 Component"
        subtopic1="Component는 UI를 구성하는 개별적인 뷰 단위이다. "
        _explanation1="- React로 개발을 한다는 것은 마치 블럭을 조립해 성을 만드는 것과 같다. "
        _explanation2="- 전체 앱은 각 Component들이 결합해서 만들어 지게 된다."
        _explanation3="- 무엇보다 각 Component들은 앱의 다른 부분, 또는 다른 앱에서 쉽게 재사용이 가능하다."
      />
      <DevelopmentContent
        topic1="2.2 JSX"
        subtopic1="JSX는 보통 선언적이라고 번역되는, Declarative한 개발을 도와주는 도구이다. "
        _explanation1="- 간단하게 말해 한눈에 이해하기 쉬운 개발을 만들어 준다."
        _explanation2="- JSX는 그 형태가 마치 html과 같아서, 유저에게 보여주고 싶은 최종적인 View라고 할 수 있다. "
        _explanation3="- 이러한 장점은 예측가능한 개발을 만들어줄 뿐 아니라 유지보수, 협업 등에서도 엄청난 강점을 발휘하게 된다."
      />
      <DevelopmentContent
        topic1="2.3 Vitual DOM"
        subtopic1="결국 위의 모든 것을 가능하게 만들어주는 것, 그리고 React의 가장 큰 특징이자 뜨거운 논쟁을 불러일으키는 대상, 그것이 바로 Virtual DOM이다."
        subtopic2="DOM에 대한 완전히 새로운 접근"
        _explanation5="- 기존의 라이브러리들의 DOM 컨트롤 방식은 굉장히 비효율적이었다."
        _explanation6="- 하지만 리액트에서의 Virtual DOM은 단순한 DOM 조작 도구가 아니라 컴포넌트 단위로 움직이는 Declarative한 개발을 구현하기 위해 도입된 것이다. "
      />

      <DevelopmentContent topic1="3. 작업 환경 설정" />
      <DevelopmentContent
        subtopic1="3.1 리액트 프로젝트를 만들 때는 Node.js를 반드시 먼저 설치 해야한다."
        _explanation1="- 이것으로 웹 브라우저 환경이 아닌 곳에서도 자바스크립트를 사용하여 연산할 수 있다."
        _explanation2="- 리액트 애플리케이션은 웹 브라우저에서 실행되는 코드이므로 Node.js와 직접적인 연관은 없지만, 프로젝트를 개발하는 데 필요한 주요 도구들이 Node.js를 사용한다."
        subtopic2="Node.js를 설치하면 npm이 함께 설치된다."
        _explanation5="- npm으로 수많은 개발자가 만든 패키지(재사용 가능한 코드)를 설치하고 설칳한 패키지의 버전을 관리할 수 있다."
        _explanation6="- https://nodejs.org/ko/download/"
      />
      <DevelopmentContent
        subtopic1="3.2 yarn 설치, npm을 대체할 수 있는 도구"
        _explanation1="- npm보다 더 빠르며 효율적인 캐시 시스템과 기타 부가 기능을 제공한다."
        _explanation2="- npm이 익숙하다면 yarn을 굳이 사용하지 않아도 된다."
        _explanation3="- https://yarnpkg.com/en/docs/install#windows-stable"
        subtopic2="Node.js를 설치하면 npm이 함께 설치된다."
        _explanation5="- npm으로 수많은 개발자가 만든 패키지(재사용 가능한 코드)를 설치하고 설칳한 패키지의 버전을 관리할 수 있다."
      />
      <DevelopmentContent
        subtopic1="3.3 에디터 설치"
        _explanation1="- 요즘 대세인 VSC(Visual Studio Code)를 설치해준다!"
        _explanation2="- 다른 코드 에디터가 익숙하다면 굳이 사용하지 않아도 된다."
        _explanation3="- https://code.visualstudio.com/Download"
      />
      <DevelopmentContent
        topic1="4. create-react-app으로 프로젝트 생성하기"
        subtopic1="create-react-app은 리액트 프로젝트를 생성할 때 필요한 웹팩, 바벨의 설치 및 설정 과정을 생략하고 바로 간편하게 프로젝트 작업 환경을 구축해 주는 도구이다."
        _explanation1="- 나중에 설정을 커스터 마이징하면 자유롭게 설정을 변경할 수 있다."
        _explanation2="- 리액트 프로젝트를 만들 때는 이렇게 yarn create react-app <프로젝트 이름> 명령어를 사용한다."
        _explanation3="- yarn 을 사용하지 않는경우 npm init react-app <프로젝트 이름> 을 사용하도록 한다."
      />
      <JSCode text00="$ yarn create react-app hello-react" />

      <DevelopmentContent
        topic1="5. 마무리"
        subtopic1="리액트의 메뉴얼로 끝을 짓겠다."
      />
      <JSCode
        text00="We built React to solve one problem: "
        text10="building large applications with data that changes over time."
        text20="번역: 우리는 지속해서 데이터가 변화하는 대규모 애플리케이션을 구축하기 위해 React를 만들었습니다."
      />
    </div>
  );
};

export default React1;
