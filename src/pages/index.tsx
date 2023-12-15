// Step 1: Import React
import { Link, PageProps, graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import {
  GatsbyImage,
  GatsbyImageProps,
  StaticImage,
  getImage,
  getImageData,
} from "gatsby-plugin-image";
import Seo from "../components/seo";

// Step 2: Define your component
const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const images = data.allFile.nodes.map((node) => {
    return {
      imageName: node.name,
      imageData: getImage(node.childImageSharp),
    };
  });

  return (
    <main>
      <Layout pageTitle={"Welcome to my Gatsby site!"}>
        <GatsbyImage image={images[0].imageData!} alt={images[0].imageName} />
      </Layout>
    </main>
  );
};

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home" />;

// Step 3: Export your component
export default IndexPage;
