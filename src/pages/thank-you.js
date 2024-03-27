import React, { useState } from "react";
import Layout from "../components/Layout";
import LinkButton from "../UIComponents/LinkButton";

import ModalSuccess from "../components/ModalSuccess";
import Commission from "../components/Commission";
import ToggleDropdown from "../UIComponents/ToggleDropdown";
import { Link } from "gatsby";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./contact.css";

const ThankYouPage = () => {
  return (
    <Layout>
      <div className="page-container">
        <div>
          {/* <h2>Contact</h2> */}
          <h3>Thank you for your message!</h3>
          <p>
            I really appreciate you taking the time to reach out. Whether you're
            saying hi, asking about prices, or interested in a commission, your
            interest means a lot! I'll be reviewing your message shortly and
            will get back to you as soon as possible with all the information
            you need. In the meantime, feel free to explore more of my
            collection for some creative inspiration.
          </p>
          <p>
            Warm regards, <br />
            Chris Macleod
          </p>
          <LinkButton href="/wildlife" name="back to gallery" />
        </div>
      </div>
    </Layout>
  );
};

export default ThankYouPage;
