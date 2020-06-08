import React, { Component } from "react";
import NavBar from "./navBar/navBar";
import CentreBody from "./body/centreBody";
import Filters from "./body/Filters";
import RightBody from "./body/rightBody";
import { getWorks } from "../services/fakeWorkServices";

class MyApp extends Component {
  state = {
    works: getWorks(),
  };
  handleWorkClick = (work) => {
    console.log("you are intrested in: ", work);
  };
  render() {
    const { works } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <main className="container bg-white">
          <div className="row">
            <div className="col-2 bg-light m-2">
              <Filters works={works} onClick={this.handleWorkClick} />
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
