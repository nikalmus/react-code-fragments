import React, { useEffect } from "react";
import "./DragAndDrop.css";
import Item from "./Item";

const items = [
  { id: 1, name: "Foo", color: "red" },
  { id: 2, name: "Bar", color: "blue" },
  { id: 3, name: "Fookabane", color: "orange" },
];

const DragAndDrop = () => {
  useEffect(() => {
    const dm = document.getElementById("dragme");
    dm.addEventListener("dragstart", onDragStart, false);
    const dz = document.getElementById("dropzone");
    dz.addEventListener("dragover", onDragOver, false);
    dz.addEventListener("drop", onDrop, false);
    return () => {
      dm.removeEventListener("dragstart", onDragStart, false);
      dz.removeEventListener("dragover", onDragOver, false);
      dz.removeEventListener("drop", onDrop, false);
    };
  }, []);

  const onDragOver = (e) => {
    e.preventDefault();
    return false;
  };

  const onDragStart = (event) => {
    const style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData(
      "foo",
      parseInt(style.getPropertyValue("left"), 10) -
        event.clientX +
        "," +
        (parseInt(style.getPropertyValue("top"), 10) - event.clientY)
    );
  };

  const onDrop = (event) => {
    const offset = event.dataTransfer.getData("foo").split(",");
    const dm = document.getElementById("dragme");
    dm.style.left = event.clientX + parseInt(offset[0], 10) + "px";
    dm.style.top = event.clientY + parseInt(offset[1], 10) + "px";
    event.preventDefault();
    return false;
  };

  return (
    <div className="area">
      <div className="dropzone" id="dropzone">
        <div id="dragme" draggable="true" className="draggable">
          drag me
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
