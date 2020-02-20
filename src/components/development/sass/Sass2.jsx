import React from "react";
import "../../../css/dev/DevelopmentComp.css";
import DevelopmentComp, {
  DevelopmentHead,
  DevelopmentContent,
  JSCode,
  DevelopmentScroll
} from "../../development/components/DevelopmentComp";

const Sass2 = () => {
  return (
    <div className="DevContainer">
      <DevelopmentHead
        title="Sass (2)"
        subtitle="Sass와 Scss의 기본 문법 차이"
      />
      <DevelopmentContent
        topic1="Sass vs Scss"
        subtopic1="Sass(Syntactically Awesome Style Sheets)의 3버전에서 새롭게 등장한 SCSS는 CSS 구문과 완전히 호환되도록 새로운 구문을 도입해 만든 Sass의 모든 기능을 지원하는 CSS의 상위집합이다."
        _explanation1="- 즉, SCSS는 CSS와 거의 같은 문법으로 Sass 기능을 지원한다는 말입니다."
        _explanation2="- 더 쉽고 간단한 차이는 {}(중괄호)와 ;(세미콜론)의 유무이다."
        _explanation3="- 아래의 예제를 비교해 보자"
      />
      <JSCode
        color00="_codePurple"
        text00="<Sass>"
        color10="_codeGreen"
        text10=".list"
        text20="    width:"
        color21="_codeGreen"
        text21=" 100px"
        text30="    float:"
        text31=" left"
        color40="_codeGreen"
        text40="    li"
        text50="      color:"
        color51="_codeGreen"
        text51=" red"
        text60="      background:"
        color61="_codeGreen"
        text61=" url('./image.jpg')"
        color70="_codeGreen"
        text70="      &:last-child"
        text80="       margin-right:"
        color81="_codeGreen"
        text81=" -10px"
      />
      <JSCode
        color00="_codeSky"
        text00="<Scss>"
        color10="_codeName"
        text10=".list"
        text20="    width:"
        color21="_codeSky"
        text21=" 100px"
        text22=";"
        text30="    float:"
        text31=" left"
        text32=";"
        color40="_codeOrange"
        text40="    li"
        text41=" {"
        text50="      color:"
        color51="_codeGreen"
        text51=" red"
        text52=";"
        text60="      background:"
        color61="_codeGreen"
        text61=" url('./image.jpg')"
        text62=";"
        color70="_codeGreen"
        text70="      &:last-child"
        text71=" {"
        text80="       margin-right:"
        color81="_codeSky"
        text81=" -10px"
        text82=";"
        text90="      }"
        text110="   }"
        text120="}"
      />
      <DevelopmentContent
        subtopic1="Sass는 선택자의 유효범위를 ‘들여쓰기’로 구분하고, SCSS는 {}로 범위를 구분한다."
        subtopic2="아래는 Mixins 이다. (‘믹스인’은 재사용 가능한 기능을 만드는 방식의 의미한다.)"
        _explanation5="Sass는 단축 구문으로 사용한다."
      />
      <JSCode
        color00="_codePurple"
        text00="<Sass>"
        text10="=border-radius("
        color11="_codeGreen"
        text11="$radius"
        text12=")"
        text20="    -webkit-border-radius:"
        color21="_codeGreen"
        text21=" $radius"
        text30="    -moz-border-radius:"
        color31="_codeGreen"
        text31="    $radius"
        text40="    -ms-border-radius:"
        color41="_codeGreen"
        text41="     $radius"
        text50="    border-radius:"
        color51="_codeGreen"
        text51="         $radius"
        text60="  "
        text70=".box"
        text80="    +border-radius(10px)"
      />
      <JSCode
        color00="_codeSky"
        text00="<Scss>"
        color10="_codeOrange"
        text10="@mixin"
        text11=" border-radius("
        color12="_codeGreen"
        text12="$radius"
        text13=")"
        text20=" -webkit-"
        color21="_codeGreen"
        text21="border-radius"
        text22=":"
        color23="_codeGreen"
        text23=" $radius"
        text30="    -moz-"
        color31="_codeGreen"
        text31="border-radius"
        text32=":"
        color33="_codeGreen"
        text33=" $radius"
        text40="     -ms-"
        color41="_codeGreen"
        text41="border-radius"
        text42=":"
        color43="_codeGreen"
        text43=" $radius"
        color50="_codeGreen"
        text50="         border-radius"
        text51=":"
        color52="_codeGreen"
        text52=" $radius"
        text60="  "
        color70="_codeOrange"
        text70=".box"
        text71=" { "
        color72="_codeRed"
        text72="@include "
        text73="border-radius("
        color74="_codeSky"
        text74="10px"
        text75=") ; }"
      />

      <DevelopmentContent
        subtopic1="Sass는 =와 + 기호로 Mixins 기능을 사용했고,"
        subtopic2="SCSS는 @mixin과 @include로 기능을 사용했다."
        _explanation5="Sass는 좀 더 간결하고 작성하기 편리하며, {}나 ;를 사용하지 않아도 되니 코드가 훨씬 깔끔해집니다."
        _explanation6="SCSS는 인라인 코드(한 줄 작성)를 작성할 수 있고, CSS와 유사한 문법을 가지기 때문에 코드 통합이 훨씬 쉽습니다."
      />
    </div>
  );
};

export default Sass2;
