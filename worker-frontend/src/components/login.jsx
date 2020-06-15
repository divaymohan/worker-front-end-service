import React from "react";

import Joi from "joi-browser";
import Form from "./common/form";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().min(3).label("Username"),
    password: Joi.string().required().min(3).label("Password"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
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
