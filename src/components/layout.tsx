import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  typeWritten,
  typeContainer,
  head,
  zigZag,
} from "./layout.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ pageTitle, children }: any) => {
  const data = useStaticQuery(query);

  return (
    <div className={container}>
      <div className={head}>
        <header className={typeContainer}>
          <div className={`${typeWritten} ${siteTitle}`}>
            {data.site.siteMetadata.title}
          </div>
        </header>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={`${navLinkText} ${zigZag}`}>
                Enroll
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/announcements" className={`${navLinkText} ${zigZag}`}>
                Announcements
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/contact" className={`${navLinkText} ${zigZag}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
