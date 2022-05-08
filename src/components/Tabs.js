import React, { useState } from "react";
import Formatter from "../pages/RandomlyNested/components/Formatter";
import Blank from "../pages/Blank/components/Blank";
import List from "../pages/List/components/List";
import TodosList from "../pages/TodosApi/components/TodosList";
import { nonsensicalWordsObj } from "../pages/RandomlyNested/Constants";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Blank");

  const pages = ["Formatter", "List", "Todos Api", "Blank"];
  return (
    <div className="tabs">
      <ul className="nav">
        {pages.map((page, i) => (
          <li
            key={i}
            className={activeTab === page ? "active" : ""}
            onClick={() => setActiveTab(page)}
          >
            {page}
          </li>
        ))}
      </ul>
      <div className="content">
        {(function () {
          switch (activeTab) {
            case "Formatter":
              return <Formatter obj={nonsensicalWordsObj} />;
            case "List":
              return <List />;
            case "Todos Api":
              return <TodosList />;
            default:
              return <Blank />;
          }
        })()}
      </div>
    </div>
  );
};
export default Tabs;
