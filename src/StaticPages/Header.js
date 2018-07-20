import React from "react";
import { Link } from "react-router-dom";

import Logo from "./logo.jpg";
import "./StaticPages.css";

const Header = () => (
  <div className="header__container">
    <div className="header__logo">
      <Link to="/" className="header__nav__link">
        BridgeMap
      </Link>
    </div>
    <ul className="header__nav__container">
      <li className="header__nav__list">
        <Link to="/" className="header__nav__link">
          Directory
        </Link>
      </li>
      <li className="header__nav__list">
        <Link to="/about" className="header__nav__link">
          About
        </Link>
      </li>
      <li className="header__nav__list">
        <Link to="/join" className="header__nav__link">
          Join
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
