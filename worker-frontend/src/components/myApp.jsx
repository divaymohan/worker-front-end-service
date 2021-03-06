import React, { Component } from "react";
import CentreBody from "./body/centreBody";
import Filters from "./body/Filters";
import RightBody from "./body/rightSideBar";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import getWorks from "../services/work";

import _ from "lodash";
import axios from "axios";

class MyApp extends Component {
  state = {
    works: [],
    workers: [],
    currentSelectedWork: null,
    pageSize: 2,
    currentPage: 1,
    sortValue: "Low To High",
    sortpath: "firstName",
  };
  async componentDidMount() {
    const currentSelectedWork = { _id: null, work: "All Jobs" };
    //const workUrl = "http://localhost:3001/api/hiring/work/";
    const { data: workes } = await getWorks();
    const workerUrl = "http://localhost:3001/api/hiring/workers/";
    const { data: workers } = await axios.get(workerUrl);
    const works = [currentSelectedWork, ...workes];
    // const workers = getWorkers();

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
  handleSort = (path, value) => {
    console.log(path, value);
    const sortpath = path;
    const sortValue = value;
    this.setState({ sortValue, sortpath });
  };
  render() {
    const {
      works,
      pageSize,
      currentPage,
      workers,
      currentSelectedWork,
      sortValue,
      sortpath,
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
    let sorted = filtered;
    if (sortValue === "Low To High") {
      sorted = _.orderBy(filtered, sortpath, "asc");
    } else {
      sorted = _.orderBy(filtered, sortpath, "desc");
    }

    const worker = paginate(sorted, currentPage, pageSize);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2 bg-light m-1">
            <Filters Works={this.state} onWorkClick={this.handleWorkClick} />
          </div>
          <div className="col-7 bg-light m-1">
            <CentreBody worker={worker} />
            <Pagination
              pageSize={pageSize}
              currentPage={currentPage}
              itemsCount={sorted.length}
              onPageChange={this.handleClickPage}
            />
          </div>

          <div className="col bg-light m-1">
            <RightBody
              items={["Low To High", "High To Low"]}
              paths={["rating", "pricePerDay"]}
              onSelectSort={this.handleSort}
              sortValue={sortValue}
              sortpath={sortpath}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyApp;
