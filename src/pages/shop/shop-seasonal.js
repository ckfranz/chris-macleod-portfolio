import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/Layout";
import ShopGallery from "../../components/ShopGallery";

const ShopSeasonal = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allCloudinaryMedia(
          filter: { public_id: { glob: "ChrisPortfolio/WebsiteWildlife/*" } }
        ) {
          edges {
            node {
              secure_url
              created_at
              # Thumbnail for grids (fast & small)
              gatsbyImageDataThumb: gatsbyImageData(
                placeholder: BLURRED
                transformations: ["f_auto,q_60,w_480,c_limit"]
              )

              # Large for preview/lightbox (crispy but still reasonable)
              gatsbyImageDataLarge: gatsbyImageData(
                placeholder: BLURRED
                transformations: ["f_auto,q_85,w_2000,c_limit"]
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
      <div className="shop-page">
        <div className="shop-header">
          <h1>Seasonal</h1>
          <p>
            A rotating selection of seasonal pieces and prints, available for a
            limited time. Check back regularly for new offerings.
          </p>
        </div>
        <ShopGallery data={data} />
      </div>
    </Layout>
  );
};

export default ShopSeasonal;
