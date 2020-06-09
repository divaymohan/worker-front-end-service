import React from "react";
const SortFilter = (props) => {
  const { items, path, onSelectSort, sortValue, sortpath } = props;
  console.log(sortValue);
  return (
    <ul className="list-group mt-2 mb-4">
      {items.map((item) => (
        <li
          onClick={() => onSelectSort(path, item)}
          key={item}
          className={
            sortValue === item && path === sortpath
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
        >
          <h6>
            <small>{item}</small>
          </h6>
        </li>
      ))}
    </ul>
  );
};

export default SortFilter;
