import React, { Component } from "react";
class Worker extends Component {
  state = {
    worker: this.props.worker,
  };
  handleBookEvent = () => {
    console.log("handling book Event..!!");
  };
  handleSeePageEvent = () => {
    console.log("handling see page Details Event..!!");
  };
  render() {
    const {
      firstName,
      userName,
      email,
      phoneNumber,
      skills,
      pricePerDay,
      address,
    } = this.props.worker;
    const { country, houseNumber, city, pin, street, area, landmark } = address;
    return (
      <div className="card m-2">
        <div className="card-header text-dark">
          <h4>{firstName}</h4>
          <span>
            {skills.map((s) => {
              return (
                <span className="badge badge-pill badge-success m-1">
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
          <a
            onClick={this.handleSeePageEvent}
            className="btn btn-sm btn-secondary"
          >
            Details
          </a>
        </div>
      </div>
    );
  }
}

export default Worker;
