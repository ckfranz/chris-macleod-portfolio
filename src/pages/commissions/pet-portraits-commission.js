import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { ExternalLink } from "lucide-react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./pet-portraits-commission.css";

const Commissions = ({ data }) => {
  const commissionMedia = data.commissionImages.nodes;

  const watercolourSample = commissionMedia.filter(
    (media) => media.context?.custom?.caption === "watercolour"
  );
  const chalkPastelSample = commissionMedia.filter(
    (media) => media.context?.custom?.caption === "chalk-pastel"
  );

  return (
    <Layout>
      <div className="commission-page">
        <h1>Pet Portrait Commissions</h1>
        <p className="commission-intro">
          Commissions are the perfect way to capture your beloved pet in a
          beautiful, handcrafted portrait. Here's how the process works.
        </p>

        <div className="process-steps">
          {/* Step 1 */}
          <div className="process-step">
            <div className="step-content">
              <div className="step-header">
                <span className="step-number">1</span>
                <h2>Submit an Order Request</h2>
              </div>
              <p>
                If you are interested in ordering a pet portrait, please fill
                out the following form:
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScmZfXvF1ERXcm8goMUHUZ6fWc-_aU5RwzqTIOdLbMQutbxKg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Request a Commission <ExternalLink size={13} strokeWidth={1.5} />
              </a>
              <p>
                This form will inquire about a number of important details,
                including: contact information, a photograph, the size, the
                medium, and number of pets. There will also be a section for any
                questions or additional information.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="process-step">
            <div className="step-content">
              <div className="step-header">
                <span className="step-number">2</span>
                <h2>The Process</h2>
              </div>
              <p>
                Once I have reviewed and approved your response to the form, I
                will reach out to confirm the details of your piece, and respond
                to any inquiries you may have had. I will also ask for a 40%
                non-refundable deposit. I will then continue to update you as I
                progress through your piece.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="process-step">
            <div className="step-content">
              <div className="step-header">
                <span className="step-number">3</span>
                <h2>Completed Work</h2>
              </div>
              <p>
                Once completed I will send an image of the completed piece,
                where you will have up to three changes that can be requested.
                Once the balance of the payment is received, I will send the
                completed portrait.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="pricing-section">
          <h2>Pricing</h2>
          <div className="pricing-grid">
            {/* Chalk Pastel */}
            <div className="pricing-card">
              <h3>Chalk Pastel</h3>
              <GatsbyImage
                image={getImage(chalkPastelSample[0])}
                className="pricing-card-image"
                alt="Chalk pastel sample"
                imgStyle={{ objectPosition: "center 40%" }}
              />
              <ul className="price-list">
                <li>
                  <span className="size">5x7"</span>
                  <span className="price">$200</span>
                </li>
                <li>
                  <span className="size">8x10"</span>
                  <span className="price">$275</span>
                </li>
                <li>
                  <span className="size">11x14"</span>
                  <span className="price">$400</span>
                </li>
                <li>
                  <span className="size">16x20"</span>
                  <span className="price">$550</span>
                </li>
                <li>
                  <span className="size">18x24"</span>
                  <span className="price">$725</span>
                </li>
              </ul>
            </div>

            {/* Watercolour */}
            <div className="pricing-card">
              <h3>Watercolour</h3>
              <GatsbyImage
                image={getImage(watercolourSample[0])}
                className="pricing-card-image"
                alt="Watercolour sample"
                imgStyle={{ objectPosition: "center 40%" }}
              />
              <ul className="price-list">
                <li>
                  <span className="size">5x7"</span>
                  <span className="price">$175</span>
                </li>
                <li>
                  <span className="size">8x10"</span>
                  <span className="price">$250</span>
                </li>
                <li>
                  <span className="size">11x14"</span>
                  <span className="price">$375</span>
                </li>
                <li>
                  <span className="size">16x20"</span>
                  <span className="price">$500</span>
                </li>
                <li>
                  <span className="size">18x24"</span>
                  <span className="price">$675</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="pricing-note">
            These prices are only for a portrait with a single pet. If you would
            like an additional pet, please contact me and I'd be happy to
            discuss pricing!
          </p>
        </div>

        {/* CTA */}
        <div className="commission-cta">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScmZfXvF1ERXcm8goMUHUZ6fWc-_aU5RwzqTIOdLbMQutbxKg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Request a Commission <ExternalLink size={13} strokeWidth={1.5} />
          </a>
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
