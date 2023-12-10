import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Slideshow from "../components/Slideshow";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";

import "./wildlife.css";

const WildlifeCollection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allCloudinaryMedia(
          filter: {
            public_id: { glob: "ChrisPortfolio/WebsitePastelStudies/*" }
          }
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
          {/* <h2 className="header">Pastel Study Collection</h2> */}
          <Gallery data={data} />
        </section>
      </div>
    </Layout>
  );
};

export default WildlifeCollection;
