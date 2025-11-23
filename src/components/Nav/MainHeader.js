import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  faBars,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { ChevronDown } from "lucide-react";

import "./MainHeader.css";
import Social from ".././Social";
import LinkButton from "../../UIComponents/LinkButton";

import logoBlack from "../../images/assets/logo-black.png";

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
            {/* TODO: replace with svgs */}
            {/* <img src={logoBlack} /> */}
          </Link>
        </h1>
        {/* <FontAwesomeIcon icon={faBars} /> */}
        <button className="nav-menu" onClick={toggleMobileNav}>
          {!isOpen ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <i className="bi bi-x"></i>
          )}
        </button>
        <nav className="nav-bar">
          <Link to="/about">about</Link>
          <div className="collections-dropdown">
            <a className="nav-item">collections</a>
            <ChevronDown size={16} strokeWidth={1.5} />
            <div className="collections">
              <Link className="nav-item" to="/collections/wildlife">
                wildlife
              </Link>
              <Link className="nav-item" to="/collections/studies">
                studies
              </Link>
              <Link className="nav-item" to="/collections/pet-portraits">
                pet portraits
              </Link>
              <Link className="nav-item" to="/weekly-sketches">
                weekly sketches
              </Link>
            </div>
          </div>
          {/* TODO: future shop landing page */}
          {/* <Link to="/shop">shop</Link> */}
          <div className="collections-dropdown">
            <a className="nav-item">commissions</a>
            <ChevronDown size={16} strokeWidth={1.5} />
            <div className="collections">
              <Link className="nav-item" to="/commissions/wildlife-commission">
                wildlife
              </Link>
              <Link
                className="nav-item"
                to="/commissions/pet-portraits-commission"
              >
                pet portraits
              </Link>
              <Link className="nav-item" to="/weekly-sketches">
                weekly sketches
              </Link>
            </div>
          </div>
          {/* <Link to="/commissions">commissions</Link> */}
          <Link to="/contact">contact</Link>
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
            <Link to="/collections/wildlife" onClick={toggleMobileNav}>
              wildlife
            </Link>
          </li>
          <li>
            <Link to="/collections/studies" onClick={toggleMobileNav}>
              studies
            </Link>
          </li>
          <li>
            <Link to="/collections/pet-portraits" onClick={toggleMobileNav}>
              pet portraits
            </Link>
          </li>
          <li>
            <Link to="/weekly-sketches" onClick={toggleMobileNav}>
              weekly sketches
            </Link>
          </li>
          <li>
            <Link className="nav-item" href="/shop" onClick={toggleMobileNav}>
              shop
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/contact" onClick={toggleMobileNav}>
              contact
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
