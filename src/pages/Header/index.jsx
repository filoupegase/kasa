import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Header.scss";


class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img className="header-logo" src={logo} alt="logo" />
        </Link>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink
                className="header-link"
                to="/"
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                className="header-link"
                to="/about-us"
              >
                &Agrave; propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
}

export default Header;