import * as React from "react";
import Layout from "../components/layout";
import { container, pageTitle, pinkTitle } from "./landing-2.module.css";

const LandingTwo = () => {
  return (
    <>
      <div className={`${container}`}>
        <h1 className={`${pageTitle}  ${pinkTitle}`}>
          Bollywood Dance Central
        </h1>
      </div>
    </>
  );
};

export default LandingTwo;
