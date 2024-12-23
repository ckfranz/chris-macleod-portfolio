import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

import ModalSuccess from "../components/ModalSuccess";
import Commission from "../components/Commission";
import ToggleDropdown from "../UIComponents/ToggleDropdown";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Testimonials from "../components/Testimonials";

import "./commissions.css";
import Pricing from "./Pricing";

const Commissions = ({ data }) => {
  const testimonialsImages = data.testimonialsImages.edges;
  // console.log(data.commissionImages);

  const commissionMedia = data.commissionImages.nodes;

  const photo = commissionMedia.filter(
    (media) => media.context?.custom?.caption === "photo"
  );
  const process = commissionMedia.filter(
    (media) => media.context?.custom?.caption === "process"
  );
  const completed = commissionMedia.filter(
    (media) => media.context?.custom?.caption === "completed"
  );

  console.log(photo);

  return (
    <Layout>
      <div className="page-container">
        <Testimonials images={testimonialsImages} />
        <div className="commission-info">
          <h1>How to Commission</h1>
          {/* TODO: DELETE */}
          <p className="contact-text" style={{ backgroundColor: "yellow" }}>
            btw I copied this commission section from:{" "}
            <a href="https://julieburdonstone.com/commissions">
              https://julieburdonstone.com/commissions
            </a>{" "}
            so it'd be best to modify :)
          </p>
          <div className="commission-section">
            <GatsbyImage
              image={getImage(photo[0])}
              className="section-image"
              alt="img-name"
            />
            {/* <img src="path/to/photograph-image.jpg" alt="Photograph" className="section-image"> */}
            <div className="section-content">
              <div className="step-header">
                <div className="circle">
                  <span className="number">1</span>
                </div>

                <h2>Photograph</h2>
              </div>
              <p className="contact-text">
                Most pet portrait commissions are created from photographs.
                Where possible I like to take my own photos but I can work from
                those supplied. Permission in writing to use the photo must be
                supplied at the time of commission by the copyright owner.
              </p>
              <p className="contact-text">
                Photographs need to be clear and in focus. The best images are
                those taken at eye level with front natural lighting.
              </p>
            </div>
          </div>

          <div className="commission-section">
            <GatsbyImage
              image={getImage(process[0])}
              className="section-image"
              alt="img-name"
            />{" "}
            <div className="section-content">
              <div className="step-header">
                <div className="circle">
                  <span className="number">2</span>
                </div>

                <h2>Process</h2>
              </div>
              <p className="contact-text">
                Once a commission is accepted the next stage is to decide the
                size of the work and background colour. I’m happy to include
                more than one pet in a composition and pricing reflects the
                complexity of the work. I want the finished work to capture much
                more than a photo so the more information I have of a pet’s
                character the better the result. At this stage I ask for a non
                refundable 50% deposit.
              </p>
            </div>
          </div>

          <div className="commission-section">
            <GatsbyImage
              image={getImage(completed[0])}
              className="section-image"
              alt="img-name"
            />{" "}
            <div className="section-content">
              <div className="step-header">
                <div className="circle">
                  <span className="number">3</span>
                </div>

                <h2>Completed Work</h2>
              </div>
              <p className="contact-text">
                Once completed I will email an image of the finished work. Once
                the balance of payment is received I will send your completed
                portrait for you to frame to your own taste.
              </p>
            </div>
          </div>

          <div className="commission-section">
            <GatsbyImage
              image={getImage(process[0])}
              className="section-image"
              alt="img-name"
            />{" "}
            <div className="section-content">
              <div className="step-header">
                {/* <div className="circle">
                  <span className="number">$</span>
                </div> */}
                <h2>Pricing</h2>
              </div>
              <h4>Wildlife</h4>
              <p className="contact-text">
                The pricing of wildlife commissions varies greatly depending on
                size and medium. Please reach out with your desired commission
                details, and I will send you a quote shortly!
              </p>
              <h4>Pet Portraits</h4>
              <div className="pricing-row">
                <div className="pricing-col">
                  <h5>Watercolour</h5>
                  <p className="contact-text">
                    <ul>
                      <li className="pricing">
                        <div>
                          <span className="label">5x7":</span>
                          <br />
                          <span className="label">8x10":</span>
                          <br />
                          <span className="label">11x14":</span>
                          <br />
                          <span className="label">16x20”:</span>
                          <br />
                          <span className="label">18x24":</span>
                          <br />
                        </div>
                        <div>
                          <span>$175</span>
                          <br />
                          <span>$250</span>
                          <br />
                          <span>$375</span>
                          <br />
                          <span>$500</span>
                          <br />
                          <span>$675</span>
                          <br />
                        </div>
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="pricing-col">
                  <h5>Chalk Pastel</h5>
                  <p className="contact-text">
                    <ul>
                      <li className="pricing">
                        <div>
                          <span className="label">5x7":</span>
                          <br />
                          <span className="label">8x10":</span>
                          <br />
                          <span className="label">11x14":</span>
                          <br />
                          <span className="label">16x20”:</span>
                          <br />
                          <span className="label">18x24":</span>
                          <br />
                        </div>
                        <div>
                          <span>$200</span>
                          <br />
                          <span>$275</span>
                          <br />
                          <span>$400</span>
                          <br />
                          <span>$550</span>
                          <br />
                          <span>$725</span>
                          <br />
                        </div>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <p className="contact-text">
                These prices are only for a portrait with a single pet. If you
                would like an additional pet, please contact me and I’d be happy
                to discuss pricing!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Commissions;

export const query = graphql`
  query {
    testimonialsImages: allCloudinaryMedia(
      filter: { tags: { in: ["testimonials"] } }
    ) {
      edges {
        node {
          secure_url
          gatsbyImageData(placeholder: BLURRED)
          context {
            custom {
              Testimonial
            }
          }
        }
      }
    }
    commissionImages: allCloudinaryMedia(
      filter: { public_id: { glob: "ChrisPortfolio/Commission/*" } }
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
