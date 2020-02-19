import React from "react";
import "../../../css/dev/DevelopmentComp.css";
export const DevelopmentHead = props => {
  return (
    <div className="DevHead">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};
export const DevelopmentContent = props => {
  return (
    <div className="DevContent">
      <h2>{props.topic1}</h2>
      <h3>{props.subtopic1}</h3>
      <p>{props._explanation1}</p>
      <p>{props._explanation2}</p>
      <p>{props._explanation3}</p>
      <p>{props._explanation4}</p>
    </div>
  );
};

export const JSCode = props => {
  return (
    <pre>
      <code>
        <p>
          <span className={props.color00}>{props.text00}</span>
          <span className={props.color01}>{props.text01}</span>
          <span className={props.color02}>{props.text02}</span>
          <span className={props.color03}>{props.text03}</span>
          <span className={props.color04}>{props.text04}</span>
          <span className={props.color05}>{props.text05}</span>
          <span className={props.color06}>{props.text06}</span>
          <span className={props.color07}>{props.text07}</span>
          <span className={props.color08}>{props.text08}</span>
          <span className={props.color09}>{props.text09}</span>
          <span className={props.color010}>{props.text010}</span>
          <span className={props.color011}>{props.text011}</span>
        </p>
        <p>
          <span className={props.color10}>{props.text10}</span>
          <span className={props.color11}>{props.text11}</span>
          <span className={props.color12}>{props.text12}</span>
          <span className={props.color13}>{props.text13}</span>
          <span className={props.color14}>{props.text14}</span>
          <span className={props.color15}>{props.text15}</span>
          <span className={props.color16}>{props.text16}</span>
          <span className={props.color17}>{props.text17}</span>
          <span className={props.color18}>{props.text18}</span>
          <span className={props.color19}>{props.text19}</span>
          <span className={props.color110}>{props.text110}</span>
          <span className={props.color111}>{props.text111}</span>
        </p>
        <p>
          <span className={props.color20}>{props.text20}</span>
          <span className={props.color21}>{props.text21}</span>
          <span className={props.color22}>{props.text22}</span>
          <span className={props.color23}>{props.text23}</span>
          <span className={props.color24}>{props.text24}</span>
        </p>
        <p>
          <span className={props.color30}>{props.text30}</span>
          <span className={props.color31}>{props.text31}</span>
          <span className={props.color32}>{props.text32}</span>
          <span className={props.color33}>{props.text33}</span>
          <span className={props.color34}>{props.text34}</span>
          <span className={props.color35}>{props.text35}</span>
          <span className={props.color36}>{props.text36}</span>
          <span className={props.color37}>{props.text37}</span>
          <span className={props.color38}>{props.text38}</span>
          <span className={props.color39}>{props.text39}</span>
          <span className={props.color310}>{props.text310}</span>
          <span className={props.color311}>{props.text311}</span>
        </p>
        <p>
          <span className={props.color40}>{props.text40}</span>
          <span className={props.color41}>{props.text41}</span>
          <span className={props.color42}>{props.text42}</span>
          <span className={props.color43}>{props.text43}</span>
          <span className={props.color44}>{props.text44}</span>
          <span className={props.color45}>{props.text45}</span>
          <span className={props.color46}>{props.text46}</span>
          <span className={props.color47}>{props.text47}</span>
        </p>
        <p>
          <span className={props.color50}>{props.text50}</span>
          <span className={props.color51}>{props.text51}</span>
          <span className={props.color52}>{props.text52}</span>
          <span className={props.color53}>{props.text53}</span>
          <span className={props.color54}>{props.text54}</span>
          <span className={props.color55}>{props.text55}</span>
          <span className={props.color56}>{props.text56}</span>
          <span className={props.color57}>{props.text57}</span>
        </p>
        <p>
          <span className={props.color60}>{props.text60}</span>
          <span className={props.color61}>{props.text61}</span>
          <span className={props.color62}>{props.text62}</span>
          <span className={props.color63}>{props.text63}</span>
          <span className={props.color64}>{props.text64}</span>
          <span className={props.color65}>{props.text65}</span>
          <span className={props.color66}>{props.text66}</span>
          <span className={props.color67}>{props.text67}</span>
        </p>
        <p>
          <span className={props.color70}>{props.text70}</span>
          <span className={props.color71}>{props.text71}</span>
          <span className={props.color72}>{props.text72}</span>
          <span className={props.color73}>{props.text73}</span>
          <span className={props.color74}>{props.text74}</span>
          <span className={props.color75}>{props.text75}</span>
          <span className={props.color76}>{props.text76}</span>
          <span className={props.color77}>{props.text77}</span>
        </p>
        <p>
          <span className={props.color80}>{props.text80}</span>
          <span className={props.color81}>{props.text81}</span>
          <span className={props.color82}>{props.text82}</span>
          <span className={props.color83}>{props.text83}</span>
          <span className={props.color84}>{props.text84}</span>
          <span className={props.color85}>{props.text85}</span>
          <span className={props.color86}>{props.text86}</span>
          <span className={props.color87}>{props.text87}</span>
        </p>
        <p>
          <span className={props.color90}>{props.text90}</span>
          <span className={props.color91}>{props.text91}</span>
          <span className={props.color92}>{props.text92}</span>
          <span className={props.color93}>{props.text93}</span>
          <span className={props.color94}>{props.text94}</span>
          <span className={props.color95}>{props.text95}</span>
          <span className={props.color96}>{props.text96}</span>
        </p>
        <p>
          <span className={props.color100}>{props.text100}</span>
          <span className={props.color101}>{props.text101}</span>
          <span className={props.color102}>{props.text102}</span>
        </p>
        <p>
          <span className={props.color110}>{props.text110}</span>
          <span className={props.color111}>{props.text111}</span>
          <span className={props.color112}>{props.text112}</span>
          <span className={props.color113}>{props.text113}</span>
          <span className={props.color114}>{props.text114}</span>
          <span className={props.color115}>{props.text115}</span>
          <span className={props.color116}>{props.text116}</span>
          <span className={props.color117}>{props.text117}</span>
        </p>
      </code>
    </pre>
  );
};

export const DevelopmentScroll = props => {
  // window.scrollTo({ top: props.y, left: 0, behavior: "smooth" });

  return (
    <div className="ScrollDiv">
      <p
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        {props.scroll1}
      </p>
      <p
        onClick={() => {
          window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
        }}
      >
        {props.scroll2}
      </p>
      <p>{props.scroll3}</p>
      <p>{props.scroll4}</p>
      <p>{props.scroll5}</p>
    </div>
  );
};

const DevelopmentComp = props => {
  return;
};

export default DevelopmentComp;
