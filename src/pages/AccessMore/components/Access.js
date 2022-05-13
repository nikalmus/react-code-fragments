import React, { useState } from "react";
import Toolbar from "./Toolbar";
import LoginDialog from "./LoginDialog";

const Access = () => {
  const [loginOpened, setLoginOpened] = useState(false);
  return (
    <>
      <Toolbar setLoginOpened={setLoginOpened} />
      {loginOpened && <LoginDialog setLoginOpened={setLoginOpened} />}
    </>
  );
};

export default Access;
