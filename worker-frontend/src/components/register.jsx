import React, { Component } from "react";
import FooterBar from "./footer/footer";

class Register extends Component {
  state = {
    account: {
      username: " ",
      password: " ",
      repeatPassword: " ",
      email: " ",
      country: "India",
      city: " ",
      pin: " ",
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted page..!!");
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="card m-md-5 p-3">
            <div className="card-title">
              <h1>Register</h1>
            </div>
            <div className="m-5">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username : </label>
                  <input
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    className="form-control"
                    id="username"
                    value={this.state.username}
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Email : </label>
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    className="form-control"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password : </label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="repeatPassword">Password : </label>
                  <input
                    type="password"
                    name="repeatPassword"
                    onChange={this.handleChange}
                    value={this.state.repeatPassword}
                    className="form-control"
                    id="repeatPassword"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country : </label>
                  <input
                    type="text"
                    name="country"
                    onChange={this.handleChange}
                    value={this.state.country}
                    className="form-control"
                    id="country"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City : </label>
                  <input
                    type="text"
                    name="city"
                    onChange={this.handleChange}
                    value={this.state.city}
                    className="form-control"
                    id="city"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pin">Pin : </label>
                  <input
                    type="text"
                    name="pin"
                    onChange={this.handleChange}
                    value={this.state.pin}
                    className="form-control"
                    id="pin"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
        <FooterBar />
      </React.Fragment>
    );
  }
}

export default Register;
