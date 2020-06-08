import React from "react";

const Filters = (props) => {
  const { onHandleClick, Works } = props;
  const { works, currentSelectedWork } = Works;
  return (
    <ul className="list-group m-2">
      {works.map((w) => (
        <li
          onClick={() => onHandleClick(w)}
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
