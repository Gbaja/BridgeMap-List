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
      <ul>
        <li>
          <Link to="/">Directory</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/join">Join</Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
