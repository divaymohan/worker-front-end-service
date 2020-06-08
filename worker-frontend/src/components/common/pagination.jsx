import React from "react";

const Pagination = (props) => {
  return (
    <nav aria-label="Page Navigation">
      <ul className="pagination">
        <li className="page-item active">
          <a className="page-link ">1</a>
        </li>
        <li className="page-item">
          <a className="page-link ">2</a>
        </li>
        <li className="page-item">
          <a className="page-link">3</a>
        </li>
        <li className="page-item">
          <a className="page-link">4</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
