import React, { useCallback, useReducer } from "react";
import asyncReducer from "../reducers/asyncReducer";

function useAsync() {
  const [state, dispatch] = useReducer(asyncReducer, {
    status: "pending",
    data: null,
    error: null,
  });
  const run = useCallback((promise) => {
    dispatch({ type: "pending" });
    promise.then(
      (data) => {
        dispatch({ type: "resolved", data });
      },
      (error) => {
        dispatch({ type: "rejected", error });
      }
    );
  }, []);

  return { ...state, run };
}

export default useAsync;
