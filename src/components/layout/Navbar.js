import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import Github from "bootstrap-icons/icons/github.svg";

const Navbar = ({ title }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img width="24" height="24" src={Github} alt="Github Logo"></img>&nbsp;
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
