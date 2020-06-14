import React, { Component } from "react";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron m-5">
        <h1 className="display-4">Worker Hiring System</h1>
        <p className="lead">
          This application is to help all the lower catogory workers.
        </p>
        <hr className="my-4" />
        <div className="card-group">
          <div class="card mb-3 m-5">
            <div class="card-header bg-dark text-white">Work</div>
            <div class="card-body bg-secondry">
              <h5 class="card-title">Find a work</h5>
              <p class="card-text">
                Hey, Thanks for choosing us we are glad to find a job for
                you.Happy Working.
              </p>
            </div>
            <div class="card-footer bg-secondry">
              <button className="btn btn-success">join for work</button>
            </div>
          </div>
          <div class="card mb-3 m-5">
            <div class="card-header bg-dark text-white">Hire</div>
            <div class="card-body bg-secondry text-dark">
              <h5 class="card-title">Hiring make easy.</h5>
              <p class="card-text">
                Hey,Thanks for choosing us we have peoples which can help you.
                Hire with us and save money and time.
              </p>
            </div>
            <div class="card-footer bg-secondry">
              <button className="btn btn-primary">Start Hiring</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
