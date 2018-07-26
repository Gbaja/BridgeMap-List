import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <button onClick={props.closeSideDrawer} className="side-drawer__button">
        X
      </button>
      <ul className="side-drawer__ul">
        <li className="side-drawer__list">BridgeMap</li>
        <li className="side-drawer__list">
          <Link to="/" className="side-drawer__link">
            Directory
          </Link>
        </li>
        <li className="side-drawer__list">
          <Link to="/about" className="side-drawer__link">
            About
          </Link>
        </li>
        <li className="side-drawer__list">
          <Link to="/faq" className="side-drawer__link">
            FAQ
          </Link>
        </li>
        <li className="side-drawer__list" className="side-drawer__list">
          <Link to="/join" className="side-drawer__link">
            Join
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
