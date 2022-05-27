import React, { useState } from "react";
import Images from "./Images";
import "./Gallery.css";
import { paintings } from "../assets";

const Gallery = () => {
  const [grayStripe, setGrayStripe] = useState(0);
  return (
    <>
      <div className="stripe gray" style={{ width: grayStripe }}></div>
      <Images images={paintings} setGrayStripe={setGrayStripe} />
    </>
  );
};

export default Gallery;
