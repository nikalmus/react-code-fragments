import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { API_URL, PARAM_NAME, PARAM_VALUE } from "../Constants";
import "./Search.css";

const Search = () => {
  const { data, isLoading, error } = useFetch(API_URL, PARAM_NAME, PARAM_VALUE);
  const [filteredResults, setFilteredResults] = useState();
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    const parseInitialData = () => {
      //remove non-latin characters and sort alphabetically
      const results = data?.results.filter((item) =>
        item.name.first.match(/[a-z]/i)
      );
      return results?.sort((a, b) => a.name.first.localeCompare(b.name.first));
    };
    const filterData = () => {
      return parsedData.filter((item) =>
        item.name.first.startsWith(inputValue)
      );
    };
    const parsedData = parseInitialData();
    const filteredData = inputValue ? filterData(parsedData) : parsedData;
    console.log("filteredData", filteredData);
    setFilteredResults(filteredData);
  }, [data, inputValue]);

  return (
    <div>
      <h3>Debounce & Search</h3>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : filteredResults ? (
        <ul className="no-bullet">
          {filteredResults.map((item, i) => (
            <li key={item.email}>{item.name.first}</li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
/*
https://medium.com/@justin.sherman/react-coding-interview-challenge-9-dc20873e0ce5
https://blog.logrocket.com/how-and-when-to-debounce-or-throttle-in-react/
*/
