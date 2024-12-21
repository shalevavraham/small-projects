import React from "react";
import "./style.css";
import MenuItem from "./menu-item";

const TreeView = ({ list }) => {
  return (
    <div className="tree-view-container">
      <ul className="menu-list-container">
        {list && list.length
          ? list.map((listItem) => <MenuItem item={listItem} />)
          : null}
      </ul>
    </div>
  );
};

export default TreeView;
