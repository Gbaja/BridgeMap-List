import React, { Component, Fragment } from "react";
import faqs from "./Faqdata";
import Faq from "./Faq";

const styles = {
  active: {
    display: "block"
  },
  inactive: {
    display: "none"
  }
};
class FaqContainer extends Component {
  state = {
    active: false
  };
  handleClick = i => {
    return e => {
      let active = this.state.active === i ? null : i;
      this.setState({ active: active });
    };
  };
  display = i => {
    return this.state.active === i ? styles.active : styles.inactive;
  };
  render() {
    return (
      <Fragment>
        <Faq
          handleClick={this.handleClick}
          display={this.display}
          faqs={faqs}
        />
      </Fragment>
    );
  }
}

export default FaqContainer;
