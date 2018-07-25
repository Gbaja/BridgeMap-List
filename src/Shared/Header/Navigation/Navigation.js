import React from "react";
import { Link } from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Navigation.css";

const toolbar = props => (
  <header className="navigation">
    <nav className="navigation__container">
      <div className="navigation__logo">
        <a href="/">BridgeMap</a>
      </div>
      <div className="navigation_container-items">
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
      </div>
      <div className="navigation__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default toolbar;
