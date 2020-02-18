import Logo from "./Logo";
import "../css/Header.css";
import HeaderNav from "./HeaderNav";

import React, { Component } from "react";

class Header extends Component {
  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 150;
      if (isTop !== true) {
        this.setState({ scrolled: true });
        document.querySelector(".headerWrap").style.height = "80px";
      } else {
        this.setState({ scrolled: false });
        document.querySelector(".headerWrap").style.height = "106px";
      }
    });
  }
  render() {
    return (
      <header>
        <div
          className={this.state.scrolled ? "headerWrap scrolled" : "headerWrap"}
        >
          <Logo logo="KILHYUN.LOG" />
          <HeaderNav />
        </div>
      </header>
    );
  }
}

export default Header;
