import React, { useState } from "react";

const Todo = ({ item }) => {
  return (
    <>
      <div className="item">{item.title}</div>
    </>
  );
};
export default Todo;
