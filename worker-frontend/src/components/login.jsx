import React, { Component } from "react";

import Joi from "joi-browser";
import Form from "./common/form";

class Login extends Form {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    username: Joi.string().min(3).max(15).required().label("Username"),
    password: Joi.string().min(3).max(20).required().label("Pssword"),
  };

  doSubmit = () => {
    console.log("Form Submitted");
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="card m-md-5 p-3 bg-light shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-title">
              <h2>Login</h2>
            </div>
            <div className="m-5">
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", "Username")}
                {this.renderInput("password", "Password", "password")}
                {this.renderButton("Login")}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
