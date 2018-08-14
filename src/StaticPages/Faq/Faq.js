import React from "react";

import "./Faq.css";

const Faq = props => {
  console.log(props.faqs[0].joining);
  return (
    <div className="faqs">
      <div className="faqs__container">
        <h3 className="faqs__heading">Frequently Asked Questions</h3>
        <p>
          Please see below for some of the questions we are asked often, if you
          do not find your question, feel free to email us on{" "}
          <a href="mailto:gbajaf@yahoo.co.uk">gbajaf@yahoo.co.uk</a>
        </p>
        <ul className="faqs__ul">
          {props.faqs.map((faq, i) => {
            return (
              <li key={i} className="faqs__list">
                <button onClick={props.handleClick(i)} className="faqs__button">
                  {faq.question}
                </button>
                <div style={props.display(i)} className="faqs__result">
                  {faq.answer}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
