import React, { useState, useEffect } from "react";
import { Link, navigate, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./MainHeader.css";
import Social from ".././Social";
import logoGreen from "../../images/assets/logo-green.png";
import designIcon from "../../images/assets/design-icon.png";

const MAIN_NAV = [
  { id: "about",          label: "About",          href: "/about",         color: "#767F64" },
  { id: "portfolio",      label: "Portfolio",                               color: "#283314" },
  { id: "shop",           label: "Shop",                                    color: "#DDE1D0" },
  { id: "commissions",    label: "Commissions",                             color: "#171E08" },
  { id: "collaborations", label: "Collaborations", href: "/collaborations", color: "#EDECE4" },
  { id: "contact",        label: "Contact",        href: "/contact",        color: "#DDE1D0", logo: true },
];

const SUB_NAV = {
  portfolio: [
    { label: "Pastel",               href: "/collections/pastel",               color: "#283314" },
    { label: "Watercolour",          href: "/collections/watercolour",          color: "#171E08" },
    { label: "Vintage Encyclopedia", href: "/collections/vintage-encyclopedia", color: "#767F64" },
    { label: "Pet Portraits",        href: "/collections/pet-portraits",        color: "#DDE1D0" },
    { label: "Studies",              href: "/collections/studies",              color: "#EDECE4" },
    { label: "Weekly Sketches",      href: "/collections/weekly-sketches",      color: "#283314" },
  ],
  shop: [
    { label: "Prints",              href: "/shop/shop-prints",    color: "#283314" },
    { label: "Available Originals", href: "/shop/shop-originals", color: "#767F64" },
  ],
  commissions: [
    { label: "Wildlife",      href: "/commissions/wildlife-commission",       color: "#283314" },
    { label: "Pet Portraits", href: "/commissions/pet-portraits-commission",  color: "#767F64" },
  ],
};

const MainHeader = () => {
  const [activeSection, setActiveSection] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("navActiveSection") : null
  );
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (activeSection) {
      localStorage.setItem("navActiveSection", activeSection);
    } else {
      localStorage.removeItem("navActiveSection");
    }
  }, [activeSection]);

  const data = useStaticQuery(graphql`
    query NavbarImages {
      allCloudinaryMedia(
        filter: { public_id: { glob: "ChrisPortfolio/Navbar/**" } }
      ) {
        nodes {
          public_id
          context {
            custom {
              caption
            }
          }
          gatsbyImageData(
            placeholder: BLURRED
            transformations: ["f_auto,q_auto,c_fit,w_320,h_320"]
          )
        }
      }
    }
  `);

  const imgMap = {};
  data.allCloudinaryMedia.nodes.forEach((node) => {
    const caption = node.context?.custom?.caption?.toLowerCase().trim();
    if (caption) imgMap[caption] = getImage(node);
  });

  const handleCircleClick = (item) => {
    if (item.href) {
      if (!activeSection) setActiveSection(null);
      setOverlayVisible(false);
      navigate(item.href);
    } else if (SUB_NAV[item.id]) {
      setActiveSection(item.id);
      setOverlayVisible(true);
    }
  };

  const displayItems = activeSection ? SUB_NAV[activeSection] : MAIN_NAV;

  return (
    <div>
      {overlayVisible && (
        <div className="nav-overlay" aria-hidden="true" />
      )}
      <header className="app-header" id="header">
        <div className="site-header-inner">
          <img src={designIcon} alt="" className="corner-icon corner-icon--tl" aria-hidden="true" />
          <img src={designIcon} alt="" className="corner-icon corner-icon--br" aria-hidden="true" />
          <div className="logo-row">
            <Link to="/" onClick={() => { setActiveSection(null); setOverlayVisible(false); }}>
              <img src={logoGreen} alt="Chris Macleod Art" className="header-logo" />
            </Link>
            <div className="social-container">
              <Social />
            </div>
          </div>
        </div>
      </header>

      <nav className="circle-nav">
        <div className="circle-nav-inner">
          <div className="circle-nav-header" style={{ visibility: activeSection ? "visible" : "hidden" }}>
            <button
              className="circle-nav-back"
              onClick={() => { setActiveSection(null); setOverlayVisible(false); }}
              aria-label="Back"
            >
              ← back
            </button>
            <span className="circle-nav-title">
              {activeSection ? activeSection.charAt(0).toUpperCase() + activeSection.slice(1) : ""}
            </span>
            <span className="circle-nav-header-spacer" aria-hidden="true">← back</span>
          </div>
          <div className="circle-nav-items">
            {displayItems.map((item) => {
              const img = imgMap[item.label.toLowerCase()];
              return (
                <div
                  key={item.label}
                  className="circle-nav-item"
                  onClick={() => handleCircleClick(item)}
                >
                  <div className="circle-img" style={{ backgroundColor: item.color }}>
                    {item.logo ? (
                      <img src={logoGreen} alt={item.label} className="circle-logo-img" />
                    ) : img ? (
                      <GatsbyImage image={img} alt={item.label} className="circle-gatsby-img" />
                    ) : null}
                  </div>
                  <span className="circle-label">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;
