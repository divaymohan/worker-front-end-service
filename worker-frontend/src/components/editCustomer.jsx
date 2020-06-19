import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import loginUser from "./../services/auth";
import { toast } from "react-toastify";

class Login extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      middleName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      address: {
        city: "",
        area: "",
        pin: "",
      },
      isSpecial: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().min(3).label("Username"),
    password: Joi.string().required().min(3).label("Password"),
    roll: Joi.string().required(),
  };

  doSubmit = async () => {
    const { username, password, roll } = this.state.data;
    if (roll.trim() !== "worker" && roll.trim() !== "customer") {
      console.log(roll === "worker");
      toast.error("Roll Must be worker or customer.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    try {
      const { headers } = await loginUser(username, password, roll);
      localStorage.setItem("token", headers["x-auth-token"]);
      window.location = "/";

      toast.success("Login Successfull..");
      console.log("Submitted");
    } catch (error) {
      const errors = { ...this.state.errors };
      errors.username = error.response.data;
      this.setState({ errors });
      toast.error(error.response.data, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(error);
    }
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
                {this.renderInput("roll", "Roll")}
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
