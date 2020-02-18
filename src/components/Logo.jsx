import React from "react";

const Logo = props => {
  return (
    <div className="_logo">
      <a href="/" title="KILHYUN.LOG" className="link_logo">
        {props.logo}
      </a>
    </div>
  );
};

export default Logo;
