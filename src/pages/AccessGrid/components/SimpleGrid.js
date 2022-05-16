import React, { useState } from "react";
import "./SimpleGrid.css";
import Link from "./Link";
import links from "../Resources";
const SimpleGrid = () => {
  const [showResources, setShowResources] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShowResources((prev) => !prev)}>
        {showResources ? "hide resources" : "show resources"}
      </button>
      <div className="container">
        {showResources &&
          links.map((item) => <Link url={item.url} title={item.title} />)}
      </div>
    </>
  );
};

export default SimpleGrid;
