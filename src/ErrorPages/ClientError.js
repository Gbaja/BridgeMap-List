import React, { Fragment } from "react";

import ErrorImage from "./errorimage.png";
import Header from "../Shared/Header/Header";
import "./ErrorPages.css";

const ClientError = () => {
  return (
    <Fragment>
      <Header />
      <div className="error-container">
        <h3>
          Ooops looks like you have tried to visit a page that does not exist on
          BridgeMap.
        </h3>
        <img src={`${ErrorImage}`} alt="Error" />
      </div>
    </Fragment>
  );
};

export default ClientError;
