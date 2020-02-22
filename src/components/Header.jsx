import Logo from "./Logo";
import "../css/Header.css";
import HeaderNav from "./HeaderNav";

import React, { Component } from "react";

class Header extends Component {
  state = {
    scrolled: false
  };
  // constructor(props) {
  //   super(props);
  //   // this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick = () => {
  //   const nav = document.querySelector(".nav-links");
  //   const navLinks = document.querySelectorAll(".nav-links li");
  //   const menu_list = document.querySelector(".menu_list");
  //   nav.classList.toggle("nav-active");
  //   menu_list.classList.toggle("toggle");
  //   navLinks.forEach((link, index) => {
  //     if (link.getElementsByClassName.animation) {
  //       link.style.animation = "";
  //     } else {
  //       link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
  //         0.4}s`;
  //     }
  //   });
  // };

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
          <div className="Info_list">
            <a href="/Info">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz1FuiG57wE9MsScynSxPmxwx8f15jggewfqA-VxPtoWK1uMsw"
                alt="info"
              />
            </a>
          </div>
          <Logo logo="KILHYUN.LOG" />
          <div className="menu_list" onClick={this.handleClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <HeaderNav />
        </div>
      </header>
    );
  }
}

export default Header;
