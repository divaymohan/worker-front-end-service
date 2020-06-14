import React, { Component } from "react";
import FooterBar from "./footer/footer";
import Input from "./common/input";

class Login extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };
  validate = () => {
    const { account } = this.state;
    const errors = {};
    if (account.username.trim() === "") {
      errors.username = "username can't be empty";
    }
    if (account.password.trim() === "") {
      errors.password = "password can't be empty";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="card m-md-5 p-3 bg-light shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-title">
              <h2>Login</h2>
            </div>
            <div className="m-5">
              <form onSubmit={this.handleSubmit}>
                <Input
                  type={"emial"}
                  name={"username"}
                  onChange={this.handleChange}
                  id={"username"}
                  value={account.username}
                  error={errors.username}
                />
                <Input
                  type={"password"}
                  name={"password"}
                  onChange={this.handleChange}
                  id={"password"}
                  value={account.password}
                  error={errors.password}
                />

                <button type="submit" className="btn btn-primary ">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
