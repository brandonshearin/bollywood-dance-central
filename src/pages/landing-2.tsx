import * as React from "react";
import {
  container,
  pageTitle,
  pinkTitle,
  sectionTwo,
  sectionTwoHeader,
  missionInfoSection,
  missionMediaSection,
  sectionTwoParagraph,
  logo,
} from "./landing-2.module.css";

import googleLogo from "../assets/logos/google-white.png";
import metaLogo from "../assets/logos/meta-white.png";
import youtubeLogo from "../assets/logos/youtube-2.png";
import aflacLogo from "../assets/logos/aflac-2.png";
import creditKarmaLogo from "../assets/logos/credit-karma-white.png";
import indeedLogo from "../assets/logos/indeed-white.webp";
import jpMorganLogo from "../assets/logos/jp-morgan-white.png";
import linkedInLogo from "../assets/logos/linked-in-2.png";
import nbaLogo from "../assets/logos/nba-white.png";
import nbcLogo from "../assets/logos/nbc-white.png";

import pegasusLogo from "../assets/logos/pegasus-ventures-white.webp";
import pernodLogo from "../assets/logos/pernod-ricard-white.png";
import sonomaLogo from "../assets/logos/sonoma-2.png";
import thermoLogo from "../assets/logos/thermo-fisher-scientific-white.png";

const LandingTwo = () => {
  return (
    <>
      <div className={`${container}`}>
        <h1 className={`${pageTitle}  ${pinkTitle}`}>
          Bollywood Dance Central
        </h1>
      </div>
      <div className={sectionTwo}>
        <div className={missionInfoSection}>
          <h2 className={sectionTwoHeader}>
            Hi, we're Bollywood Dance Central!
          </h2>
          <p className={sectionTwoParagraph}>
            Our goal is to instill discipline within Bollywood dance and
            encourage our students to commit to their craft. Becoming a GREAT
            dancer takes consistency, time, and commitment. As an academy, we
            truly challenge every single student to go above and beyond. Our
            goal is to bring a higher level of dancing to communities across the
            United States. We are currently in 5 cities and 2 states. Our BDC
            family is only as strong as it is with our dedicated parents,
            instructors, and managers
          </p>
        </div>
        <div className={missionMediaSection}>
          <img src={googleLogo} className={logo} />
          <img src={metaLogo} className={logo} />
          <img src={youtubeLogo} className={logo} />
          <img src={aflacLogo} className={logo} />
          <img src={indeedLogo} className={logo} />
          <img src={creditKarmaLogo} className={logo} />
          <img src={jpMorganLogo} className={logo} />
          <img src={linkedInLogo} className={logo} />
          <img src={nbaLogo} className={logo} />
          <img src={nbcLogo} className={logo} />

          <img src={pegasusLogo} className={logo} />
          <img src={pernodLogo} className={logo} />
          <img src={sonomaLogo} className={logo} />
          <img src={thermoLogo} className={logo} />
        </div>
      </div>
    </>
  );
};

export default LandingTwo;
