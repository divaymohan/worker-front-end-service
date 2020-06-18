import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import registerUser from "../services/registerService";
class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      email: "",
      phoneNumber: 1111111111,
      roll: "worker",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().min(3).label("Username"),
    email: Joi.string().required(),
    phoneNumber: Joi.number().min(1111111111).max(9999999999).required(),
    password: Joi.string().required().min(3).label("Password"),
    roll: Joi.string().required(),
  };

  doSubmit = async () => {
    try {
      const user = await registerUser(this.state.data);
      console.log("Submitted", user);
    } catch (ex) {
      alert(ex.response.data);
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="card m-md-5 p-3 bg-light shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-title">
              <h2>Register</h2>
            </div>
            <div className="m-5">
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", "Username")}
                {this.renderInput("email", "Email")}
                {this.renderInput("phoneNumber", "Phone Number")}
                {this.renderInput("password", "Password", "password")}
                {this.renderInput("roll", "Roll")}
                {this.renderButton("Register")}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
