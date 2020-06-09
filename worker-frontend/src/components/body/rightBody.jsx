import React, { Component } from "react";

class RightBody extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="m-1">
          <h5>
            <span className="badge badge-pill badge-dark m-2">
              Sort By Price
            </span>
          </h5>
          <div className="list-group">
            <div className="list-group-item ">
              <h6>
                <small>Hight To Low</small>
              </h6>
            </div>
            <div className="list-group-item">
              <h6>
                <small> Low To High</small>
              </h6>
            </div>
          </div>
        </div>
        <div className="m-1">
          <h5>
            <span className="badge badge-pill badge-dark m-2">
              Sort By Rating
            </span>
          </h5>
          <div className="list-group">
            <div className="list-group-item">
              <h6>
                <small>Hight To Low</small>
              </h6>
            </div>
            <div className="list-group-item">
              <h6>
                <small> Low To High</small>
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RightBody;
