import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/Layout";

import ShopGallery from "../../components/ShopGallery";

const ShopOriginals = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allCloudinaryMedia(
          filter: {
            public_id: {
              regex: "/ChrisPortfolio/Website(Wildlife|PastelStudies)//"
            }
            context: { custom: { Status: { eq: "AVAILABLE" } } }
          }
        ) {
          edges {
            node {
              secure_url
              created_at

              # Thumbnail for grids (fast & small)
              gatsbyImageDataThumb: gatsbyImageData(
                placeholder: BLURRED
                transformations: ["f_auto,q_60,w_480,c_limit"] # ~480px wide, lighter
              )

              # Large for preview/lightbox (crispy but still reasonable)
              gatsbyImageDataLarge: gatsbyImageData(
                placeholder: BLURRED
                transformations: ["f_auto,q_85,w_2000,c_limit"] # up to ~2000px
              )

              context {
                custom {
                  Medium
                  Size
                  Status
                  Year
                  caption
                  Testimonial
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
      <div className="shop-page">
        <div className="shop-header">
          <h1>Available Originals</h1>
          <p>
            Please browse through my available original works. All works have
            size and medium in the description, and come with a certificate of
            authenticity.
          </p>
        </div>
        <ShopGallery data={data} />
      </div>
    </Layout>
  );
};

export default ShopOriginals;
