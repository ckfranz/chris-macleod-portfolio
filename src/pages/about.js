import React from "react";
import Layout from "../components/Layout";
import "./about.css";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const About = ({ data }) => {
  const profileNode = data.aboutImages.nodes[0];
  const profileImage = profileNode ? getImage(profileNode) : null;

  return (
    <Layout>
      <div className="page-container">
        {/* <Testimonials images={testimonialsImages} /> */}
        <div className="about-container">
          <div className="about-img-container">
            <GatsbyImage
              image={profileImage}
              alt="Chris Macleod portrait"
              className="about-img"
            />
          </div>
          <div className="bio">
            <p className="contact-text">
              Chris Macleod, born in 2001, is a Canadian wildlife artist based
              primarily in Guelph, ON. Chris creates lifelike works of art in
              the style of realism, primarily using chalk pastel or watercolour,
              and occasionally using acrylic paint paired with coloured pencils.
              Chris is very passionate about nature and wildlife, as
              demonstrated through a childhood spent outdoors and a Bachelor of
              Science degree with a major in biological science. This passion is
              where Chris draws much of his artistic inspiration from and is
              reflected in the detailed depictions of wildlife that he creates.
            </p>
            <p className="contact-text">
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
    aboutImages: allCloudinaryMedia(
      filter: {
        public_id: { glob: "ChrisPortfolio/About/*" }
        context: { custom: { Role: { eq: "profile" } } }
      }
    ) {
      nodes {
        public_id
        gatsbyImageData(
          placeholder: BLURRED
          transformations: ["f_auto,q_85,c_limit,w_800"]
        )
        context {
          custom {
            Role
          }
        }
      }
    }
  }
`;
