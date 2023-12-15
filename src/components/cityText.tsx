import * as React from "react";

const CityText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <span>{text}</span>
      <div
        style={{
          boxSizing: "border-box",
          margin: "0px",
          minWidth: "0px",
          padding: "8px",
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            margin: "0px",
            minWidth: "0px",
            width: "4px",
            height: "4px",
            borderRadius: "2px",
            backgroundColor: "black",
          }}
        ></div>
      </div>
    </>
  );
};

export default CityText;
