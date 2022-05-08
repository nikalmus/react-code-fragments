import React, { useState } from "react";
import { useQuery } from "react-query";
import { getTodos } from "../api/requests";
import { parseLinks } from "../api/apiUtils";
import TodosList from "./TodosList";
import TodosGrid from "./TodosGrid";
import "./Todos.css";

const Todos = () => {
  const [page, setPage] = useState(1);
  const [layout, setLayout] = useState("list");
  const {
    data: response,
    isLoading,
    isFetching,
    isError,
  } = useQuery(["todos", page], () => getTodos(page));

  return (
    <>
      <button className="btn" onClick={() => setLayout("list")}>
        list
      </button>
      <button className="btn" onClick={() => setLayout("grid")}>
        grid
      </button>
      <div className="list">
        {isLoading ? (
          "Loading...."
        ) : isFetching ? (
          "Fetching..."
        ) : isError ? (
          "OH, NOES!!"
        ) : layout === "list" ? (
          <TodosList data={response.data} />
        ) : (
          <TodosGrid data={response.data} />
        )}
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

export default Todos;