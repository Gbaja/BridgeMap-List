import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SideDrawerLink = ({ to, onClick, children }) => (
  <Fragment>
    <li className="side-drawer__list">
      <Link to={to} className="side-drawer__link" onClick={onClick}>
        {children}
      </Link>
    </li>
  </Fragment>
);

export default SideDrawerLink;
