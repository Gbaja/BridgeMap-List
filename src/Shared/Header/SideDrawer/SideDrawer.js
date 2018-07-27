import React from "react";
import { Link } from "react-router-dom";

import SideDrawerLink from "./SideDrawerLink";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.isSideDrawerOpen) {
    drawerClasses = "side-drawer open";
  }
  const handleLinkClick = props.closeSideDrawerHandler;

  return (
    <nav className={drawerClasses}>
      <button
        onClick={props.closeSideDrawerHandler}
        className="side-drawer__button"
      >
        X
      </button>
      <ul className="side-drawer__ul">
        <li className="side-drawer__list">BridgeMap</li>
        <SideDrawerLink to="/" onClick={handleLinkClick}>
          Directory
        </SideDrawerLink>
        <SideDrawerLink to="/about" onClick={handleLinkClick}>
          About
        </SideDrawerLink>
        <SideDrawerLink to="/faq" onClick={handleLinkClick}>
          FAQ
        </SideDrawerLink>
        <SideDrawerLink to="/join" onClick={handleLinkClick}>
          Join
        </SideDrawerLink>
      </ul>
    </nav>
  );
};

export default sideDrawer;
