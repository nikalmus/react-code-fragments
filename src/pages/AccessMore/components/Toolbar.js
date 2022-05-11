import React from "react";
import buttons from "../images";
import "./Toolbar.css";
const { notificationsBtn, searchBtn, loginBtn } = buttons;

const Toolbar = ({ setLoginOpened }) => {
  return (
    <div className="topnav">
      <button
        onClick={() => alert("Notified!")}
        title="Notifications"
        aria-label="Notifications Label"
      >
        <img src={notificationsBtn} alt="" />
      </button>
      <button onClick={setLoginOpened} title="login">
        <img src={loginBtn} alt="" />
      </button>
      <a
        title="Search"
        href="https://duckduckgo.com/?q=search&kp=-1&kl=us-en"
        aria-label="Search Duckduckgo"
      >
        <img src={searchBtn} alt="" />
      </a>
    </div>
  );
};

export default Toolbar;
