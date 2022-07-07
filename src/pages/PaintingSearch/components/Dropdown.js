import React from "react";
import DropdownItem from "./DropdownItem";
import "./Dropdown.css";

const Dropdown = ({ onOptionChange, options }) => {
  return (
    <select onChange={onOptionChange}>
      <option value="" disabled selected hidden>
        Choose...
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          <DropdownItem option={option} />
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
