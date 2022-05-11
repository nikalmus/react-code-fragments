import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./LoginDialog.css";

const LoginDialog = ({ setLoginOpened }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginOpened(false);
  };
  return createPortal(
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      aria-labelledby="form"
    >
      <form onSubmit={handleSubmit} id="form">
        <label htmlFor="password">Secret: </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          aria-describedby="help privacy"
        />
        <input type="submit" value="Login" disabled={value.length < 4} />
      </form>
      <div className="modal-footer">
        <div id="help">Password must be at least 4 chars long.</div>
        <div id="privacy">Keep password private.</div>
      </div>
    </div>,
    document.getElementById("dialog")
  );
};

export default LoginDialog;
