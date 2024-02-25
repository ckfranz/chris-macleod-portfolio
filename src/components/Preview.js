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
  const [imgLink, setImgLink] = useState("");
  const [imageVisible, setImageVisible] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % galleryData.length);
    // console.log(imageVisible);
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
    // console.log(imageVisible);
    setImageVisible(true);
  }, [currentImageIndex]);

  const numhatchPage = 1;
  const numhatchPageSize = 1;
  let numhatchCommonName = "cardinal";

  useEffect(() => {
    if (media) {
      const fetchData = async () => {
        const apiUrl = `https://nuthatch.lastelm.software/v2/birds?page=${numhatchPage}&pageSize=${numhatchPageSize}&name=${numhatchCommonName}&operator=AND`;
        const numhatchApiKey = process.env.GATSBY_NUMHATCH_API_KEY;

        try {
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "API-Key": numhatchApiKey,
            },
          });

          if (!response.ok) {
            throw new Error("Network response was not OK");
          }

          const data = await response.json();
          const img = data?.entities[0]?.images[0];
          // console.log(img);
          setImgLink(img);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData(); // Initiate the data fetching process
    }
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

  return (
    <div className="gallery-overlay">
      <div className={showElements ? "fade-in" : "fade-out"}>
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
        <div>
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
            {year ? ", " + year : ""}
            {size ? " (" + size + ")" : ""}
          </div>
        </div>
        {/* <FontAwesomeIcon className="info-icon" icon={faBinoculars} size="lg" /> */}
        <div className="widthh">{/* <WikiImg /> */}</div>
      </div>
    </div>
  );
};

export default Preview;
