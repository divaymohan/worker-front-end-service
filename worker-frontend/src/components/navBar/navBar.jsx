import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  state = {};

  render() {
    const { User } = this.props;
    console.log(User);
    return (
      <nav className="navbar navbar-expand-lg navbar-info bg-dark">
        <Link className="navbar-brand" to="/">
          <h2>
            <span className="badge badge-light badge-pill text-primary">
              Worker Hiring System
            </span>
          </h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-item nav-link" to="/contactus">
              Contact Us
            </NavLink>
          </div>
        </div>
        {!User && (
          <React.Fragment>
            <NavLink className="nav-link " to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link " to="/register">
              Register
            </NavLink>
          </React.Fragment>
        )}
        {User && (
          <React.Fragment>
            <NavLink className="nav-link " to="/profile">
              {User.userName}
            </NavLink>
            <NavLink className="nav-link " to="/logout">
              logout
            </NavLink>
          </React.Fragment>
        )}
      </nav>
    );
  }
}

export default NavBar;
