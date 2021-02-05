import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo.png";

import "./Navbar.css";

export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <HashLink to="/#about" className="navbar-logo">
          <img className="navbar-logo" src={logo} alt="logo"></img>
        </HashLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <HashLink
              to="/#about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              à Propos
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink
              to="/#formation"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Formation & Compétence
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink
              to="/#experience"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Expérience
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink
              to="/#activity"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Activite & Passion
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink
              to="/#contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
