import React, { Component } from "react";
import NavBar from "./navBar/navBar";
import CentreBody from "./body/centreBody";
import Filters from "./body/Filters";
import RightBody from "./body/rightBody";
import { getWorks } from "../services/fakeWorkServices";

class MyApp extends Component {
  state = {
    works: [],
  };
  componentDidMount() {
    const works = [{ _id: " ", work: "All Jobs" }, ...getWorks()];
    this.setState({ works });
  }
  handleWorkClick = (work) => {
    console.log("you are intrested in: ", work);
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container bg-white">
          <div className="row">
            <div className="col-2 bg-light m-2">
              <Filters
                AllWorks={this.state.works}
                onHandleClick={this.handleWorkClick}
              />
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
