import Logo from "./Logo";
import "../css/Header.css";
import HeaderNav from "./HeaderNav";

import React, { Component } from "react";

class Header extends Component {
  state = {
    scrolled: false
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const menu_list = document.querySelector(".menu_list");
    nav.classList.toggle("nav-active");
    menu_list.classList.toggle("toggle");
    navLinks.forEach((link, index) => {
      if (link.getElementsByClassName.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.4}s`;
      }
    });
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
          <div className="menu_list" onClick={this.handleClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
