import React from "react";
import logo from "../logo.svg";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item my-2">
            <a className="btn btn-primary mx-2" href="/" role="button">
              Login
            </a>
          </li>
          <li className="nav-item my-2">
            <a className="btn btn-primary" href="/signup" role="button">
              SignUp
            </a>
          </li>
        </ul>
      </div>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ height: 40, width: 90 }}
      />
    </nav>
  );
}

export default Header;
