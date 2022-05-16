import React, { useState } from "react";
import SomeContainer from "./SomeContainer";
import "./SeriousGrid.css";

const SeriousGrid = () => {
  const [layout, setLayout] = useState("");
  const options = ["grid", "flex"];
  return (
    <div class="wrapper">
      <div class="header">{`${layout} layout:`}</div>
      <div class="sidenav">
        {options.map((opt) => (
          <button className="btn" onClick={() => setLayout(opt)}>
            {opt}
          </button>
        ))}
      </div>
      <div class="content">
        {layout === "grid" ? (
          <SomeContainer cssClass="grid" />
        ) : layout === "flex" ? (
          <SomeContainer cssClass="flex" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SeriousGrid;
