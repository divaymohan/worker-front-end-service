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
    console.log("changed the state");
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="card m-md-5 p-3">
            <div className="m-5">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <lable for="username">Username : </lable>
                  <input
                    type="emial"
                    onChange={this.handleChange}
                    className="form-control"
                    id="username"
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <lable for="password">Password : </lable>
                  <input
                    type="pssword"
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
