import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { useHistory, Link } from "react-router-dom";

class Worker extends Component {
  state = {
    worker: this.props.worker,
  };
  handleBookEvent = (e) => {};
  handleDetailsClick = (worker) => {
    const history = useHistory();
    let path = `/person`;
    history.push(path);
  };

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
    } = this.props.worker;
    //const { country, houseNumber, city, pin, street, area, landmark } = address;
    return (
      <div className="card m-2 shadow-sm p-3 mb-5 bg-white rounded">
        <div className="card-header text-dark">
          <h4>
            {firstName}
            <div className="float-right">
              <StarRatingComponent name="rate1" starCount={5} value={rating} />
            </div>
          </h4>

          <span>
            {skills.map((s) => {
              return (
                <span
                  key={s.work}
                  className="badge badge-pill badge-success m-1"
                >
                  {s.work}
                </span>
              );
            })}
          </span>
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

export default Worker;
