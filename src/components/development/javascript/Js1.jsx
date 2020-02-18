import React from "react";
import "../../../css/dev/DevelopmentComp.css";
import DevelopmentComp, {
  DevelopmentHead,
  DevelopmentContent,
  JSCode
} from "../../development/components/DevelopmentComp";
const Js1 = () => {
  return (
    <div className="DevContainer">
      <DevelopmentHead title="Function" subtitle="JavaScript의 함수(1)" />
      <DevelopmentContent
        topic1="컴퓨터 프로그래밍에서의 함수란?"
        _explanation1="함수 (function)란 하나의 특별한 목적의 작업을 수행하기 위해 독립적으로 설계된 코드의 집합으로 정의할 수 있습니다."
      />
      <DevelopmentContent
        topic1="JavaScript에서의 함수란?"
        _explanation1="함수는 JavaScript에서 기본적인 구성 블록 중의 하나입니다. 함수는 작업을 수행하거나 값을 계산하는 문장 집합 같은 자바스크립트 절차입니다. "
      />
      <DevelopmentContent
        topic1="함수 정의"
        _explanation1="JavaScript에서 함수 선언 시 3가지 방법이 있습니다."
      />
      <DevelopmentContent
        subtopic1="1) 함수 선언문 사용"
        _explanation1="function 키워드와 함수명이 정의된 방식"
      />
      <JSCode
        color00="_codeBlue"
        text00="function"
        color01="_codeName"
        text01=" add"
        color02="_codeWhite"
        text02="("
        color03="_codeVerse"
        text03="a"
        color04="_codeWhite"
        text04=","
        color05="_codeVerse"
        text05="b"
        color06="_codeWhite"
        text06=")"
        color07="_codeWhite"
        text07="{"
        color10="_codePurple"
        text10="    return"
        color11="_codeVerse"
        text11=" a"
        color12="_codeWhite"
        text12=" + "
        color13="_codeVerse"
        text13="b"
        color20="_codeWhite"
        text20="}"
        color30="_codeGreen"
        text30="console"
        color31="_codeWhite"
        text31="."
        color32="_codeName"
        text32="log"
        color33="_codeWhite"
        text33="("
        color34="_codeName"
        text34="add"
        color35="_codeWhite"
        text35="("
        color36="_codeVerse"
        text36="2"
        color37="_codeWhite"
        text37=","
        color38="_codeVerse"
        text38="5"
        color39="_codeWhite"
        text39=")"
        color310="_codeWhite"
        text310=")"
        color311="_codeGreen"
        text311="  //  7"
      />
      <DevelopmentContent
        subtopic1="2) 함수 표현식"
        _explanation1="함수 리터럴로 익명 함수를 만들고 변수에 할당하는 방식"
        _explanation2="(유연한 자바스크립트 언어의 특징을 활용한 선언 방식)"
        _explanation3="※ 함수 선언문 방식과의 차이점은 변수 add가 함수 이름이 아니며, 함수의 참조값을 가진다는 것입니다."
      />
      <JSCode
        color00="_codeBlue"
        text00="var"
        color01="_codeName"
        text01=" add"
        color02="_codeWhite"
        text02=" = "
        color03="_codeBlue"
        text03="function"
        color04="_codeWhite"
        text04="("
        color05="_codeVerse"
        text05="a"
        color06="_codeWhite"
        text06=","
        color07="_codeVerse"
        text07="b"
        color08="_codeWhite"
        text08=")"
        color09="_codeWhite"
        text09="{"
        color10="_codePurple"
        text10="    return"
        color11="_codeVerse"
        text11=" a"
        color12="_codeWhite"
        text12=" + "
        color13="_codeVerse"
        text13="b"
        color20="_codeWhite"
        text20="}"
        color30="_codeGreen"
        text30="console"
        color31="_codeWhite"
        text31="."
        color32="_codeName"
        text32="log"
        color33="_codeWhite"
        text33="("
        color34="_codeName"
        text34="add"
        color35="_codeWhite"
        text35="("
        color36="_codeVerse"
        text36="2"
        color37="_codeWhite"
        text37=","
        color38="_codeVerse"
        text38="5"
        color39="_codeWhite"
        text39=")"
        color310="_codeWhite"
        text310=")"
        color311="_codeGreen"
        text311="  //  7"
      />

      <DevelopmentContent
        subtopic1="3) Function() 생성자 함수를 통한 함수 생성"
        _explanation1="JavaScript의 함수는 Function()이라는 내장 생성자 함수로부터 생성된 객체입니다."
        _explanation2="즉, 앞에서 살펴본 함수 선언문, 함수 표현식 모두 내부적으로 Function() 생성자 함수로부터 함수가 생성된다는 것입니다."
        _explanation3="그럼에도 함수 선언문, 표현식을 사용하는 이유는 함수 작성이 편리하기 때문입니다."
      />

      <JSCode
        color00="_codeBlue"
        text00="var"
        color01="_codeVerse"
        text01=" add"
        color02="_codeWhite"
        text02=" = "
        color03="_codeBlue"
        text03="new"
        color04="_codeVerse"
        text04=" Function"
        color05="_codeWhite"
        text05="("
        color06="_codeOrange"
        text06=" 'a'"
        color07="_codeWhite"
        text07=","
        color08="_codeOrange"
        text08="'b'"
        color09="_codeWhite"
        text09=","
        color010="_codeOrange"
        text010="'return a + b'"
        color011="_codeWhite"
        text011=" )"
        color10="_codeGreen"
        text10="console"
        color11="_codeWhite"
        text11="."
        color12="_codeName"
        text12="log"
        color13="_codeWhite"
        text13="("
        color14="_codeName"
        text14="add"
        color15="_codeWhite"
        text15="("
        color16="_codeVerse"
        text16="2"
        color17="_codeWhite"
        text17=","
        color18="_codeVerse"
        text18="5"
        color19="_codeWhite"
        text19=")"
        color110="_codeWhite"
        text110=")"
        color111="_codeGreen"
        text111="  //  7"
      />
    </div>
  );
};

export default Js1;
