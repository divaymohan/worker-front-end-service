import React, { Component } from "react";
import Worker from "./centreBody/worker";

class CentreBody extends Component {
  render() {
    const { worker } = this.props;
    return (
      <React.Fragment>
        {worker.map((w) => (
          <Worker key={w._id} worker={w} />
        ))}
      </React.Fragment>
    );
  }
}

export default CentreBody;
