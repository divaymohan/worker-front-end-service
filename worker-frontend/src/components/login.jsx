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
          <div className="card m-md-5 p-3">
            <div className="card-title">
              <h1>Login</h1>
            </div>
            <div className="m-5">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username : </label>
                  <input
                    type="emial"
                    name="username"
                    onChange={this.handleChange}
                    className="form-control"
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
                    className="form-control"
                    id="password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
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

export default Login;
