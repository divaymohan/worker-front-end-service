import React, { Component } from "react";
import { getWorkerById } from "../../../services/fakeWorkerService";
import StarRatingComponent from "react-star-rating-component";
import getWorkers from "../../../services/workerService";
import { Link } from "react-router-dom";

class Person extends Component {
  state = {
    worker: {},
  };
  handleBookEvent = () => {};
  async componentDidMount() {
    const { data: worker } = await getWorkers(this.props.match.params.id);
    console.log(worker);
    this.setState({ worker });
  }
  render() {
    const {
      _id,
      firstName,
      userName,
      email,
      phoneNumber,
      skills,
      pricePerDay,
      address,
      rating,
    } = this.state.worker;
    //const { country, houseNumber, city, pin, street, area, landmark } = address;
    return (
      <div className="card m-2 shadow-sm p-3 mb-5 bg-white rounded">
        <div className="card-header">
          <h4>
            {firstName}
            {/* <div className="float-right">
              <StarRatingComponent name="rate1" starCount={5} value={rating} />
            </div> */}
          </h4>
        </div>
        <div className="card-body">
          <p className="card-text m-1">
            Email Id : {email}
            <br />
            Contact : {phoneNumber}
            <br />
            Price : {pricePerDay}
          </p>
          <a
            onClick={this.handleBookEvent}
            className="btn btn-primary btn-sm m-1"
          >
            Book
          </a>
          <Link to={`/person/${_id}`} className="btn btn-sm btn-secondary">
            Details
          </Link>
        </div>
      </div>
    );
  }
}

export default Person;
