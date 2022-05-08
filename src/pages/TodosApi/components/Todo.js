import React, { useState } from "react";

const Todo = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="item">{item.title}</div>
      <div
        className="expand-collapse"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? "-" : "+"}
      </div>
      <div className="details">
        {expanded
          ? Object.entries(item).map(([key, value]) => {
              return key !== "title" ? (
                <p key={key}>{`${key}:${value}`}</p>
              ) : (
                ""
              );
            })
          : ""}
      </div>
    </>
  );
};
export default Todo;
