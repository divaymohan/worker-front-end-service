import React, { Component } from "react";
import SortFilter from "../common/sortFilter";
class RightBody extends Component {
  render() {
    const { items, paths, onSelectSort } = this.props;
    return (
      <div className="m-1">
        {paths.map((path) => (
          <h5 key={path}>
            <span className="badge badge-pill badge-dark m-2">
              Sort By {path}
            </span>
            <SortFilter items={items} path={path} onSelectSort={onSelectSort} />
          </h5>
        ))}
      </div>
    );
  }
}

export default RightBody;
