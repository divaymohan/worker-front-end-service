import React, { Component } from "react";

class FooterBar extends Component {
  state = {};
  render() {
    return (
      <footer className="bg-dark">
        <div className="row">
          <div className="col">
            <h3>
              <span className="badge badge-light badge-pill">Github</span>
            </h3>
          </div>
          <div className="col">
            <h3>
              <span className="badge badge-light badge-pill">LinkedIn</span>
            </h3>
          </div>
          <div className="col">
            <h3>
              <span className="badge badge-light badge-pill">Twitter</span>
            </h3>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterBar;
