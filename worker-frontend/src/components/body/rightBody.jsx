import React, { Component } from "react";

class RightBody extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="m-1">
          <h5>
            {" "}
            <span className="badge badge-pill badge-dark m-2">
              Sort By Price
            </span>
          </h5>
          <div className="list-group">
            <div className="list-group-item">Hight To Low</div>
            <div className="list-group-item">Low To High</div>
          </div>
        </div>
        <div className="m-1">
          <h5>
            {" "}
            <span className="badge badge-pill badge-dark m-2">
              Sort By Rating
            </span>
          </h5>
          <div className="list-group">
            <div className="list-group-item">Hight To Low</div>
            <div className="list-group-item">Low To High</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RightBody;
