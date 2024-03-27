import React, { useState } from "react";
import Layout from "../components/Layout";

import ModalSuccess from "../components/ModalSuccess";
import Commission from "../components/Commission";
import ToggleDropdown from "../UIComponents/ToggleDropdown";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./contact.css";

const Contact = ({ data }) => {
  // const [showModal, setShowModal] = useState(false);
  // const [submitText, setSubmitText] = useState(null);

  // const onSubmit = async (event, setSubmitText) => {
  //   event.preventDefault();
  //   setSubmitText("Submitting ...");

  //   const form = event.target;
  //   const formData = new FormData(form);

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => {
  //       setSubmitText("Successfully submitted!");
  //       setShowModal(true);
  //     })
  //     .catch((error) => {
  //       setSubmitText(
  //         "There was an error with your submission, please email me using the address above."
  //       );
  //       setShowModal(false);
  //     });
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  return (
    <Layout>
      <div className="page-container">
        <div>
          {/* <h2>Contact</h2> */}
          <h3>Let’s connect!</h3>
          <p className="contact-text">
            <br />
            Please use the form below to reach out for any inquiries. Whether
            you are interested in commissioning a piece, purchasing prints or
            cards, or interested in my artistic process, I would love to hear
            from you!
          </p>

          <div className="contact-container">
            <div className="contact-img-container">
              {data.allCloudinaryMedia.nodes.map((media, index) => {
                // console.log(media + " : " + index);
                const image = getImage(media);
                return (
                  <div key={index}>
                    <GatsbyImage
                      key={index}
                      image={image}
                      className="contact-img"
                      alt="img-name"
                    />
                  </div>
                );
              })}
            </div>
            <form
              name="contact"
              data-netlify="true"
              className="cta-form"
              method="POST"
              onSubmit="submit"
              // action="/pages/success/"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" value="contact" />
              <div className="row">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              {/* <div className="col">
              <input placeholder="Inquiry Type" required />
            </div> */}
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  name="message"
                  rows="10"
                  className="message"
                  required
                ></textarea>
              </div>
              {/* SPAM FILTERING */}
              <div className="field">
                <div data-netlify-recaptcha="true"></div>
              </div>
              <button type="submit" className="send-button">
                Send Message
              </button>
            </form>
            {/* {submitText && <p>{submitText}</p>} */}
            {/* {showModal && <ModalSuccess onClose={closeModal} />} */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query {
    allCloudinaryMedia(
      filter: { public_id: { glob: "ChrisPortfolio/Contact/*" } }
    ) {
      nodes {
        public_id
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;
