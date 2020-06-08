import React, { Component } from "react";
import NavBar from "./navBar/navBar";
import CentreBody from "./body/centreBody";
import Filters from "./body/Filters";
import RightBody from "./body/rightBody";
import { getWorks } from "../services/fakeWorkServices";
import Pagination from "./common/pagination";

class MyApp extends Component {
  state = {
    works: [],
    currentSelectedWork: " ",
  };
  componentDidMount() {
    const currentSelectedWork = { _id: " ", work: "All Jobs" };
    const works = [currentSelectedWork, ...getWorks()];
    this.setState({ works, currentSelectedWork });
  }
  handleWorkClick = (work) => {
    const currentSelectedWork = work;
    this.setState({ currentSelectedWork });
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
                Works={this.state}
                onHandleClick={this.handleWorkClick}
              />
            </div>
            <div className="col-8 bg-light m-2">
              <CentreBody />
              <Pagination />
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
