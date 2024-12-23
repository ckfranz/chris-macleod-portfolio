import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

import ModalSuccess from "../components/ModalSuccess";
import Commission from "../components/Commission";
import ToggleDropdown from "../UIComponents/ToggleDropdown";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Testimonials from "../components/Testimonials";

import "./shop.css";
import Pricing from "./Pricing";

const Shop = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const shopMedia = data.shopImages.nodes;
  console.log(shopMedia);

  // const testimonialsImages = data.testimonialsImages.edges;
  const commissions = shopMedia.filter(
    (media) => media.context?.custom?.caption === "commissions"
  );
  const originals = shopMedia.filter(
    (media) => media.context?.custom?.caption === "originals"
  );
  const prints = shopMedia.filter(
    (media) => media.context?.custom?.caption === "prints"
  );
  const cards = shopMedia.filter(
    (media) => media.context?.custom?.caption === "cards"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Layout>
      <div className="page-container">
        {/* <Testimonials images={testimonialsImages} /> */}

        <p className="contact-text">
          Saw something you liked? Interested in ordering a piece? There are a
          variety of options for you to leave this site having ordered an art
          piece of your desire! To request a piece or inquire about
          availability, please reach out via the{" "}
          <Link to="/contact" className="link">
            contact form
          </Link>
          .
        </p>
        {/* <h1>Artwork</h1> */}

        <div className="shop-row">
          <div className="col">
            <div className="img-container">
              <GatsbyImage
                image={getImage(commissions[0])}
                className="shop-img"
                alt="img-name"
              />
            </div>
            <div>
              <h3>Commissions</h3>
              <p className="contact-text">
                Commissions are the easiest way to get your desired art piece!
                Any form of wildlife art, pastel studies, or pet portraits are
                available for commission. Commissions are ideal for gifts, pet
                memorials, or capturing your favorite animals on paper!
              </p>
              <p>
                <Link to="/commissions" className="link">
                  Learn more!
                </Link>
              </p>
            </div>
          </div>

          <div className="col">
            <div className="img-container">
              <GatsbyImage
                image={getImage(originals[0])}
                className="shop-img"
                alt="img-name"
              />
            </div>
            <div>
              <h3>Originals</h3>
              <p className="contact-text">
                Various{" "}
                <Link to="/wildlife" className="link">
                  wildlife
                </Link>{" "}
                and{" "}
                <Link to="/studies" className="link">
                  pastel studies
                </Link>{" "}
                originals are currently available.
              </p>
              {/* <ToggleDropdown title="Pricing">
                  Please reach out to discuss pricing.
                </ToggleDropdown> */}
              {/* <p className="contact-text">
                If interested in purchasing an original, please{" "}
                <Link to="/contact" className="link">
                  reach out
                </Link>{" "}
                and I can confirm if it's still available.
              </p> */}
            </div>
          </div>

          <div className="col">
            <div className="img-container">
              <GatsbyImage
                image={getImage(prints[0])}
                className="shop-img"
                alt="img-name"
              />
            </div>
            <div>
              <h3>Prints</h3>
              <p className="contact-text">
                High-quality prints of{" "}
                <Link to="/wildlife" className="link">
                  wildlife
                </Link>{" "}
                pieces are available on durable, acid-free, cold-pressed paper.
                These stunning reproductions come at a significantly reduced
                price from the originals.
              </p>
              {/* <p className="contact-text">
                Please reach out to see if a print you are interested in is
                available!
              </p> */}
              <ToggleDropdown title="Pricing">
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
                      </div>
                      <div>
                        <span>$50.00</span>
                        <br />
                        <span>$75.00</span>
                        <br />
                        <span>$150.00</span>
                        <br />
                      </div>
                    </li>
                  </ul>
                </p>
                <p className="contact-text">
                  <span>
                    Please note that pastel studies and pet portraits are not
                    available as prints.
                  </span>
                </p>
              </ToggleDropdown>
            </div>
          </div>
        </div>

        <hr />
        {/* <h1>Other</h1> */}
        <div className="shop-row">
          <div className="col">
            <div className="img-container">
              <GatsbyImage
                image={getImage(cards[0])}
                className="shop-img"
                alt="img-name"
              />
            </div>
            <h3>Cards</h3>
            <p className="contact-text">
              Sets of 5x7” cards can be available upon request. These can
              include thank you or personalized messages on the interior if
              desired. Simply contact me to indicate which pieces you would like
              in card format and I’ll do the rest!
            </p>

            <ToggleDropdown title="Pricing">
              <p className="contact-text">
                <ul>
                  <li className="pricing">
                    <div>
                      <span className="label">Individual:</span>
                      <br />
                      <span className="label">Sets of 5:</span>
                      <br />
                      <span className="label">Set of 10:</span>
                      <br />
                    </div>
                    <div>
                      <span>$5</span>
                      <br />
                      <span>$22.50</span>
                      <br />
                      <span>$45</span>
                      <br />
                    </div>
                  </li>
                </ul>
              </p>
            </ToggleDropdown>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;

export const query = graphql`
  query {
    shopImages: allCloudinaryMedia(
      filter: { public_id: { glob: "ChrisPortfolio/Shop/*" } }
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

// TODO: filter images based on their caption/title
