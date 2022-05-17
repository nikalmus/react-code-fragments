import React, { useState } from "react";
import AppContext from "./AppContext";
import OffAndOn from "./OffAndOn";

const Users = () => {
  const [userState, setUserState] = useState({
    Švejk: true,
    Palivec: true,
    Baloun: true,
    "Oberleutnant Lukáš": true,
    "Colonel Friedrich Kraus von Zillergut": false,
    "2nd Lieutenant Dub": true,
  });

  const ctxValues = {
    userState,
    setUserState,
  };

  return (
    <AppContext.Provider value={ctxValues}>
      <OffAndOn />
    </AppContext.Provider>
  );
};

export default Users;
