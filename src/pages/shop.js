import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

import ModalSuccess from "../components/ModalSuccess";
import Commission from "../components/Commission";
import ToggleDropdown from "../UIComponents/ToggleDropdown";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./shop.css";
import Pricing from "./Pricing";

const Shop = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

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
        {/* <h2>Contact</h2> */}
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
        <h1>Artwork</h1>
        <h3>Commissions</h3>
        <div className="cols">
          <div className="img-container col">
            {data.allCloudinaryMedia.nodes.map((media, index) => {
              if (media.context?.custom?.caption == "commissions") {
                const image = getImage(media);
                return (
                  <GatsbyImage
                    key={index}
                    image={image}
                    className="shop-img"
                    alt="img-name"
                  />
                );
              }
            })}
          </div>
          <div>
            <p className="contact-text col">
              Commissions are the easiest way to get your desired art piece! Any
              form of wildlife art, pastel studies, or pet portraits are
              available for commission. Commissions are ideal for gifts, pet
              memorials, or capturing your favorite animals on paper!
            </p>
            <ToggleDropdown title="Pricing">
              <h2>Pastel Pet Portrait Painting</h2>
              <ul>
                10" x 14" (25 x 35 cm) £250 (This size is not recommended for
                large breed dogs or horses)
              </ul>
              <ul>14" x 20" (35 x 50 cm) £300</ul>
              <ul>20" x 28" (50 x 70 cm) £600</ul>
              <p>
                Prices are for one portrait; two pets or more please contact me
                I am happy to discuss individual requirements
              </p>
              <p>
                <b>
                  Postage additional - dependent on country Use the 'contact me'
                  form for commissions
                </b>
              </p>
            </ToggleDropdown>
            <ToggleDropdown title="Commission Process">
              <Commission />
            </ToggleDropdown>
          </div>
        </div>

        <div className="cols1">
          <div className="group1">
            <h3>Originals</h3>
            <div className="cols">
              <div className="img-container col">
                {data.allCloudinaryMedia.nodes.map((media, index) => {
                  if (media.context?.custom?.caption == "originals") {
                    const image = getImage(media);
                    return (
                      <GatsbyImage
                        key={index}
                        image={image}
                        className="shop-img"
                        alt="img-name"
                      />
                    );
                  }
                })}
              </div>
              <p className="contact-text col">
                Various{" "}
                <Link to="/wildlife" className="link">
                  wildlife
                </Link>{" "}
                and{" "}
                <Link to="/studies" className="link">
                  pastel studies
                </Link>{" "}
                originals are currently available. If interested in purchasing
                an original, please reach out and I can confirm if it's still
                available.
              </p>
            </div>
            <ToggleDropdown title="Pricing">
              Please reach out to discuss pricing.
            </ToggleDropdown>
          </div>
          <div className="group2">
            <h3>Prints</h3>
            <div className="cols">
              <div className="img-container col">
                {/* TODO: Filter by the  */}
                {data.allCloudinaryMedia.nodes.map((media, index) => {
                  if (media.context?.custom?.caption == "prints") {
                    const image = getImage(media);
                    return (
                      <GatsbyImage
                        key={index}
                        image={image}
                        className="shop-img"
                        alt="img-name"
                      />
                    );
                  }
                })}
              </div>
              <p className="contact-text col">
                High-quality prints of{" "}
                <Link to="/wildlife" className="link">
                  wildlife
                </Link>{" "}
                pieces are available on durable, acid-free, cold-pressed paper.
                These stunning reproductions come at a significantly reduced
                price from the originals. Please reach out to see if a print you
                are interested in is available!
              </p>
            </div>
            <ToggleDropdown title="Pricing">
              <span>
                Please note that PASTEL STUDIES and PET PORTRAITS are NOT
                available as prints.
                <table>
                  <tr>
                    <th>SIZE</th>
                    <th>PRICE</th>
                  </tr>
                  <tr>
                    <td>5x7"</td>
                    <td>$50.00</td>
                  </tr>
                  <tr>
                    <td>8x10"</td>
                    <td>$75.00</td>
                  </tr>
                  <tr>
                    <td>11x14"</td>
                    <td>$125.00</td>
                  </tr>
                  <tr>
                    <td>16x20"</td>
                    <td>$150.00</td>
                  </tr>
                </table>
              </span>
            </ToggleDropdown>
          </div>
        </div>
        <hr />
        <h1>Other</h1>
        <h3>Puzzles</h3>
        <div className="cols">
          <div className="img-container col">
            {data.allCloudinaryMedia.nodes.map((media, index) => {
              if (media.context?.custom?.caption == "puzzles") {
                const image = getImage(media);
                return (
                  <GatsbyImage
                    key={index}
                    image={image}
                    className="shop-img"
                    alt="img-name"
                  />
                );
              }
            })}
          </div>
          <p className="contact-text col">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            obcaecati maiores laudantium neque quisquam placeat, beatae laborum,
            nemo, non sequi deserunt enim iure praesentium reiciendis quas
            reprehenderit blanditiis totam consectetur. Iure laudantium saepe
            iste nostrum ratione eos nulla vel consectetur, fugit commodi natus,
            consequatur deserunt delectus, eligendi vero. Totam, libero.
          </p>
        </div>
        <ToggleDropdown title="Pricing">
          <Pricing />
        </ToggleDropdown>
        <ToggleDropdown title="Commission Process">
          <Commission />
        </ToggleDropdown>
        <hr />
      </div>
    </Layout>
  );
};

export default Shop;

export const query = graphql`
  query {
    allCloudinaryMedia(
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
