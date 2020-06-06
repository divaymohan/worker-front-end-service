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
    const { name, skills, Details } = this.state.worker;
    return (
      <div className="card m-4">
        <div className="card-header text-info">{name}</div>
        <div className="card-body">
          <h5 className="card-title text-secondary">
            {skills.map((s) => {
              return (
                <span className="badge badge-pill badge-warning m-1">{s}</span>
              );
            })}
          </h5>
          <p className="card-text">{Details}</p>
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
