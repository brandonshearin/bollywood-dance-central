import * as React from "react";

const CityText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <span
        style={{ fontWeight: 600, fontSize: "1.3rem", color: "var(--pink)" }}
      >
        {text}
      </span>
      <div
        style={{
          boxSizing: "border-box",
          margin: "0px",
          minWidth: "0px",
          padding: "11px",
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
            backgroundColor: "var(--pink)",
          }}
        ></div>
      </div>
    </>
  );
};

export default CityText;
