import React, { Component } from "react";
import Update from "./editCustomer";
import jwtDecode from "jwt-decode";
import UpdateWorker from "./editWorker";
import HistoryComponent from "./history";

class Profile extends Component {
  state = {
    classes: ["Profile", "Edit", "History"],
    Value: "",
    roll: " ",
  };
  onSelectSort = (item) => {
    let { roll } = jwtDecode(localStorage.getItem("token"));
    console.log(roll);
    let { Value } = this.state;
    Value = item;
    this.setState({ Value, roll });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3 m-5">
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
          <div className="col">
            {this.state.Value === "Edit" && this.state.roll === "customer" && (
              <Update />
            )}
            {this.state.Value === "Edit" && this.state.roll === "worker" && (
              <UpdateWorker />
            )}
            {this.state.Value === "History" && <HistoryComponent />}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
