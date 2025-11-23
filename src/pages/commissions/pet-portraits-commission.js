import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";

import ModalSuccess from "../../components/ModalSuccess";
import Commission from "../../components/Commission";
import ToggleDropdown from "../../UIComponents/ToggleDropdown";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Testimonials from "../../components/Testimonials";

import "./pet-portraits-commission.css";
import Pricing from "../Pricing";

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
  const watercolourSample = commissionMedia.filter(
    (media) => media.context?.custom?.caption === "watercolour"
  );
  const chalkPastelSample = commissionMedia.filter(
    (media) => media.context?.custom?.caption === "chalk-pastel"
  );

  console.log(photo);

  return (
    <Layout>
      <div className="page-container">
        {/* <Testimonials images={testimonialsImages} /> */}
        <div className="commission-info">
          <h1>Pet Portrait Commissions</h1>
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

                <h2>Submit an order request</h2>
              </div>
              <p className="contact-text">
                If you are interested in ordering a pet portrait, please fill
                out the following form:
              </p>
              {/* <a
                href="https://forms.gle/kJCmQMLiw3nHXypJ6"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Request a Commission
              </a>{" "} */}
              <p className="contact-text">
                This form will inquire about a number of important details,
                including: contact information, a photograph, the size, the
                medium, and number of pets. There will also be a section for any
                questions or additional information.
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

                <h2>The Process</h2>
              </div>
              <p className="contact-text">
                Once I have reviewed and approved your response to the form, I
                will reach out to confirm the details of your piece, and respond
                to any inquiries you may have had. I will also ask for a 40%
                non-refundable deposit. I will then continue to update you as I
                progress through your piece.
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
                Once completed I will send an image of the completed piece,
                where you will have up to three changes that can be requested.
                Once the balance of the payment is received, I will send the
                completed portrait.
              </p>
            </div>
          </div>

          <div className="commission-section">
            {/* <GatsbyImage
              image={getImage(process[0])}
              className="section-image"
              alt="img-name"
            />{" "} */}
            <div className="section-content">
              <div className="step-header">
                {/* <div className="circle">
                  <span className="number">$</span>
                </div> */}
                <h2>Pricing</h2>
              </div>
              <div className="pricing-row">
                <div className="pricing-col">
                  <h4>Watercolour</h4>
                  <GatsbyImage
                    image={getImage(watercolourSample[0])}
                    className="section-image"
                    alt="img-name"
                  />{" "}
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
                  <h4>Chalk Pastel</h4>
                  <GatsbyImage
                    image={getImage(chalkPastelSample[0])}
                    className="section-image"
                    alt="img-name"
                  />{" "}
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
          gatsbyImageData(placeholder: TRACED_SVG)
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
        gatsbyImageData(placeholder: TRACED_SVG)
        context {
          custom {
            caption
          }
        }
      }
    }
  }
`;
