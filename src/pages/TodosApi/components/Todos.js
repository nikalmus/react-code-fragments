import React, { useState } from "react";
import { useQuery } from "react-query";
import { getTodos } from "../api/requests";
import { parseLinks } from "../api/apiUtils";
import TodosList from "./TodosList";
import TodosGrid from "./TodosGrid";
import TodosFlexbox from "./TodosFlexbox";
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
      <button
        className="btn"
        onClick={() => setLayout("list")}
        disabled={layout === "list"}
      >
        list
      </button>
      <button
        className="btn"
        onClick={() => setLayout("grid")}
        disabled={layout === "grid"}
      >
        grid
      </button>
      <button
        className="btn"
        onClick={() => setLayout("flexbox")}
        disabled={layout === "flexbox"}
      >
        flexbox
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
        ) : layout === "grid" ? (
          <TodosGrid data={response.data} />
        ) : layout === "flexbox" ? (
          <TodosFlexbox data={response.data} />
        ) : (
          ""
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
