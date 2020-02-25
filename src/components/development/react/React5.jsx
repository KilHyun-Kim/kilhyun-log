import React from "react";
import "../../../css/dev/DevelopmentComp.css";
import {
  DevelopmentHead,
  DevelopmentContent,
  JSCode,
  DevelopmentImg
} from "../../development/components/DevelopmentComp";
import { PageFooter } from "../../BasicPageComp";

const React5 = () => {
  return (
    <div className="DevContainer">
      <DevelopmentImg
        src="https://static.thenounproject.com/png/1919562-200.png"
        alt="hooks"
      />
      <DevelopmentHead title="Hooks" subtitle="React Hooks ?" />
      <DevelopmentContent
        topic1="1. 리액트 Hooks 란 무엇인가?"
        subtopic1="Hooks는 리액트 v16.8에 새로 도입된 기능이다."
        _explanation1="- useState : 함수형 컴포넌트에서도 상태 관리를 할 수 있게 해준다."
        _explanation2="- useEffect : 렌더링 직후 작업을 설정할 수 있다."
        subtopic2="위의 예시들의 기능을 제공하여 기존의 함수형 컴포넌트에서 할수 없었던 다양한 작업을 할 수 있게 해준다."
      />
      <DevelopmentContent
        topic1="2. 다양한 Hooks에 대하여 알아보자."
        subtopic1="먼저 리액트 내장 Hooks를 알아보자."
      />
      <DevelopmentContent
        topic1="2.1 useState"
        subtopic1="useState는 가장 기본적인 Hooks이며, 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다."
      />
      <JSCode
        text00="import"
        color00="_codePurple"
        text01=" React"
        color01="_codeVerse"
        text02=", {"
        color02="_codeWhite"
        text03=" useState "
        color03="_codeVerse"
        text04="}"
        color04="_codeWhite"
        text05=" from "
        color05="_codePurple"
        text06="'react'"
        color06="_codeRed"
        text07=";"
        color07="_codeWhite"
        text10="　"
        text20="const"
        color20="_codeSky"
        text21=" Counter"
        color21="_codeName"
        text22=" = ()"
        color22="_codeWhite"
        text23=" =>"
        color23="_codeSky"
        text24=" {"
        color24="_codeWhite"
        text30="  const"
        color30="_codeSky"
        text31=" ["
        color31="_codeWhite"
        text32="value"
        color32="_codeVerse"
        text33=","
        color33="_codeWhite"
        text34=" setValue"
        color34="_codeVerse"
        text35="] = "
        color35="_codeWhite"
        text36="useState"
        color36="_codeName"
        text37="("
        color37="_codeWhite"
        text38="0"
        color38="_codeBGreen"
        text39=");"
        color39="_codeWhite"
        text40="  return"
        color40="_codePurple"
        text41=" ("
        color41="_codeWhite"
        text50="    <"
        text51="div"
        color51="_codeSky"
        text52=">"
        text60="      <"
        text61="p"
        color61="_codeSky"
        text62=">"
        text70="        현재 카운터 값은"
        color70="_codeWhite"
        text71="<"
        text72="b"
        color72="_codeSky"
        text73=">"
        text74="{"
        color74="_codeSky"
        text75="value"
        color75="_codeVerse"
        text76="}"
        color76="_codeSky"
        text77="</"
        text78="b"
        color78="_codeSky"
        text79=">"
        text80="      </"
        text81="p"
        color81="_codeSky"
        text82=">"
        text90="      <"
        text91="button"
        color91="_codeSky"
        text92=" onClick"
        color92="_codeVerse"
        text93="="
        color93="_codeWhite"
        text94="{"
        color94="_codeSky"
        text95="()"
        color95="_codeWhite"
        text96=" =>"
        color96="_codeSky"
        text97=" setValue"
        color97="_codeName"
        text98="("
        color98="_codeWhite"
        text99="value"
        color99="_codeVerse"
        text990=" + "
        color990="_codeWhite"
        text991="1"
        color991="_codeBGreen"
        text992=")"
        color992="_codeWhite"
        text993="}"
        color993="_codeSky"
        text994=">"
        text995="+1"
        color995="_codeWhite"
        text996="</"
        text997="button"
        color997="_codeSky"
        text998=">"
        text100="      <"
        text101="button"
        color101="_codeSky"
        text102=" onClick"
        color102="_codeVerse"
        text103="="
        color103="_codeWhite"
        text104="{"
        color104="_codeSky"
        text105="()"
        color105="_codeWhite"
        text106=" =>"
        color106="_codeSky"
        text107=" setValue"
        color107="_codeName"
        text108="("
        color108="_codeWhite"
        text109="value"
        color109="_codeVerse"
        text1110=" - "
        color1110="_codeWhite"
        text1111="1"
        color1111="_codeBGreen"
        text1112=")"
        color1112="_codeWhite"
        text1113="}"
        color1113="_codeSky"
        text1114=">"
        text1115="-1"
        color1115="_codeWhite"
        text1116="</"
        text1117="button"
        color1117="_codeSky"
        text1118=">"
        text110="    </"
        text111="div"
        color111="_codeSky"
        text112=">"
        text120="  );"
        color120="_codeWhite"
        text130="};"
        color130="_codeWhite"
      />
      <DevelopmentContent
        _explanation1="- useState는 코드 상단에서 import 구문을 통해 불러온다."
        _explanation2="- useState 함수의 파라미터에는 상태의 기본값을 넣어준다."
        _explanation3="- 이 함수가 호출되면 배열을 반환하는데, 그 배열의 첫 번째 원소는 상태 값, 두 번째 원소는 상태를 설정하는 함수이다."
        subtopic2="이 함수에 파라미터를 넣어서 호출하면 전달받은 파라미터로 값이 바뀌고 컴포넌트가 정성적으로 리렌더링된다."
      />
      <DevelopmentContent
        topic1="2.2 useEffect"
        subtopic1="useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다."
        _explanation1="- 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 보아도 무방하다."
      />
      <DevelopmentContent
        subtopic1="2.2.1 마운트될 때만 실행하고 싶을 때"
        _explanation1="- useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 배열얼 넣어 주면 된다. "
      />
      <JSCode
        text00="useEffect"
        color00="_codeName"
        text01="(()"
        color01="_codeWhite"
        text02=" => "
        color02="_codeSky"
        text03="{"
        color03="_codeWhite"
        text10=" console"
        color10="_codeVerse"
        text11="."
        color11="_codeWhite"
        text12="log"
        color12="_codeName"
        text13="("
        color13="_codeWhite"
        text14='"마운트될 때만 실행됩니다."'
        color14="_codeRed"
        text15=");"
        color15="_codeWhite"
        text20="}, []);"
        color20="_codeWhite"
      />
      <DevelopmentContent
        subtopic1="2.2.2 특정 값이 업데이트될 때만 실행하고 싶을 때"
        _explanation1="- useEffect의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어 주면 된다."
        _explanation2="- 배열 안에는 useState를 통해 관리하고 있는 상태를 넣어줘도 되고, props로 전달받은 값을 넣어 줘도 된다."
      />
      <JSCode
        text00="useEffect"
        color00="_codeName"
        text01="(()"
        color01="_codeWhite"
        text02=" => "
        color02="_codeSky"
        text03="{"
        color03="_codeWhite"
        text10=" console"
        color10="_codeVerse"
        text11="."
        color11="_codeWhite"
        text12="log"
        color12="_codeName"
        text13="("
        color13="_codeWhite"
        text14="name"
        color14="_codeVerse"
        text15=");"
        color15="_codeWhite"
        text20="}, ["
        color20="_codeWhite"
        text21="name"
        color21="_codeVerse"
        text22="]);"
        color22="_codeWhite"
      />

      <DevelopmentContent
        topic1="2.3 useReducer"
        subtopic1="useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용하는 Hook이다."
        _explanation1="- 리듀서를 간단하게 설명하면 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션값을 전달받아 새로운 상태를 반환하는 함수이다."
        _explanation2="<중요> 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜 주어야 한다"
        _explanation5="- Redux와 차이점은 사용하는 액션 객체에는 어떤 액션인지 알려 주는 type 필드가 꼭 있어야 하지만, "
        _explanation6="- useReducer에서 사용하는 액션 객체는 반드시 type을 지니고 있을 필요가 없다."
      />

      <JSCode />
      <DevelopmentContent
        topic1="2.4 useMemo"
        subtopic1="useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있다."
        _explanation1="- useMemo Hook을 사용하면 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행한다."
        _explanation2="- 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식"
      />
      <JSCode />
      <DevelopmentContent topic1="2.5 useCallback" subtopic1="" />
      <JSCode />
      <DevelopmentContent topic1="2.6 useRef" />
      <JSCode />
      <DevelopmentContent topic1="3. 커스텀 Hooks" />
      <JSCode />
      <DevelopmentContent topic1="4. 다른 Hooks" />
      <PageFooter
        Prev="/development/react/4"
        List="/development/react"
        Next="/development/react/6"
      />
    </div>
  );
};

export default React5;
