import React, { Fragment } from "react";

import ErrorImage from "./errorimage.png";
import Header from "../Shared/Header/Header";
import "./ErrorPages.css";

const ServerError = () => {
  return (
    <Fragment>
      <Header />
      <div className="error-container">
        <h3>Oops looks like we're experiencing issues with our site.</h3>
        <img src={`${ErrorImage}`} alt="Error" />
      </div>
    </Fragment>
  );
};

export default ServerError;
