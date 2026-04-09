import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/Layout";

import ShopGallery from "../../components/ShopGallery";

const ShopPrints = () => {
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
          <h1>Prints</h1>
          <p>
            High-quality signed prints of wildlife pieces are available on
            durable, acid-free, cold-pressed paper. These stunning reproductions
            come at a significantly reduced price from the originals.
          </p>
          <ul className="prints-price-list">
            <li>
              <span className="prints-size">5x7"</span>
              <span className="prints-price">$50.00</span>
            </li>
            <li>
              <span className="prints-size">8x10"</span>
              <span className="prints-price">$75.00</span>
            </li>
            <li>
              <span className="prints-size">11x14"</span>
              <span className="prints-price">$150.00</span>
            </li>
          </ul>
        </div>
        <ShopGallery data={data} showStatus={false} />
      </div>
    </Layout>
  );
};

export default ShopPrints;
