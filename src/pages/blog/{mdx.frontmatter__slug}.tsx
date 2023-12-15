import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data, children, ...rest }: any) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {image ? (
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      ) : null}
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: any) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
