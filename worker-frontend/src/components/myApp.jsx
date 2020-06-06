import React, { Component } from "react";
import NavBar from "./navBar/navBar";
import CentreBody from "./body/centreBody";
import LeftBody from "./body/leftBody";
import RightBody from "./body/rightBody";

class MyApp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container bg-dark">
          <div className="row mb-3">
            <div className="col-2 bg-light m-2">
              <LeftBody />
            </div>
            <div className="col-8 bg-light m-2">
              <CentreBody />
            </div>
            <div className="col bg-light m-2">
              <RightBody />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default MyApp;
