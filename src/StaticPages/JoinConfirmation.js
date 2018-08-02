import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Header from "../Shared/Header/Header";
import "./StaticPages.css";

const JoinConfirmation = () => (
  <Fragment>
    <Header />
    <div className="join-confirmation">
      <p className="join-confirmation__text">
        Thank you for filling out our join form
      </p>
      <p className="join-confirmation__text">
        You application has been received, you will be notified via email when
        your organisation has been verified and listed. We aim to do this within
        14 working days
      </p>
      <p className="join-confirmation__text">
        For all enquiries, please email us at{" "}
        <a href="mailto:gbajaf@yahoo.co.uk">gbajaf@yahoo.co.uk</a>
      </p>
      <p className="join-confirmation__text">
        Keep up to date with our upcoming news, events and updates by following
        us on twitter, @BridgeMap
      </p>
      <Link to="/" className="join-confirmation__link">
        Back to organisations
      </Link>
    </div>
  </Fragment>
);

export default JoinConfirmation;
