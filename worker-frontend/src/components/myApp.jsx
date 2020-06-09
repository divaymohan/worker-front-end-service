import React, { Component } from "react";
import NavBar from "./navBar/navBar";
import CentreBody from "./body/centreBody";
import Filters from "./body/Filters";
import RightBody from "./body/rightBody";
import { getWorks } from "../services/fakeWorkServices";
import Pagination from "./common/pagination";
import { getWorkers } from "../services/fakeWorkerService";
import { paginate } from "../utils/paginate";
import FooterBar from "./footer/footer";

class MyApp extends Component {
  state = {
    works: [],
    workers: [],
    currentSelectedWork: null,
    pageSize: 2,
    currentPage: 1,
  };
  componentDidMount() {
    const currentSelectedWork = { _id: null, work: "All Jobs" };
    const works = [currentSelectedWork, ...getWorks()];
    const workers = getWorkers();

    this.setState({ works, workers, currentSelectedWork });
  }
  handleWorkClick = (work) => {
    const currentSelectedWork = work;
    const currentPage = 1;
    //console.log(currentSelectedWork);
    this.setState({ currentSelectedWork, currentPage });
  };
  handleClickPage = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const {
      works,
      pageSize,
      currentPage,
      workers,
      currentSelectedWork,
    } = this.state;

    const filtered =
      currentSelectedWork && currentSelectedWork._id
        ? workers.filter((worker) => {
            for (let i = 0; i < worker.skills.length; i++) {
              if (worker.skills[i].work === currentSelectedWork.work) {
                return true;
              }
            }
            return false;
          })
        : workers;
    console.log(filtered);
    const worker = paginate(filtered, currentPage, pageSize);
    return (
      <React.Fragment>
        <NavBar />
        <main className="container bg-white">
          <div className="row">
            <div className="col bg-light m-2">
              <Filters Works={this.state} onWorkClick={this.handleWorkClick} />
            </div>
            <div className="col-8 bg-light m-2">
              <CentreBody worker={worker} />
              <Pagination
                pageSize={pageSize}
                currentPage={currentPage}
                itemsCount={filtered.length}
                onPageChange={this.handleClickPage}
              />
            </div>

            <div className="col bg-light m-2">
              <RightBody />
            </div>
          </div>
          <FooterBar />
        </main>
      </React.Fragment>
    );
  }
}

export default MyApp;
