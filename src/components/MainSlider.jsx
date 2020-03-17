import React, { Component } from "react";
import Slider from "react-slick";
import "../css/MainSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default class MainSlider extends Component {
  static defaultProps = {
    title: "목록 제목",
    _src1:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.bwbx.io%2Fs3%2Fjavelin%2Fpublic%2Fjavelin%2Fimages%2Fplay-076012604d.svg&imgrefurl=https%3A%2F%2Fwww.bloomberg.com%2Fnews%2Farticles%2F2020-01-24%2Fgoldman-rule-adds-to-death-knell-of-the-all-white-male-board&tbnid=nfFvFfxJyzjElM&vet=12ahUKEwjKt4LAiNPnAhUCAqYKHcGlDZYQMygBegUIARCHAg..i&docid=cHDRm2XFoPxl0M&w=1024&h=1024&q=white&ved=2ahUKEwjKt4LAiNPnAhUCAqYKHcGlDZYQMygBegUIARCHAg",
    _src2:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.bwbx.io%2Fs3%2Fjavelin%2Fpublic%2Fjavelin%2Fimages%2Fplay-076012604d.svg&imgrefurl=https%3A%2F%2Fwww.bloomberg.com%2Fnews%2Farticles%2F2020-01-24%2Fgoldman-rule-adds-to-death-knell-of-the-all-white-male-board&tbnid=nfFvFfxJyzjElM&vet=12ahUKEwjKt4LAiNPnAhUCAqYKHcGlDZYQMygBegUIARCHAg..i&docid=cHDRm2XFoPxl0M&w=1024&h=1024&q=white&ved=2ahUKEwjKt4LAiNPnAhUCAqYKHcGlDZYQMygBegUIARCHAg",
    _src3:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.bwbx.io%2Fs3%2Fjavelin%2Fpublic%2Fjavelin%2Fimages%2Fplay-076012604d.svg&imgrefurl=https%3A%2F%2Fwww.bloomberg.com%2Fnews%2Farticles%2F2020-01-24%2Fgoldman-rule-adds-to-death-knell-of-the-all-white-male-board&tbnid=nfFvFfxJyzjElM&vet=12ahUKEwjKt4LAiNPnAhUCAqYKHcGlDZYQMygBegUIARCHAg..i&docid=cHDRm2XFoPxl0M&w=1024&h=1024&q=white&ved=2ahUKEwjKt4LAiNPnAhUCAqYKHcGlDZYQMygBegUIARCHAg",
    _src4:
      "https://tableathome.com/wp-content/uploads/2017/06/whiteimage-214x300.png",
    _src5:
      "https://tableathome.com/wp-content/uploads/2017/06/whiteimage-214x300.png",
    id: ""
  };
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToScroll: 4,
      slidesToShow: 3
    };
    return (
      <div className="__projectContainer">
        <Link to={this.props.mainLink}>{this.props.title}</Link>
        <div className="ProjectContainer">
          <ul>
            <Slider {...settings} className="__Slider">
              <li>
                <Link to={this.props._link1}>
                  <img
                    src={this.props._src1}
                    className="imagesize"
                    width="200"
                    alt={this.props.alt1}
                  />
                </Link>
                <Link to={this.props._link1}>{this.props.topic1}</Link>
              </li>
              <li>
                <Link to={this.props._link2}>
                  <img
                    src={this.props._src2}
                    className="imagesize"
                    width="200"
                    alt={this.props.alt2}
                  />
                </Link>
                <Link to={this.props._link2}>{this.props.topic2}</Link>
              </li>
              <li>
                <Link to={this.props._link3}>
                  <img
                    src={this.props._src3}
                    className="imagesize"
                    alt={this.props.alt3}
                  />
                </Link>
                <Link to={this.props._link3}>{this.props.topic3}</Link>
              </li>
              <li>
                <Link to={this.props._link4}>
                  <img
                    src={this.props._src4}
                    className="imagesize"
                    width="200"
                    alt={this.props.alt4}
                  />
                </Link>
                <Link to={this.props._link4}>{this.props.topic4}</Link>
              </li>

              <li>
                <Link to={this.props._link5}>
                  <img
                    src={this.props._src5}
                    className="imagesize"
                    alt={this.props.alt5}
                  />
                </Link>
                <Link to={this.props._link5}>{this.props.topic5}</Link>
              </li>
            </Slider>
          </ul>
        </div>
      </div>
    );
  }
}
