import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Slideshow from "../../components/Slideshow";
import Gallery from "../../components/Gallery";
import Layout from "../../components/Layout";

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
              public_id
              secure_url
              created_at
              # Thumbnail for grids (fast & small)
              gatsbyImageDataThumb: gatsbyImageData(
                placeholder: BLURRED
                transformations: ["f_auto", "q_auto", "w_400", "c_limit"]
              )

              # Large for preview/lightbox - more aggressive optimization
              gatsbyImageDataLarge: gatsbyImageData(
                placeholder: BLURRED
                transformations: ["f_auto", "q_auto:good", "w_1400", "c_limit"]
              )
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
        <section className="section">
          <Gallery data={data} title="Studies" />
        </section>
      </div>
    </Layout>
  );
};

export default WildlifeCollection;
