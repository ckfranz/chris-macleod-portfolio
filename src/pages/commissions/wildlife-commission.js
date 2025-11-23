import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";

import ModalSuccess from "../../components/ModalSuccess";
import Commission from "../../components/Commission";
import ToggleDropdown from "../../UIComponents/ToggleDropdown";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Testimonials from "../../components/Testimonials";

import "./wildlife-commission.css";
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

  // console.log(photo);

  return (
    <Layout>
      <div className="page-container">
        {/* <Testimonials images={testimonialsImages} /> */}
        <div className="commission-info">
          {/* <h1>How to Commission</h1> */}
          <div className="commission-section">
            {/* <GatsbyImage
              image={getImage(photo[0])}
              className="section-image"
              alt="img-name"
            /> */}
            {/* <img src="path/to/photograph-image.jpg" alt="Photograph" className="section-image"> */}
            <div className="section-content">
              <div className="step-header">
                <div className="circle">
                  <span className="number">1</span>
                </div>

                <h2>Submit an order request</h2>
              </div>
              <p className="contact-text">
                If you are interested in ordering a piece, please fill out the
                following form: https://forms.gle/kJCmQMLiw3nHXypJ6
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
                including: contact information, the size, the style, and a brief
                description of what you are looking for. There will also be a
                section for any questions or additional information.
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
                <div className="circle">
                  <span className="number">2</span>
                </div>

                <h2>The Process</h2>
              </div>
              <p className="contact-text">
                Once I have reviewed and approved your response to the form, I
                will reach out to confirm the details of your piece, and respond
                to any inquiries you may have had. At this point, I will confirm
                any reference material and give you a final quote. Once the
                quote is confirmed, I will ask for a 40% non-refundable deposit.
                I will then continue to update you as I progress through your
                piece.
              </p>
            </div>
          </div>

          <div className="commission-section">
            {/* <GatsbyImage
              image={getImage(completed[0])}
              className="section-image"
              alt="img-name"
            />{" "} */}
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
                completed piece.
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
              <p className="contact-text">
                The pricing of wildlife commissions varies greatly depending on
                size and medium. Please reach out with your desired commission
                details via the order request form, and I will send you a quote
                shortly!
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
