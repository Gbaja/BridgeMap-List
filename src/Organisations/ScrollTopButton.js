import React, { Component } from "react";

import UpArrow from "./up-arrow.svg";

class ScrollTopButton extends Component {
  scrollTopHandler = () => {
    console.log("hey");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  render() {
    return (
      <div className="scroll-top">
        <button className="scroll-top__button" onClick={this.scrollTopHandler}>
          <img src={UpArrow} className="scroll-top__img" />
        </button>
      </div>
    );
  }
}

export default ScrollTopButton;
