import React, { Component } from "react";
import { getWorkerById } from "../../../services/fakeWorkerService";

class Person extends Component {
  state = {
    worker: {},
  };
  componentDidMount() {
    const worker = getWorkerById(this.props.match.params.id);
    console.log("worker: ", worker);
    this.setState({ worker });
  }
  render() {
    return <h1>Person</h1>;
  }
}

export default Person;
