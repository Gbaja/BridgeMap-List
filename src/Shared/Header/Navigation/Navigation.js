import React from "react";
import { Link } from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Navigation.css";

const toolbar = props => (
  <header className="navigation">
    <nav className="navigation-container">
      <div className="navigation__logo">
        <a href="/">BridgeMap</a>
      </div>
      <div className="navigation-container-items">
        <ul className="navigation-container__ul">
          <li className="navigation-container__list">
            <Link to="/" className="navigation-container__link">
              Directory
            </Link>
          </li>
          <li className="navigation-container__list">
            <Link to="/about" className="navigation-container__link">
              About
            </Link>
          </li>
          <li className="navigation-container__list">
            <Link to="/faq" className="navigation-container__link ">
              FAQ
            </Link>
          </li>
          <li className="navigation-container__list">
            <Link to="/join" className="navigation-container__link">
              Join
            </Link>
          </li>
        </ul>
      </div>
      <div className="navigation__toggle-button">
        <DrawerToggleButton
          drawerToggleClickHandler={props.drawerToggleClickHandler}
        />
      </div>
    </nav>
  </header>
);

export default toolbar;
