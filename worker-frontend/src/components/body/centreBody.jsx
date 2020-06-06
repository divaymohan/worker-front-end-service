import React, { Component } from "react";
import Worker from "./centreBody/worker";

class CentreBody extends Component {
  state = {
    workers: [
      {
        id: 1,
        name: "Divay",
        skills: ["skipper", "cook", "manager"],
        Details: "Yes i can work anywhere in the world",
      },
      {
        id: 2,
        name: "Mohan",
        skills: ["skipper", "cook", "manager"],
        Details: "Yes i can work anywhere in india",
      },
      {
        id: 3,
        name: "Tushar",
        skills: ["skipper", "cook", "manager"],
        Details: "Yes i can work anywhere in the world",
      },
      {
        id: 4,
        name: "Diksha",
        skills: ["skipper", "cook", "manager"],
        Details: "Yes i can work anywhere in the world",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Worker />
        <Worker />
        <Worker />
        <Worker />
        <Worker />
      </React.Fragment>
    );
  }
}

export default CentreBody;
