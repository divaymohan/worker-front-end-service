import React, { Component } from "react";

class Form extends Component {
  state = { data: {}, errors: {} };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return <h1>Form</h1>;
  }
}

export default Form;
