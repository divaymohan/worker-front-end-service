import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import loginUser from "./../services/auth";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import {
  getWorkerService,
  getAddress,
  updateWorkerService,
  UpdateAddress,
} from "./../services/workerUpdateService";

class UpdateWorker extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      middleName: "",
      userName: "",
      email: "",
      phoneNumber: 2545455252,
      password: "",
      houseNumber: 0,
      street: "",
      country: "",
      landmark: "",
      city: "",
      area: "",
      pin: 0,
      pricePerDay: 0,
    },
    _Ids: {
      address_id: "",
      worker_id: "",
    },
    errors: {},
  };
  async componentDidMount() {
    const jwt = localStorage.getItem("token");
    const result = jwtDecode(jwt);
    const { data: worker } = await getWorkerService(result._id);
    const { data: address } = await getAddress(worker.address._id);
    const data = { ...this.state.data };
    data.firstName = worker.firstName;
    data.lastName = worker.lastName;
    data.email = worker.email;
    data.userName = worker.userName;
    data.password = worker.password;
    data.middleName = worker.middleName;
    data.phoneNumber = worker.phoneNumber;

    data.city = address.city;
    data.area = address.area;
    data.country = address.country;
    data.houseNumber = address.houseNumber;
    data.pin = address.pin;
    data.landmark = address.landmark;
    data.street = address.street;

    const _Ids = { ...this.state._Ids };
    _Ids.address_id = address._id;
    _Ids.worker_id = worker._id;

    this.setState({ data, _Ids });
  }

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
    pin: Joi.number().min(111111),
    pricePerDay: Joi.number().min(0),
    password: Joi.string().required().min(3).label("Password"),
  };

  doSubmit = async () => {
    const jwt = localStorage.getItem("token");
    const result = jwtDecode(jwt);
    console.log(result);
    try {
      let cust = await updateWorkerService(
        this.state._Ids.worker_id,
        this.state.data
      );
      //console.log(cust);
      cust = await UpdateAddress(this.state._Ids.worker_id, this.state.data);
      //console.log(cust);
      toast("Data Updated Successfully..!");
    } catch (ex) {
      toast(ex.response.data);
    }
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
                {this.renderInput("pin", "Pin*")}
                {this.renderInput("userName", "Username")}
                {this.renderInput("password", "Password", "password")}
                {this.renderInput("pricePerDay", "Price(per/day)")}
                {this.renderButton("Update")}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UpdateWorker;
