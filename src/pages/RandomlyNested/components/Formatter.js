import React from "react";

const Formatter = ({ obj }) => {
  return (
    <>
      {Object.entries(obj).map(([key, value], idx) => {
        if (typeof value === "object") {
          return (
            <>
              <p>{`${key}: `}</p>
              <div style={{ paddingLeft: 30 }}>
                <Formatter obj={value} />
              </div>
            </>
          );
        } else {
          return <p>{`${key}:  ${value}`}</p>;
        }
      })}
    </>
  );
};

export default Formatter;
