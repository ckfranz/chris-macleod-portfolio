// Step 1: Import React
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import Slideshow from "../components/Slideshow";

import "./index.css";
import "./wildlife.css";

// Step 2: Define your component
const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allCloudinaryMedia(
          filter: { public_id: { glob: "ChrisPortfolio/WebsiteWildlife/*" } }
        ) {
          edges {
            node {
              secure_url
              gatsbyImageData(placeholder: BLURRED)
              context {
                custom {
                  Medium
                  Size
                  Status
                  Year
                  caption
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <div>
        {/* <Slideshow /> */}
        <section className="section" id="gallery-1">
          {/* <h2 className="header">Wildlife Collection</h2> */}
          <Gallery data={data} />
        </section>
      </div>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
