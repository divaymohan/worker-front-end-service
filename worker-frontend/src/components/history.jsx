import React, { Component } from "react";
import Table from "./common/table/table";
import { history } from "../services/job";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

class HistoryComponent extends Component {
  state = {
    his: [],
  };
  async componentDidMount() {
    const jwt = localStorage.getItem("token");
    const { _id, roll } = jwtDecode(jwt);
    let his = [...this.state.his];
    try {
      const { data: his } = await history(roll, _id);

      this.setState({ his });
    } catch (ex) {
      console.log(ex);
    }
  }
  render() {
    return (
      <div className="container">
        <h1>History</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Worker</th>
              <th scope="col">Customer</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.his.map((h) => (
              <tr>
                <td>{h.worker.userName}</td>
                <td>{h.customer.userName}</td>
                <td>{h.dateStart}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HistoryComponent;
