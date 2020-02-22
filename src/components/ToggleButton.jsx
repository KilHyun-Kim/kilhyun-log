import React, { Component } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import IntroduceMySelf from "./IntroduceMySelf";
import "../css/ToggleButton.css";

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
    // this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    if (this.state.isToggleOn) {
      document.querySelector(".leftBlock").style.transform = "translateX(0%)";
      document.querySelector(".leftButton").style.transform = "translateX(0%)";
      document.querySelector(".slick-prev").style.display = "none";
    } else {
      document.querySelector(".leftBlock").style.transform =
        "translateX(-100%)";
      document.querySelector(".leftButton").style.transform =
        "translateX(-930%)";
      document.querySelector(".slick-prev").style.display = "block";
    }
  }
  // handleClick2() {
  //   this.setState(() => ({
  //     isToggleOn: false
  //   }));
  //   document.querySelector(".leftBlock").style.transform = "translateX(-100%)";
  //   document.querySelector(".leftButton").style.transform =
  //     "translateX(-1000%)";
  //   document.querySelector(".slick-prev").style.display = "block";
  // }

  render() {
    return (
      <div className="ToggleContainer">
        <div className="leftBlock">
          <IntroduceMySelf
            alt="내 사진"
            slider1='"Developer"'
            slider2='"Traveler"'
            slider3='"Full-Stack"'
          />
        </div>
        <div onClick={this.handleClick} className="leftButton">
          {this.state.isToggleOn ? (
            <FaChevronCircleRight size="100%" />
          ) : (
            <FaChevronCircleLeft size="100%" />
          )}
        </div>
      </div>
    );
  }
}

export default ToggleButton;
