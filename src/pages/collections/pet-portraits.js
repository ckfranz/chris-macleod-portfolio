import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Slideshow from "../../components/Slideshow";
import Gallery from "../../components/Gallery";
import Layout from "../../components/Layout";

const PetPortraits = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allCloudinaryMedia(
          filter: {
            public_id: { glob: "ChrisPortfolio/WebsitePetPortraits/*" }
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
                  Favourite
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
        {/* <h2 className="header">Pet Portraits</h2> */}
        {/* <Feature>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            obcaecati maiores laudantium neque quisquam placeat, beatae laborum,
            nemo, non sequi deserunt enim iure praesentium reiciendis quas
            reprehenderit blanditiis totam consectetur.
          </span>
        </Feature> */}
        <Gallery data={data} title="Pet Portraits" />
      </div>
    </Layout>
  );
};

export default PetPortraits;
