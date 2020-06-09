import React from "react";
const SortFilter = (props) => {
  const { items, path, onSelectSort } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item} className="list-group-item">
          <h6>
            <a>
              <small>{item}</small>
            </a>
          </h6>
        </li>
      ))}
    </ul>
  );
};

export default SortFilter;
