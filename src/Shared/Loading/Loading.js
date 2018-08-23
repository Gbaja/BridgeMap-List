import React from "react";

import Header from "../Header/Header";
import "./Loading.css";

const Loading = props => (
  <div className={props.absolute ? "loading-absolute" : ""}>
    <div className="loading-spinner" />
    <p className="loading-text">Loading...</p>
  </div>
);

export default Loading;
