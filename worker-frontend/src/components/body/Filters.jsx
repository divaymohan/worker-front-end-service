import React from "react";

const Filters = (props) => {
  const { onWorkClick, Works } = props;
  const { works, currentSelectedWork } = Works;
  return (
    <ul className="list-group m-2 shadow-lg p-3 mb-5 bg-white rounded">
      {works.map((w) => (
        <li
          key={w._id}
          onClick={() => onWorkClick(w)}
          className={
            w === currentSelectedWork
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
        >
          {w.work}
        </li>
      ))}
    </ul>
  );
};

export default Filters;
