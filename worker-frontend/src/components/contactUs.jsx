import React, { Component } from "react";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="card m-5 shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-header m-3">
            <h3>Contact Us</h3>
          </div>
          <form className="p-5">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-control" type="email" id="email" email />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input className="form-control" type="text" id="phone" email />
            </div>
            <div class="form-group">
              <label for="query">Query</label>
              <textarea class="form-control" id="query" rows="3"></textarea>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
