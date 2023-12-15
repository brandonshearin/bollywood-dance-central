// Step 1: Import React
import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </Layout>
    </main>
  );
};

// Step 3: Export your component
export default AboutPage;

export const Head = () => <Seo title="About Me" />;
