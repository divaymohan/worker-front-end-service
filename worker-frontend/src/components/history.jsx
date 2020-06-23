import React, { Component } from "react";
import Table from "./common/table/table";
import { history } from "../services/job";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import StarRatingComponent from "react-star-rating-component";

class HistoryComponent extends Component {
  state = {
    his: [],
    roll: "worker",
    rating: 0,
  };
  onStarClick = (nextValue, preValue, name) => {
    const rating = nextValue;
    console.log(rating);
    this.setState({ rating });
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
              <tr>
                <td>{h.worker.userName}</td>
                <td>{h.customer.userName}</td>
                <td>{h.dateStart}</td>
                {this.state.roll === "worker" && (
                  <td>
                    <button className="btn btn-success btn-sm">Accept</button>
                  </td>
                )}
                {this.state.roll === "worker" && (
                  <td>
                    <button className="btn btn-danger btn-sm">Reject</button>
                  </td>
                )}

                {this.state.roll === "customer" && (
                  <td>
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={this.state.rating}
                      onStarClick={this.onStarClick}
                    />
                  </td>
                )}
                {this.state.roll === "customer" && (
                  <td>
                    <button className="btn btn-danger btn-sm">cancle</button>
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
