import React, { useEffect, useReducer } from "react";
import asyncReducer from "../reducers/asyncReducer";

function useAsync(asyncCallback) {
  const [state, dispatch] = useReducer(asyncReducer, {
    status: "pending",
    data: null,
    error: null,
  });
  useEffect(() => {
    const promise = asyncCallback();
    if (!promise) {
      return;
    }
    dispatch({ type: "pending" });
    promise.then(
      (data) => {
        dispatch({ type: "resolved", data });
      },
      (error) => {
        dispatch({ type: "rejected", error });
      }
    );
  }, [asyncCallback]);
  return state;
}

export default useAsync;
