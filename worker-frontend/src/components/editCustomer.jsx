import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import loginUser from "./../services/auth";
import { toast } from "react-toastify";

class Update extends Form {
  state = {
    data: {
      firstName: "Divay",
      lastName: "",
      middleName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      houseNumber: "hwy",
      street: "",
      country: "",
      landmark: "",
      city: "",
      area: "",
      pin: "",
      isSpecial: "",
    },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().min(3).label("Username"),
    firstName: Joi.string().required().min(3).label("First Name"),
    lastName: Joi.string().required().min(3).label("Last Name"),
    middleName: Joi.string().min(2).label("Middle Name"),
    email: Joi.string().min(5).max(1000).label("Email"),
    phoneNumber: Joi.number()
      .min(1111111111)
      .max(9999999999)
      .required()
      .label("Phone Number"),
    houseNumber: Joi.number().min(1).required(),
    street: Joi.string().min(3).max(1000),
    country: Joi.string().min(3).max(100),
    landmark: Joi.string().min(3).max(1000),
    city: Joi.string().min(3).max(1000),
    area: Joi.string().min(3).max(1000),
    pin: Joi.number().min(111111).max(999999),
    password: Joi.string().required().min(3).label("Password"),
    isSpecial: Joi.string(),
  };

  doSubmit = async () => {
    //call server
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="card m-md-5 p-3 bg-light shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-title">
              <h2>Update</h2>
            </div>
            <div className="m-5">
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("firstName", "Fist Name*")}
                {this.renderInput("lastName", "Last Name*")}
                {this.renderInput("middleName", "Middle Name")}
                {this.renderInput("email", "Email*")}
                {this.renderInput("phoneNumber", "phoneNumber*")}
                {this.renderInput("houseNumber", "House nmber*")}
                {this.renderInput("city", "City*")}
                {this.renderInput("street", "Street*")}
                {this.renderInput("country", "Country*")}
                {this.renderInput("landmark", "Landmark*")}
                {this.renderInput("area", "Area")}
                {this.renderInput("Pin", "Pin*")}
                {this.renderInput("username", "Username")}
                {this.renderInput("password", "Password", "password")}
                {this.renderButton("Update")}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Update;
