import React from "react";
import { Link } from "react-router-dom";

const Logo = props => {
  return (
    <div className="_logo">
      <Link to="/" title="KILHYUN.LOG" className="link_logo">
        {props.logo}
      </Link>
    </div>
  );
};

export default Logo;
