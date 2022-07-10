import React, { useState, useCallback } from "react";
import Dropdown from "./Dropdown";
import { getData } from "../api/requests";
import useAsync from "./useAsync";

const Paintings = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const asyncCallback = useCallback(() => getData(), []);
  const state = useAsync(asyncCallback);

  const { data, status, error } = state;

  const handleSelection = (e) => {
    const found = data?.filter((pic) => pic.painter === e.currentTarget.value);
    if (found) {
      setSelectedOption(found[0]);
    }
  };

  const renderPage = () => {
    switch (status) {
      case "pending":
        return <p>Loading...</p>;
      case "rejected":
        return <p>{`OH NOES! ${error}`}</p>;
      case "resolved":
        return (
          <>
            {!selectedOption && <p>Make a selection</p>}
            <Dropdown
              onOptionChange={handleSelection}
              options={data?.map((p) => p.painter)}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {renderPage()}
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
