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
      userName,
      email,
      phoneNumber,
      skills,
      pricePerDay,
      address,
    } = this.props.worker;
    const { country, houseNumber, city, pin, street, area, landmark } = address;
    return (
      <div className="card m-4">
        <div className="card-header text-info">
          {userName}
          <span>
            <p className="card-title text-secondary">
              {skills.map((s) => {
                return (
                  <span className="badge badge-pill badge-success m-1">
                    {s.work}
                  </span>
                );
              })}
            </p>
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">
            <h5>
              <spam>email Id:: </spam>
            </h5>
          </p>
          <a
            onClick={this.handleBookEvent}
            className="btn btn-primary btn-sm m-2"
          >
            Book
          </a>
          <a
            onClick={this.handleSeePageEvent}
            className="btn btn-secondary btn-sm m-2"
          >
            See Page
          </a>
        </div>
      </div>
    );
  }
}

export default Worker;
