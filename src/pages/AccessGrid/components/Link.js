import React, { useState, useEffect } from "react";
import "./Link.css";

async function digestMessage(title) {
  const msgUint8 = new TextEncoder().encode(title); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the title
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}

const Link = ({ url, title }) => {
  const [id, setId] = useState("");
  useEffect(() => {
    digestMessage(title).then((hex) => setId(hex));
  }, [title]);
  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
      <p className="hash" title={id}>
        {id}
      </p>
    </div>
  );
};
export default Link;
