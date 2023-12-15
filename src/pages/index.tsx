// Step 1: Import React
import { Link, PageProps, graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import Marquee from "../components/marquee";
import CityText from "../components/cityText";

// Step 2: Define your component
const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const images = data.allFile.nodes.map((node) => {
    return {
      imageName: node.name,
      imageData: node.childImageSharp?.gatsbyImageData,
    };
  });

  return (
    <main>
      <Layout pageTitle={"Welcome to my Gatsby site!"}>
        <Marquee scrollDirection="left">
          {images.slice(0, 10).map((image) => {
            return (
              <GatsbyImage
                image={image.imageData!}
                alt={image.imageName}
                style={{ borderRadius: "10px" }}
              />
            );
          })}
        </Marquee>

        <Marquee scrollDirection="right">
          {images.slice(10, 20).map((image) => {
            return (
              <GatsbyImage
                image={image.imageData!}
                alt={image.imageName}
                style={{ borderRadius: "10px" }}
              />
            );
          })}
        </Marquee>

        <Marquee scrollDirection="left">
          <div style={{ display: "flex", gap: "1rem" }}>
            <CityText text="SAN FRANCISCO, CA" />
            <CityText text="LOS ANGELES, CA" />
            <CityText text="OAKLAND, CA" />
            <CityText text="HOUSTON, TX" />
            <CityText text="AUSTIN, TX" />
            <CityText text="SAN ANTONIO, TX" />

            <CityText text="SAN FRANCISCO, CA" />
            <CityText text="LOS ANGELES, CA" />
            <CityText text="OAKLAND, CA" />
            <CityText text="HOUSTON, TX" />
            <CityText text="AUSTIN, TX" />
            <CityText text="SAN ANTONIO, TX" />
          </div>
        </Marquee>
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
          gatsbyImageData(width: 400, height: 300, layout: FIXED)
        }
      }
    }
  }
`;

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home" />;

// Step 3: Export your component
export default IndexPage;
