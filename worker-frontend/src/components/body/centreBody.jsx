import React, { Component } from "react";
import Worker from "./centreBody/worker";
import { getWorkers } from "../../services/fakeWorkerService";

class CentreBody extends Component {
  state = {
    workers: getWorkers(),
  };
  render() {
    return (
      <React.Fragment>
        {this.state.workers.map((w) => (
          <Worker key={w._id} worker={w} />
        ))}
      </React.Fragment>
    );
  }
}

export default CentreBody;
