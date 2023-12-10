import React from "react";

import "./Footer.css";

const Footer = () => {
  let year = new Date().getFullYear() + " Chris Macleod";
  return (
    <footer>
      <p className="footer">&copy; {year}</p>
    </footer>
  );
};

export default Footer;
