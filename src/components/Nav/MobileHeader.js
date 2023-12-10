import React, { useState } from "react";
import { Route } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./MainHeader.css";
import Social from ".././Social";
import LinkButton from "../../UIComponents/LinkButton";
import { Link } from "react-scroll";

const MainHeader = () => {
  return (
    <header className="App-header" id="header">
      <h1 className="page-header">
        <a className="site-header" href="/">
          Chris Macleod
        </a>
      </h1>
      {/* <FontAwesomeIcon icon={faBars} /> */}
      <nav className="nav-bar">
        <Link to="/about">about</Link>
        <div className="collections-dropdown">
          <a>
            Collections <FontAwesomeIcon icon={faAngleDown} />
          </a>
          <div className="collections">
            {/* <Link
              to="gallery-1"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            > */}
            <Link to="/collections">wildlife</Link>
            {/* </Link> */}
            {/* <Link
              to="gallery-2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <a name="pastel studies" href="/collections">
                pastel
              </a>
            </Link> */}
            {/* <Link
              to="gallery-3"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <a href="/collections">watercolor</a>
            </Link> */}
          </div>
        </div>

        <a href="pet-portraits">pet portraits</a>
        {/* <LinkButton name="pricing" href="pricing"></LinkButton> */}
        <a href="contact">info/contact</a>
      </nav>
      <Social />
    </header>
  );
};

export default MainHeader;
