import React, { useState, useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "bootstrap-icons/font/bootstrap-icons.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faAngleLeft,
  faAngleRight,
  faBinoculars,
} from "@fortawesome/free-solid-svg-icons";

import "./Preview.css";
import Social from "./Social";
import WikiImg from "./wikiImg";

const Preview = ({ hidePreview, galleryData, currentIndex }) => {
  const [showElements, setShowElements] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const [imageVisible, setImageVisible] = useState(false);
  const [startTouch, setStartTouch] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % galleryData.length);
    setImageVisible(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      currentImageIndex - 1 < 0 ? galleryData.length - 1 : currentImageIndex - 1
    );
    setImageVisible(false);
  };

  let timeout;

  const resetTimer = () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      setShowElements(false);
    }, 2000); // Set the time in milliseconds before elements start to fade out (e.g., 2000ms = 2 seconds)
  };

  const handleUserInteraction = () => {
    setShowElements(true);
    resetTimer();
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.keyCode === 32) {
      handleNextImage();
    } else if (event.key === "ArrowLeft") {
      handlePrevImage();
    } else if (event.key === "Escape") {
      hidePreview();
    }
  };

  useEffect(() => {
    resetTimer();

    document.addEventListener("mousemove", handleUserInteraction);
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleKeyDown);

    document.body.setAttribute("tabindex", "0");
    document.body.focus();

    return () => {
      document.removeEventListener("mousemove", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleKeyDown);
      if (timeout) clearTimeout(timeout);
    };
  }, [currentImageIndex]);

  useEffect(() => {
    setImageVisible(true);
  }, [currentImageIndex]);

  const media = galleryData[currentImageIndex].node;
  const image = getImage(media);
  const title = media?.context?.custom?.caption || "";
  const size = media?.context?.custom?.Size || "";
  const status = media?.context?.custom?.Status || "";
  const year = media?.context?.custom?.Year || "";
  const medium = media?.context?.custom?.Medium || "";
  const testimonial = media?.context?.custom?.Testimonial || "";
  const nextImage = galleryData[currentImageIndex];

  // Detect swipe start and end to navigate
  const handleTouchStart = (e) => {
    setStartTouch(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    e.preventDefault(); // Prevent default scrolling behavior
  };

  const handleTouchEnd = (e) => {
    const endTouch = e.changedTouches[0].clientX;
    if (startTouch - endTouch > 50) {
      handleNextImage(); // Swipe left (next)
    } else if (endTouch - startTouch > 50) {
      handlePrevImage(); // Swipe right (previous)
    }
  };

  return (
    <div
      className="gallery-overlay"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <div className={`${showElements ? "fade-in" : "fade-out"} fade`}>
        <div className="preview-social">
          <Social />
        </div>
        <button
          type="button"
          className="preview-close preview-button"
          onClick={hidePreview}
        >
          <i className="bi bi-x-lg"></i>
        </button>
        <button
          type="button"
          className="preview-nav preview-nav-left preview-button"
          // disabled={disabled}
          onClick={handlePrevImage}
          aria-label="Previous Slide"
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          type="button"
          className="preview-nav preview-nav-right preview-button"
          // disabled={disabled}
          onClick={handleNextImage}
          aria-label="Next Slide"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      <div className="image-containers">
        {/* TODO: ADD ONCLICK NEXT IMG*/}
        <div onClick={handleNextImage}>
          <GatsbyImage
            image={image}
            alt={title}
            className={`responsive-image fade-in-out ${
              imageVisible ? "fade-in" : "fade-out"
            }`}
            objectFit="contain"
          />
          <div className="info">
            {title && title}
            {year && (title ? `, ${year}` : year)}
            {size && (title || year) ? ` (${size})` : size}
          </div>
        </div>
        {/* <FontAwesomeIcon className="info-icon" icon={faBinoculars} size="lg" /> */}
        <div className="widthh">{/* <WikiImg /> */}</div>
      </div>
    </div>
  );
};

export default Preview;
