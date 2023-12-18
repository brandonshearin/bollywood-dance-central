import * as React from "react";
import Layout from "../components/layout";
import Video from "../assets/videos/video.mp4";
import { videoStyles, videoContainer, pageTitle } from "./landing-1.module.css";

const LandingOne = () => {
  return (
    <>
      <div className={videoContainer}>
        <video autoPlay loop muted className={videoStyles}>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <h1 className={pageTitle}>Bollywood Dance Central</h1>
    </>
  );
};

export default LandingOne;
