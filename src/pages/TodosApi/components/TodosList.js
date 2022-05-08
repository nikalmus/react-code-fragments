import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import "./TodosList.css";

const TodosList = ({ data }) => {
  return (
    <>
      <div className="list">
        {data.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default TodosList;
