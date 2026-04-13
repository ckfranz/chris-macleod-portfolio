import React from "react";
import Layout from "../components/Layout";
import "./about.css";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const About = ({ data }) => {
  const profileA = getImage(data.profileA.nodes[0]);
  const profileB = getImage(data.profileB.nodes[0]);

  return (
    <Layout>
      <div className="page-container">
        <h1 className="about-page-title">About the Artist</h1>
        <div className="about-container">
          <div className="about-img-container">
            {profileA && (
              <GatsbyImage
                image={profileA}
                alt="Chris Macleod portrait"
                className="about-img about-img--desktop"
              />
            )}
            {profileB && (
              <GatsbyImage
                image={profileB}
                alt="Chris Macleod portrait"
                className="about-img about-img--mobile"
              />
            )}
          </div>
          <div className="bio">
            <p>
              Chris Macleod, born in 2001, is a Canadian wildlife artist based
              primarily in Guelph, Ontario. Chris creates lifelike works of art
              in the style of realism, primarily using chalk pastel or
              watercolour, and occasionally using acrylic paint paired with
              coloured pencils.
            </p>
            <p>
              Chris is deeply passionate about nature and wildlife, as
              demonstrated through a childhood spent outdoors and a Bachelor of
              Science degree with a major in biological science. This passion is
              where Chris draws much of his artistic inspiration from and is
              reflected in the detailed depictions of wildlife that he creates.
            </p>
            <p>
              Notably, Chris had the privilege of having his work critiqued by
              renowned wildlife artist Robert Bateman, who praised his talent
              and realistic portrayal. Chris continues to pursue his passion for
              wildlife art, seeking to capture the beauty and intricacies of the
              natural world in his work.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query {
    profileA: allCloudinaryMedia(
      filter: {
        public_id: { glob: "ChrisPortfolio/About/*" }
        context: { custom: { Role: { eq: "profile-a" } } }
      }
    ) {
      nodes {
        public_id
        gatsbyImageData(
          placeholder: BLURRED
          transformations: ["f_auto,q_85,c_limit,w_800"]
        )
      }
    }
    profileB: allCloudinaryMedia(
      filter: {
        public_id: { glob: "ChrisPortfolio/About/*" }
        context: { custom: { Role: { eq: "profile-b" } } }
      }
    ) {
      nodes {
        public_id
        gatsbyImageData(
          placeholder: BLURRED
          transformations: ["f_auto,q_85,c_limit,w_800"]
        )
      }
    }
  }
`;
