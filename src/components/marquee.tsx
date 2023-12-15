import * as React from "react";
import {
  marqueeContainer,
  marquee,
  scrollLeft,
  scrollRight,
} from "./marque.module.css";

const Marquee: React.FC<{
  scrollDirection: "left" | "right";
  children: React.ReactNode;
}> = ({ children, scrollDirection }) => {
  return (
    <div className={marqueeContainer} style={{ marginBottom: "1rem" }}>
      <div
        className={`${marquee} ${
          scrollDirection === "left" ? scrollLeft : scrollRight
        }`}
      >
        {children}
      </div>

      <div
        className={`${marquee} ${
          scrollDirection === "left" ? scrollLeft : scrollRight
        }`}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;
