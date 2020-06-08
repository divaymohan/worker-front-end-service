import React from "react";

const Filters = (props) => {
  const { onHandleClick, AllWorks } = props;
  return (
    <ul className="list-group m-2">
      {AllWorks.map((w) => (
        <li onClick={() => onHandleClick(w)} className="list-group-item">
          {w.work}
        </li>
      ))}
    </ul>
  );
};

export default Filters;
