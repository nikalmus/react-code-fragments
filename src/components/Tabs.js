import React, { useState } from "react";
import Formatter from "../pages/RandomlyNested/components/Formatter";
import Blank from "../pages/Blank/components/Blank";
import List from "../pages/List/components/List";
import Todos from "../pages/TodosApi/components/Todos";
import { nonsensicalWordsObj } from "../pages/RandomlyNested/Constants";
import LayoutPan from "../pages/AccessGrid/components/LayoutPan";
import Access from "../pages/AccessMore/components/Access";
import Users from "../pages/OfflineOnlineContext/components/Users";
import Quiz from "../pages/Quiz/components/Quiz";
import Gallery from "../pages/PreloadImg/components/Gallery";
import Search from "../pages/Search/components/Search";
import Game from "../pages/TTT/components/Game";
import Paintings from "../pages/PaintingSearch/components/Paintings";
import DragAndDrop from "../pages/DnD/DragAndDrop";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Blank");

  const pages = [
    "Formatter",
    "List",
    "Todos Api",
    "Layout Pan",
    "Access",
    "OfflineOnline",
    "Quiz",
    "Gallery",
    "Search",
    "TTT",
    "Painting Search",
    "DnD",
    "Blank",
  ];
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
            case "Layout Pan":
              return <LayoutPan />;
            case "Access":
              return <Access />;
            case "OfflineOnline":
              return <Users />;
            case "Quiz":
              return <Quiz />;
            case "Gallery":
              return <Gallery />;
            case "Search":
              return <Search />;
            case "TTT":
              return <Game />;
            case "Painting Search":
              return <Paintings />;
            case "DnD":
              return <DragAndDrop />;
            default:
              return <Blank />;
          }
        })()}
      </div>
    </div>
  );
};
export default Tabs;
