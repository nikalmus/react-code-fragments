import React, { useContext, useEffect, useCallback } from "react";
import AppContext from "./AppContext";

const OffAndOn = () => {
  const ctx = useContext(AppContext);
  const { userState, setUserState } = ctx;

  useEffect(() => {
    const assignNewValues = () => {
      const newUserState = {};
      Object.keys(userState).map(
        (key) => (newUserState[key] = Math.random() < 0.5)
      );
      setUserState({ ...userState, ...newUserState });
    };

    const timer = setTimeout(assignNewValues, 3000);
    return () => clearTimeout(timer);
  }, [userState, setUserState]);

  return (
    <div>
      {Object.entries(userState).map(([key, value]) => (
        <li key={key}>
          {key} {value ? "\uD83D\uDFE2" : "\uD83D\uDD34"}
        </li>
      ))}
    </div>
  );
};
export default OffAndOn;
