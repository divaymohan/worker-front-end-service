import React, { Component } from "react";

class Profile extends Component {
  state = {
    classes: ["Profile", "Edit", "History"],
    Value: "",
  };
  onSelectSort = (item) => {
    let { Value } = this.state;
    Value = item;
    this.setState({ Value });
  };
  render() {
    return (
      <div className="container">
        <div className="col-3">
          <div className="m-0 shadow-lg p-3 mb-5 bg-white rounded">
            <ul>
              {this.state.classes.map((item) => (
                <li
                  onClick={() => this.onSelectSort(item)}
                  key={item}
                  className={
                    this.state.Value === item
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  style={{ cursor: "pointer" }}
                >
                  <h6>
                    <small>{item}</small>
                  </h6>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;