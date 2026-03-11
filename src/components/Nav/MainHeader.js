import React, { useState } from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap-icons/font/bootstrap-icons.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ChevronDown } from "lucide-react";

import "./MainHeader.css";
import Social from ".././Social";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const closeMobileNav = () => {
    setIsOpen(false);
    setOpenSection(null);
    document.body.style.overflow = "auto";
  };

  const toggleMobileNav = () => {
    const next = !isOpen;
    setIsOpen(next);
    setOpenSection(null);
    document.body.style.overflow = next ? "hidden" : "auto";
  };

  return (
    <div>
      <header className="app-header" id="header">
        <h1 className="page-header">
          <Link className="site-header" to="/" onClick={closeMobileNav}>
            Chris Macleod
          </Link>
        </h1>
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
              <Link className="nav-item" to="/collections/weekly-sketches">
                weekly sketches
              </Link>
            </div>
          </div>
          <div className="collections-dropdown">
            <a className="nav-item">shop</a>
            <ChevronDown size={16} strokeWidth={1.5} />
            <div className="collections">
              <Link className="nav-item" to="/shop/shop-originals">
                originals
              </Link>
              <Link className="nav-item" to="/shop/shop-prints">
                prints
              </Link>
              {/* <Link className="nav-item" to="/shop/shop-cards">
                cards
              </Link> */}
            </div>
          </div>
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
            </div>
          </div>
          <Link to="/contact">contact</Link>
        </nav>
        <div className="social-container">
          <Social />
        </div>
      </header>

      {/* MOBILE NAV */}
      <nav className={"mobile-nav" + (isOpen ? " active" : "")}>
        {/* Main menu */}
        {!openSection && (
          <ul className="nav-list">
            <li>
              <Link to="/about" onClick={closeMobileNav}>
                about
              </Link>
            </li>
            <li>
              <button
                className="mobile-section-trigger"
                onClick={() => setOpenSection("collections")}
              >
                collections
              </button>
            </li>
            <li>
              <button
                className="mobile-section-trigger"
                onClick={() => setOpenSection("shop")}
              >
                shop
              </button>
            </li>
            <li>
              <button
                className="mobile-section-trigger"
                onClick={() => setOpenSection("commissions")}
              >
                commissions
              </button>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileNav}>
                contact
              </Link>
            </li>
            <li className="mobile-social">
              <Social />
            </li>
          </ul>
        )}

        {/* Sub-menu: Collections */}
        {openSection === "collections" && (
          <div className="mobile-sub">
            <button
              className="mobile-back"
              onClick={() => setOpenSection(null)}
              aria-label="Back to main menu"
            >
              <ChevronDown size={22} strokeWidth={2} />
            </button>
            <ul className="nav-list">
              <li>
                <Link to="/collections/wildlife" onClick={closeMobileNav}>
                  wildlife
                </Link>
              </li>
              <li>
                <Link to="/collections/studies" onClick={closeMobileNav}>
                  studies
                </Link>
              </li>
              <li>
                <Link to="/collections/pet-portraits" onClick={closeMobileNav}>
                  pet portraits
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/weekly-sketches"
                  onClick={closeMobileNav}
                >
                  weekly sketches
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Sub-menu: Shop */}
        {openSection === "shop" && (
          <div className="mobile-sub">
            <button
              className="mobile-back"
              onClick={() => setOpenSection(null)}
              aria-label="Back to main menu"
            >
              <ChevronDown size={22} strokeWidth={2} />
            </button>
            <ul className="nav-list">
              <li>
                <Link to="/shop/shop-originals" onClick={closeMobileNav}>
                  originals
                </Link>
              </li>
              <li>
                <Link to="/shop/shop-prints" onClick={closeMobileNav}>
                  prints
                </Link>
              </li>
              <li>
                {/* <Link to="/shop/shop-cards" onClick={closeMobileNav}>
                  cards
                </Link> */}
              </li>
            </ul>
          </div>
        )}

        {/* Sub-menu: Commissions */}
        {openSection === "commissions" && (
          <div className="mobile-sub">
            <button
              className="mobile-back"
              onClick={() => setOpenSection(null)}
              aria-label="Back to main menu"
            >
              <ChevronDown size={22} strokeWidth={2} />
            </button>
            <ul className="nav-list">
              <li>
                <Link
                  to="/commissions/wildlife-commission"
                  onClick={closeMobileNav}
                >
                  wildlife
                </Link>
              </li>
              <li>
                <Link
                  to="/commissions/pet-portraits-commission"
                  onClick={closeMobileNav}
                >
                  pet portraits
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default MainHeader;
