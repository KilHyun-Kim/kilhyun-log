import { Link } from "react-router-dom";
import React from "react";

const HeaderNav = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/development">Development</Link>
        </li>
        <li>
          <Link to="/travel">Travel</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
