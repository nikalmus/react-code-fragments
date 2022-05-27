import React, { useContext, useEffect } from "react";
import AppContext from "./AppContext";

const OffAndOn = () => {
  const { userState, setUserState } = useContext(AppContext);

  useEffect(() => {
    const assignNewValues = () => {
      const newUserState = {};
      Object.keys(userState).map(
        (key) => (newUserState[key] = Math.random() < 0.5)
      );
      setUserState(newUserState);
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
