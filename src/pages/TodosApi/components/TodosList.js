import React from "react";
import ListItem from "./ListItem";
import "./TodosList.css";

const TodosList = ({ data }) => {
  return (
    <>
      <div className="list">
        {data.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default TodosList;
