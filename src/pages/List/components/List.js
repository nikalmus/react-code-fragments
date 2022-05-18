import React, { useState, useEffect, useRef } from "react";
import ItemModal from "./ItemModal";
import "./List.css";

const List = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [itemOpen, setItemOpen] = useState(null);

  const modalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, value]);
    setValue("");
  };
  const handleDelete = (item) => {
    setList(list.filter((el) => el !== item));
  };

  const openModal = (item) => {
    setItemOpen(item);
  };

  useEffect(() => {
    const onClickOutsideModal = (e) => {
      itemOpen &&
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        setItemOpen(null);
    };
    document.addEventListener("mousedown", onClickOutsideModal);
    return () => document.removeEventListener("mousedown", onClickOutsideModal);
  }, [itemOpen]);

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" disabled={!value} />
      </form>
      {list.map((item, i) => (
        <div className="box" key={i}>
          <div className="text" onClick={() => openModal(item)}>
            {item}
          </div>
          <button className="btn" onClick={() => handleDelete(item)}>
            x
          </button>
        </div>
      ))}
      {itemOpen && (
        <ItemModal item={itemOpen} setOpen={setItemOpen} modalRef={modalRef} />
      )}
    </>
  );
};

export default List;
