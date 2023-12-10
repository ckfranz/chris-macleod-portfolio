import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// import { Link } from "react-scroll";
import Feature from "../components/Feature";
import Gallery from "../components/Gallery";

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
              secure_url
              gatsbyImageData(placeholder: BLURRED)
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
        <Gallery data={data} />
      </div>
    </Layout>
  );
};

export default PetPortraits;
