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
        <div className="about-container">
          <div className="about-img-container">
            {profileImage ? (
              <GatsbyImage
                image={profileImage}
                alt="Chris Macleod portrait"
                className="about-img"
              />
            ) : (
              <div className="about-img-placeholder">Photo</div>
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
            <div className="collab-wrapper">
              <h2 className="collab-title">Collaborations</h2>

              <section className="collab-section">
                <h3 className="collab-heading">Conservation Organizations</h3>
                <ul className="collab-list">
                  <li>
                    <span className="collab-project">Symbolic Adoptions</span>
                    <span className="collab-partner">with Watersheds Canada</span>
                  </li>
                  <li>
                    <span className="collab-project">Giving Tuesday Print Runs</span>
                    <span className="collab-partner">with Pollinator Partnership Canada</span>
                  </li>
                </ul>
              </section>

              <section className="collab-section">
                <h3 className="collab-heading">Scientific Illustrations</h3>
                <ul className="collab-list">
                  <li>
                    <a
                      href="https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003413"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="collab-project collab-link"
                    >
                      Oxygen supersaturation has negligible effects on warming
                      tolerance across diverse aquatic ectotherms
                    </a>
                    <span className="collab-partner">with Dr. Graham Raby</span>
                  </li>
                  <li>
                    <span className="collab-project">
                      Exploring Site-Specific Management of Plant Growth
                      Regulator in Wheat
                    </span>
                    <span className="collab-partner">with PhD student Caleb Neimeyer</span>
                  </li>
                </ul>
              </section>

              <section className="collab-section">
                <h3 className="collab-heading">Books</h3>
                <ul className="collab-list">
                  <li>
                    <a
                      href="https://www.amazon.com/Sadie-Moose-Loose-Mignon-Morse/dp/B0F19GXFS8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="collab-project collab-link"
                    >
                      Sadie and Moose on the Loose
                    </a>
                    <span className="collab-partner">with Mignon Morse</span>
                  </li>
                  <li>
                    <span className="collab-project">The Whale that Wasn't</span>
                    <span className="collab-partner">with Stephen Saint</span>
                  </li>
                  <li>
                    <span className="collab-project">Lelantus Protocol</span>
                    <span className="collab-partner">with Stephen Saint</span>
                  </li>
                </ul>
              </section>
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
