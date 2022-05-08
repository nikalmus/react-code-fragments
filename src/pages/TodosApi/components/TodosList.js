import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Todo from "./Todo";
import { getTodos } from "../api/requests";
import { parseLinks } from "../api/apiUtils";
import "./TodosList.css";

const TodosList = () => {
  const [page, setPage] = useState(1);
  const {
    data: response,
    isLoading,
    isFetching,
    isError,
  } = useQuery(["todos", page], () => getTodos(page));

  return (
    <>
      <div className="list">
        {isLoading
          ? "Loading...."
          : isFetching
          ? "Fetching..."
          : isError
          ? "OH, NOES!!"
          : response.data.map((item) => <Todo key={item.id} item={item} />)}
      </div>
      <div className="footer">
        <button
          className="btn"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={response && !parseLinks(response.headers.link).prev}
        >
          prev
        </button>
        <p>Page: {page}</p>
        <button
          className="btn"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={response && !parseLinks(response.headers.link).next}
        >
          next
        </button>
      </div>
    </>
  );
};

export default TodosList;
