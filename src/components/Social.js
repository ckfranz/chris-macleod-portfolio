import React from "react";

import { Facebook, Mail } from "lucide-react";

import "./Social.css";

// Lucide has no Etsy icon, so draw an outline "E" in the same style
const EtsyIcon = ({ size = 24, strokeWidth = 2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 4h11v3" />
    <path d="M6 20h11v-3" />
    <path d="M8 4v16" />
    <path d="M8 12h6" />
    <path d="M14 10v4" />
  </svg>
);

const Social = () => {
  const facebook = process.env.GATSBY_FACEBOOK_LINK;
  const etsy = process.env.GATSBY_ETSY_LINK;
  const email = process.env.GATSBY_EMAIL;

  return (
    <ul className="socials">
      <li>
        <a href={etsy} target="_blank" rel="noopener noreferrer" aria-label="Etsy">
          <EtsyIcon size={16} strokeWidth={1.5} />
        </a>
      </li>
      <li>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <Facebook size={16} strokeWidth={1.5} />
        </a>
      </li>
      <li>
        <a href={"mailto: " + email} target="_blank" rel="noopener noreferrer">
          <Mail size={16} strokeWidth={1.5} />
        </a>
      </li>
    </ul>
  );
};

export default Social;
