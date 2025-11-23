import React, { useState, useEffect, useRef, useCallback } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "bootstrap-icons/font/bootstrap-icons.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faXmark,
//   faAngleLeft,
//   faAngleRight,
//   faBinoculars,
// } from "@fortawesome/free-solid-svg-icons";

import "./Preview.css";
import Social from "./Social";
import { prepareImage } from "../utils/imageUtils";

// import WikiImg from "./wikiImg";

const HIDE_UI_AFTER_MS = 2000;

const Preview = ({ hidePreview, galleryData = [], currentIndex = 0 }) => {
  const [showElements, setShowElements] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  // const [imgLink, setImgLink] = useState("");
  const [imageVisible, setImageVisible] = useState(false);
  const [startTouch, setStartTouch] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const overlayRef = useRef(null);
  const timeoutRef = useRef(null);

  // keep state in sync if parent changes currentIndex
  useEffect(() => {
    setCurrentImageIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    setIsLoading(true);
  }, [currentImageIndex]);

  const len = galleryData.length;
  const media = len ? galleryData[currentImageIndex]?.node : null;
  const { imageData, src } = prepareImage(media, "jpg");

  const key = media.public_id || media.secure_url;

  const preloadCacheRef = useRef(new Map());

  const preloadUrl = (url) => {
    if (!url || preloadCacheRef.current.has(url)) return;
    const img = new Image();
    img.src = url;
    preloadCacheRef.current.set(url, img);

    // optional cache trimming
    // if (preloadCacheRef.current.size > 20) {
    //   const [firstKey] = preloadCacheRef.current.keys();
    //   preloadCacheRef.current.delete(firstKey);
    // }
  };

  const handleNextImage = useCallback(() => {
    if (!len) return;
    setCurrentImageIndex((i) => (i + 1) % len);
    setImageVisible(false);
  }, [len]);

  const handlePrevImage = useCallback(() => {
    if (!len) return;
    setCurrentImageIndex((i) => (i - 1 + len) % len);
    setImageVisible(false);
  }, [len]);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const startTimer = () => {
    clearTimer();
    timeoutRef.current = setTimeout(
      () => setShowElements(false),
      HIDE_UI_AFTER_MS
    );
  };

  const handleUserInteraction = useCallback((e) => {
    // prevent page scroll on space when overlay is up
    if (e.type === "keydown" && (e.code === "Space" || e.key === " ")) {
      e.preventDefault();
    }
    setShowElements(true);
    startTimer();
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (
        event.key === "ArrowRight" ||
        event.code === "Space" ||
        event.key === " "
      ) {
        event.preventDefault();
        handleNextImage();
      } else if (event.key === "ArrowLeft") {
        handlePrevImage();
      } else if (event.key === "Escape") {
        hidePreview();
      }
    },
    [handleNextImage, handlePrevImage, hidePreview]
  );

  useEffect(() => {
    if (!galleryData?.length) return;

    const len = galleryData.length;
    const iNext = (currentImageIndex + 1) % len;
    const iPrev = (currentImageIndex - 1 + len) % len;

    const mediaNext = galleryData[iNext]?.node;
    const mediaPrev = galleryData[iPrev]?.node;

    const rawNext = mediaNext?.secure_url || mediaNext?.url || null;
    const rawPrev = mediaPrev?.secure_url || mediaPrev?.url || null;

    const toJpg = (u) =>
      u
        ? u.includes("f_auto")
          ? u.replace("f_auto", "f_jpg")
          : u.replace("/image/upload/", "/image/upload/f_jpg/")
        : null;

    preloadUrl(toJpg(rawNext));
    preloadUrl(toJpg(rawPrev));
  }, [currentImageIndex, galleryData]);

  useEffect(() => {
    document.addEventListener("mousemove", handleUserInteraction);
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleKeyDown);

    // focus the overlay for keyboard users
    overlayRef.current?.focus();
    startTimer();

    return () => {
      document.removeEventListener("mousemove", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleKeyDown);
      clearTimer();
    };
  }, [handleUserInteraction, handleKeyDown]);

  useEffect(() => {
    setImageVisible(true);
  }, [currentImageIndex]);

  // const numhatchPage = 1;
  // const numhatchPageSize = 1;
  // let numhatchCommonName = "cardinal";

  // useEffect(() => {
  //   if (media) {
  //     const fetchData = async () => {
  //       const apiUrl = `https://nuthatch.lastelm.software/v2/birds?page=${numhatchPage}&pageSize=${numhatchPageSize}&name=${numhatchCommonName}&operator=AND`;
  //       const numhatchApiKey = process.env.GATSBY_NUMHATCH_API_KEY;

  //       try {
  //         const response = await fetch(apiUrl, {
  //           method: "GET",
  //           headers: {
  //             Accept: "application/json",
  //             "API-Key": numhatchApiKey,
  //           },
  //         });

  //         if (!response.ok) {
  //           throw new Error("Network response was not OK");
  //         }

  //         const data = await response.json();
  //         const img = data?.entities[0]?.images[0];
  //         // console.log(img);
  //         setImgLink(img);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData(); // Initiate the data fetching process
  //   }
  // }, [currentImageIndex]);

  console.log("large img ", media);
  // guard against empty data // TODO: instead, render "Missing Image text or something..."
  if (!len || !media || (!imageData && !src)) {
    console.log("failed to get image!");
    return null;
  }
  const title = media?.context?.custom?.caption || "";
  const size = media?.context?.custom?.Size || "";
  const status = media?.context?.custom?.Status || "";
  const year = media?.context?.custom?.Year || "";
  const medium = media?.context?.custom?.Medium || "";
  const testimonial = media?.context?.custom?.Testimonial || "";
  const nextImage = galleryData[currentImageIndex];

  // const handleTouchMove = (e) => {
  //   e.preventDefault(); // Prevent default scrolling behavior
  // };

  const handleTouchStart = (e) => setStartTouch(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const end = e.changedTouches[0].clientX;
    if (startTouch - end > 50) handleNextImage();
    else if (end - startTouch > 50) handlePrevImage();
  };

  return (
    <div
      ref={overlayRef}
      className="gallery-overlay"
      aria-modal="true"
      tabIndex={-1}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      // onTouchMove={handleTouchMove}
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
          {imageData ? (
            <GatsbyImage
              key={key}
              image={imageData}
              alt={title || "Artwork preview"}
              onLoad={() => setIsLoading(false)}
              className={`responsive-image fade-in-out ${
                imageVisible ? "fade-in" : "fade-out"
              }`}
              imgStyle={{ objectFit: "contain" }}
              style={{ width: "100%" }}
              loading="eager"
              imgAttributes={{ fetchpriority: "high", decoding: "async" }}
            />
          ) : src ? (
            <img
              key={key}
              src={src}
              alt={title || "Artwork preview"}
              onLoad={() => setIsLoading(false)}
              className={`responsive-image fade-in-out ${
                imageVisible ? "fade-in" : "fade-out"
              }`}
              style={{ width: "100%", height: "auto", objectFit: "contain" }} // <- contain
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          ) : (
            <div className="image-missing">Image unavailable</div>
          )}
          <div className="info">
            {[title, year].filter(Boolean).join(", ")}
            {size && ` (${size})`}
            {status && ` – ${status}`}
          </div>
        </div>
        {/* <FontAwesomeIcon className="info-icon" icon={faBinoculars} size="lg" /> */}
        <div className="widthh">{/* <WikiImg /> */}</div>
      </div>
    </div>
  );
};

export default Preview;
