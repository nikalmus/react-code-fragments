import React, { useState } from "react";

const List = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, value]);
    setValue("");
  };
  const handleDelete = (item) => {
    setList(list.filter((el) => el !== item));
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" />
      </form>
      {list.map((item, i) => (
        <li key={i} onClick={() => handleDelete(item)}>
          {item}
        </li>
      ))}
    </>
  );
};

export default List;
