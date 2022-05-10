import React, { useState } from "react";
import Formatter from "../pages/RandomlyNested/components/Formatter";
import Blank from "../pages/Blank/components/Blank";
import List from "../pages/List/components/List";
import Todos from "../pages/TodosApi/components/Todos";
import { nonsensicalWordsObj } from "../pages/RandomlyNested/Constants";
import Grid from "../pages/A11yGrid/components/Grid";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Blank");

  const pages = ["Formatter", "List", "Todos Api", "Grid", "Blank"];
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
              return <Todos />;
            case "Grid":
              return <Grid />;
            default:
              return <Blank />;
          }
        })()}
      </div>
    </div>
  );
};
export default Tabs;
