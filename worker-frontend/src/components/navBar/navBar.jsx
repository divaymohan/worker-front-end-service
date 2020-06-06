import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  handleLogin = () => {
    console.log("Handling Login Logic..!!");
  };
  handleClickOnLogo = () => {
    console.log("Handling click on logo..!!");
  };
  handleClickOnHome = () => {
    console.log("Handling click on home..!!");
  };
  hanldeClickOnContactUs = () => {
    console.log("Handling Click event on Contact us..!!");
  };
  handleClickOnAbout = () => {
    console.log("Handling click event on about..!!");
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a onClick={this.handleClickOnLogo} className="navbar-brand">
          <h2>
            <span className="badge badge-light badge-pill">
              Worker Hiring System
            </span>
          </h2>
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a onClick={this.handleClickOnHome} className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.handleClickOnAbout} className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={this.hanldeClickOnContactUs}
                className="nav-link"
                tabIndex="-1"
                aria-disabled="true"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <button
            onClick={this.handleLogin}
            className="btn btn-outline-success my-2 my-sm-0"
          >
            LogIn/SignUp
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
