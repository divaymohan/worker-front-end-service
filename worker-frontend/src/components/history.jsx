import React, { Component } from "react";
import { history } from "../services/job";
import jwtDecode from "jwt-decode";

import Rating from "./common/ratingComponent";
import { cancleJob } from "../services/jobCancle";
import { toast } from "react-toastify";

class HistoryComponent extends Component {
  state = {
    his: [],
    roll: "worker",
  };

  async componentDidMount() {
    const jwt = localStorage.getItem("token");
    const { _id, roll } = jwtDecode(jwt);
    let his = [...this.state.his];

    try {
      const { data: his } = await history(roll, _id);
      this.setState({ his, roll });
    } catch (ex) {
      console.log(ex);
    }
  }
  async componentDidUpdate() {
    const jwt = localStorage.getItem("token");
    const { _id, roll } = jwtDecode(jwt);
    let his = [...this.state.his];

    try {
      const { data: his } = await history(roll, _id);
      this.setState({ his, roll });
    } catch (ex) {
      console.log(ex);
    }
  }
  cancleJobHistory = async (_id) => {
    try {
      const result = await cancleJob(_id);

      //toast.success("Cancled SuccessFully");
    } catch (ex) {
      toast.warning(ex.response.data);
    }
  };
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
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.his.map((h) => (
              <tr key={h._id}>
                <td>{h.worker.userName}</td>
                <td>{h.customer.userName}</td>
                <td>{h.dateStart}</td>
                {this.state.roll === "worker" && h.isCancled === false && (
                  <td>
                    <button className="btn btn-success btn-sm">Accept</button>
                  </td>
                )}
                {this.state.roll === "worker" && h.isCancled === false && (
                  <td>
                    <button
                      onClick={() => this.cancleJobHistory(h._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Reject
                    </button>
                  </td>
                )}
                {this.state.roll === "worker" && h.isCancled && (
                  <td>
                    <h3>
                      <span className="badge badge-pill badge-warning">
                        cancled
                      </span>
                    </h3>
                  </td>
                )}

                {this.state.roll === "customer" && h.isCancled === false && (
                  <td>
                    <Rating job={h} />
                  </td>
                )}
                {this.state.roll === "customer" && h.isCancled === false && (
                  <td>
                    <button
                      onClick={() => this.cancleJobHistory(h._id)}
                      className="btn btn-danger btn-sm"
                    >
                      cancle
                    </button>
                  </td>
                )}
                {this.state.roll === "customer" && h.isCancled && (
                  <td>
                    <h3>
                      <span className="badge badge-pill badge-warning">
                        cancled
                      </span>
                    </h3>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HistoryComponent;
