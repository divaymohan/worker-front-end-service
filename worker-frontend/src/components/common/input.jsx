import React, { Component } from "react";

const Input = ({ type, name, onChange, error, id, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{name} </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className="form-control shadow-sm bg-white rounded"
        id={id}
        value={value}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
