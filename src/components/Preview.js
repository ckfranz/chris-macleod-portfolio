import React, { useState, useEffect, useRef, useCallback } from "react";
import { getImage } from "gatsby-plugin-image";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./Preview.css";
import Social from "./Social";

const HIDE_UI_AFTER_MS = 5000;
const PRELOAD_RANGE = 2;
const FADE_DURATION_MS = 200;

const getLargeImageUrl = (media) => {
  const largeImage = getImage(media?.gatsbyImageDataLarge);
  return largeImage?.images?.fallback?.src || media?.secure_url || null;
};

const Preview = ({ hidePreview, galleryData = [], currentIndex = 0 }) => {
  const [showElements, setShowElements] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const [imageVisible, setImageVisible] = useState(true);
  const [startTouch, setStartTouch] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const overlayRef = useRef(null);
  const timeoutRef = useRef(null);
  const fadeTimeoutRef = useRef(null);
  const preloadCacheRef = useRef(new Map());

  const len = galleryData.length;

  // Preload using the exact same URL we'll render
  const preloadImage = useCallback((media) => {
    const url = getLargeImageUrl(media);
    if (!url || preloadCacheRef.current.has(url)) return;
    const img = new Image();
    img.src = url;
    preloadCacheRef.current.set(url, img);
  }, []);

  // Preload adjacent images proactively
  const preloadAdjacentImages = useCallback(
    (centerIndex) => {
      if (!len) return;
      for (let offset = 1; offset <= PRELOAD_RANGE; offset++) {
        const nextIdx = (centerIndex + offset) % len;
        const prevIdx = (centerIndex - offset + len) % len;
        preloadImage(galleryData[nextIdx]?.node);
        preloadImage(galleryData[prevIdx]?.node);
      }
    },
    [len, galleryData, preloadImage]
  );

  useEffect(() => {
    preloadAdjacentImages(currentImageIndex);
  }, [currentImageIndex, preloadAdjacentImages]);

  useEffect(() => {
    setCurrentImageIndex(currentIndex);
  }, [currentIndex]);

  const media = len ? galleryData[currentImageIndex]?.node : null;
  const largeUrl = getLargeImageUrl(media);

  const navigateToImage = useCallback(
    (getNextIndex) => {
      if (!len || isTransitioning) return;

      setIsTransitioning(true);
      setImageVisible(false);

      // Clear any pending fade timeout
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }

      fadeTimeoutRef.current = setTimeout(() => {
        setCurrentImageIndex(getNextIndex);
        setIsLoading(true);
        // Force a reflow before fading in (helps iOS Safari)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setImageVisible(true);
            setIsTransitioning(false);
          });
        });
      }, FADE_DURATION_MS);
    },
    [len, isTransitioning]
  );

  const handleNextImage = useCallback(() => {
    navigateToImage((prev) => (prev + 1) % len);
  }, [navigateToImage, len]);

  const handlePrevImage = useCallback(() => {
    navigateToImage((prev) => (prev - 1 + len) % len);
  }, [navigateToImage, len]);

  // Cleanup fade timeout on unmount
  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

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

  // Prevent touch move on the overlay to stop iOS scroll-through
  const handleTouchMove = useCallback((e) => {
    e.preventDefault();
  }, []);

  // Better iOS scroll lock
  useEffect(() => {
    if (typeof document === "undefined") return;

    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;

    // Lock body
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      // Restore
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      html.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  if (!len || !media || !largeUrl) {
    return null;
  }

  const title = media?.context?.custom?.caption || "";
  const size = media?.context?.custom?.Size || "";
  const status = media?.context?.custom?.Status || "";
  const year = media?.context?.custom?.Year || "";

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
          onClick={handlePrevImage}
          aria-label="Previous Slide"
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          type="button"
          className="preview-nav preview-nav-right preview-button"
          onClick={handleNextImage}
          aria-label="Next Slide"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      <div className="image-containers">
        <div
          onClick={handleNextImage}
          className={`preview-content fade-in-out ${
            imageVisible ? "fade-in" : "fade-out"
          }`}
        >
          {largeUrl ? (
            <img
              src={largeUrl}
              alt={title || "Artwork preview"}
              onLoad={() => setIsLoading(false)}
              className="responsive-image"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              loading="eager"
              decoding="async"
            />
          ) : (
            <div className="image-missing">Image unavailable</div>
          )}
          <div className="info">
            {[title, year].filter(Boolean).join(", ")}
            {size && ` (${size})`}
            {status && (
              <span className="preview-status">
                {` – ${status.charAt(0) + status.slice(1).toLowerCase()}`}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
