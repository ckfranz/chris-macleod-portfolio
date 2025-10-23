import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Slideshow from "../components/Slideshow";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";

import "./weekly-sketches.css";

const WeeklySketchesCollection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allCloudinaryMedia(
          filter: {
            public_id: { glob: "ChrisPortfolio/WebsiteWeeklySketches/*" }
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
          <Gallery data={data} />
        </section>
      </div>
    </Layout>
  );
};

export default WeeklySketchesCollection;
