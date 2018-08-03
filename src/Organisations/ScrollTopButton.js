import React, { Component } from "react";

import UpArrow from "./up-arrow.svg";

class ScrollTopButton extends Component {
  scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  render() {
    console.log(window.innerHeight);
    return (
      <div className="scroll-top">
        <button className="scroll-top__button" onClick={this.scrollTopHandler}>
          <img
            src={UpArrow}
            alt="Scroll top icon"
            className="scroll-top__img"
          />
        </button>
      </div>
    );
  }
}

export default ScrollTopButton;
