import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import SideDrawerLink from "./SideDrawerLink";
import "./SideDrawer.css";

const sideDrawer = ({ isSideDrawerOpen, closeSideDrawerHandler }) => {
  const handleLinkClick = closeSideDrawerHandler;

  const link = ({ to, text }) => (
    <SideDrawerLink to={to} onClick={handleLinkClick}>
      {text}
    </SideDrawerLink>
  );

  return (
    <nav className={isSideDrawerOpen ? "side-drawer open" : "side-drawer"}>
      <button onClick={closeSideDrawerHandler} className="side-drawer__button">
        X
      </button>
      <ul className="side-drawer__ul">
        <li className="side-drawer__list">BridgeMap</li>
        {link({ to: "/", text: "Directory" })}
        {link({ to: "/about", text: "About" })}
        {link({ to: "/faq", text: "FAQ" })}
        {link({ to: "/join", text: "Join" })}
      </ul>
    </nav>
  );
};

export default sideDrawer;
