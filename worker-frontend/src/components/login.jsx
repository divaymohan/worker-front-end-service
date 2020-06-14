import React, { Component } from "react";
import FooterBar from "./footer/footer";

class Login extends Component {
  state = {
    account: {
      username: " ",
      password: " ",
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
          <div className="card m-md-5 p-3 bg-light shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-title">
              <h2>Login</h2>
            </div>
            <div className="m-5">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username : </label>
                  <input
                    type="emial"
                    name="username"
                    onChange={this.handleChange}
                    className="form-control shadow-sm p-3 mb-5 bg-white rounded"
                    id="username"
                    value={this.state.username}
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password : </label>
                  <input
                    type="pssword"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    className="form-control shadow-sm p-3 mb-5 bg-white rounded"
                    id="password"
                  />
                </div>
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
