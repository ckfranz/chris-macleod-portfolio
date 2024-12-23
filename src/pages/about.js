import React from "react";

import Layout from "../components/Layout";

import "./about.css";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const About = ({ data }) => {
  const aboutImages = data.aboutImages.nodes;

  const profile = aboutImages.filter(
    (media) => media.context?.custom?.caption === "profile"
  );
  console.log(profile);

  return (
    <Layout>
      <div className="page-container">
        {/* <Testimonials images={testimonialsImages} /> */}
        <div>
          <div className="about-container">
            <div className="about-img-container">
              <GatsbyImage
                image={getImage(profile[0])}
                alt="img-name"
                className="about-img"
              />
            </div>
            <div className="bio">
              <p className="contact-text">
                Chris Macleod, born in 2001, is a Canadian wildlife artist based
                primarily in Guelph, ON. In the style of realism and
                impressionism, Chris creates lifelike works of art primarily
                using chalk pastel or watercolour, occasionally using acrylic
                paint paired with coloured pencils. Demonstrated through a
                childhood spent outdoors and a Bachelor of Science degree with a
                major in biology, Chris is passionate about nature and wildlife.
                This passion is where Chris draws much of his artistic
                inspiration from and is reflected in the detailed depictions of
                wildlife that he creates.
              </p>
              <p className="contact-text">
                Notably, Chris had the privilege of having his work critiqued by
                renowned wildlife artist Robert Bateman, who praised his talent
                and realistic portrayal. Chris continues to pursue his passion
                for wildlife art, seeking to capture the beauty and intricacies
                of the natural world in his work.
              </p>
            </div>
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
      filter: { public_id: { glob: "ChrisPortfolio/About/*" } }
    ) {
      nodes {
        public_id
        gatsbyImageData(placeholder: BLURRED)
        context {
          custom {
            caption
          }
        }
      }
    }
  }
`;
