import React, { Component } from "react";
import SortFilter from "../common/sortFilter";
class RightBody extends Component {
  render() {
    const { items, paths, onSelectSort, sortValue, sortpath } = this.props;
    return (
      <div className="m-0">
        {paths.map((path) => (
          <h5 key={path}>
            <span className="badge badge-pill badge-dark m-1">
              Sort By {path === "pricePerDay" ? "Price" : "Rating"}
            </span>
            <SortFilter
              items={items}
              path={path}
              onSelectSort={onSelectSort}
              sortValue={sortValue}
              sortpath={sortpath}
            />
          </h5>
        ))}
      </div>
    );
  }
}

export default RightBody;
