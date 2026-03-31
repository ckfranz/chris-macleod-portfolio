import React, { useMemo } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Gallery from "../../components/Gallery";
import Layout from "../../components/Layout";

const WatercolourCollection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allCloudinaryMedia(
          filter: { public_id: { glob: "ChrisPortfolio/WebsiteWildlife/*" } }
        ) {
          edges {
            node {
              public_id
              secure_url
              created_at
              gatsbyImageDataThumb: gatsbyImageData(
                placeholder: BLURRED
                transformations: ["f_auto", "q_auto", "w_400", "c_limit"]
              )
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

  const filteredData = useMemo(() => ({
    allCloudinaryMedia: {
      edges: data.allCloudinaryMedia.edges.filter((edge) => {
        const medium = edge.node.context?.custom?.Medium;
        return medium === "Watercolour" || medium === "Watercolour and Ink";
      }),
    },
  }), [data]);

  return (
    <Layout>
      <div>
        <section className="section">
          <Gallery data={filteredData} title="Watercolour" />
        </section>
      </div>
    </Layout>
  );
};

export default WatercolourCollection;
