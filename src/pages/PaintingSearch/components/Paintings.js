import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import { getPictures } from "../api/requests";

const Paintings = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [pictures, setPictures] = useState([]);

  const handleSelection = (e) => {
    const found = pictures?.filter(
      (pic) => pic.painter === e.currentTarget.value
    );
    if (found) {
      setSelectedOption(found[0]);
    }
  };

  useEffect(() => {
    const makeRequest = async () => {
      const pics = await getPictures();
      setPictures(pics);
    };
    makeRequest();
  }, []);

  return (
    <>
      <div>Las Meninas</div>
      {pictures && (
        <Dropdown
          onOptionChange={handleSelection}
          options={pictures?.map((p) => p.painter)}
        />
      )}
      {selectedOption && (
        <div>
          <img
            src={`${window.location.origin}/${selectedOption.pic}`}
            alt={`Las Meninas by ${selectedOption.painter}`}
          />
        </div>
      )}
    </>
  );
};

export default Paintings;
