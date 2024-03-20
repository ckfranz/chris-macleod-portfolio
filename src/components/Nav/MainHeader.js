import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./MainHeader.css";
import Social from ".././Social";
import LinkButton from "../../UIComponents/LinkButton";

const MainHeader = (props) => {
  let [mobileNavClass, setMobileNavClass] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileNav = () => {
    setIsOpen(false);
    setMobileNavClass("");
    document.body.style.overflow = "auto";
  };

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setMobileNavClass(mobileNavClass == "" ? "active" : "");
      document.body.style.overflow = "hidden";
    } else {
      setMobileNavClass("");
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div>
      <header className="app-header" id="header">
        <h1 className="page-header">
          <Link className="site-header" to="/" onClick={closeMobileNav}>
            Chris Macleod
          </Link>
        </h1>
        {/* <FontAwesomeIcon icon={faBars} /> */}
        <button className="nav-menu" onClick={toggleMobileNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav className="nav-bar">
          <Link to="/about">about</Link>
          <div className="collections-dropdown">
            <a className="nav-item">
              Collections <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <div className="collections">
              <Link className="nav-item" to="/wildlife">
                wildlife
              </Link>
              <Link className="nav-item" to="/studies">
                studies
              </Link>
              <Link
                to="gallery-3"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              ></Link>
            </div>
          </div>
          <Link to="/pet-portraits">pet poraits</Link>
          <Link to="/shop">shop</Link>
          <Link to="/contact">info/contact</Link>
        </nav>
        <div className="social-container">
          <Social />
        </div>
      </header>

      {/* ------------------------ MOBILE HEADER ------------------------ */}
      <nav className={"mobile-nav " + mobileNavClass}>
        <ul className="nav-list">
          <li>
            <Link to="/about" onClick={toggleMobileNav}>
              about
            </Link>
          </li>
          <li>
            <Link to="/studies" onClick={toggleMobileNav}>
              studies
            </Link>
          </li>
          <li>
            <Link to="/wildlife" onClick={toggleMobileNav}>
              wildlife
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              to="/pet-portraits"
              onClick={toggleMobileNav}
            >
              pet portraits
            </Link>
          </li>
          <li>
            <Link className="nav-item" href="/shop" onClick={toggleMobileNav}>
              shop
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/contact" onClick={toggleMobileNav}>
              info/contact
            </Link>
          </li>
          <li>
            <Social />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
