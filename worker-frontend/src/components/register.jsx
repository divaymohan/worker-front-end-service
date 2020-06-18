import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import registerUser from "../services/registerService";
import { toast } from "react-toastify";
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
    if (
      this.state.data.roll.trim() !== "worker" &&
      this.state.data.roll.trim() !== "customer"
    ) {
      toast.error("Roll Must be worker or customer.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    try {
      const { headers } = await registerUser(this.state.data);
      localStorage.setItem("token", headers["x-auth-token"]);
      window.location = "/";
      console.log("Submitted");
      toast.success("User Registered Now you can login..!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (ex) {
      toast.error(ex.response.data, { position: toast.POSITION.TOP_CENTER });
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
