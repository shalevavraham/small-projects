import React, { useState } from "react";
import TreeView from "./index";
import { FaPlus, FaMinus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCuttentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCuttentLabel) => {
    setDisplayCurrentChildren({
      ...displayCuttentChildren,
      [getCuttentLabel]: !displayCuttentChildren[getCuttentLabel],
    });
  };

  console.log(displayCuttentChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCuttentChildren[item.label] ? (
              <FaMinus color="#fff" size={20} />
            ) : (
              <FaPlus color="#fff" size={20} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCuttentChildren[item.label] ? (
        <TreeView list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
