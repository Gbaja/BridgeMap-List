import React, { Component } from "react";
import Header from "../Header/Header";
import faqs from "./Faqdata";

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
    //const stateStyle = this.state.active ? styles.active : styles.inactive;
    return (
      <div>
        <Header />
        <ul style={{ marginTop: "100px", marginLeft: "20px" }}>
          {faqs.map((faq, i) => {
            return (
              <li key={i} onClick={this.handleClick(i)}>
                <span>{faq.question}</span>
                <div style={this.display(i)}>{faq.answer}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FaqContainer;
