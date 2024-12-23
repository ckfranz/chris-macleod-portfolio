import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faEtsy,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faShoppingBag,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

import "./Social.css";

const Social = () => {
  const insagram = process.env.GATSBY_INSTAGRAM_LINK;
  const facebook = process.env.GATSBY_FACEBOOK_LINK;
  const etsy = process.env.GATSBY_ETSY_LINK;
  const email = process.env.GATSBY_EMAIL;

  return (
    <ul className="socials">
      <li>
        <a href={insagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a href={"mailto: " + email} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      {/* <li>
        <a href={etsy} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faStore} />
        </a>
      </li> */}
    </ul>
  );
};

export default Social;
