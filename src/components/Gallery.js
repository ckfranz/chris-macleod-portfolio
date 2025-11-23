import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./Gallery.css";
import ReturnToTop from "../UIComponents/ReturnToTop";
import Preview from "./Preview";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Masonry from "react-masonry-css";

const Gallery = ({ data }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Sort once per data change
  const galleryData = useMemo(() => {
    const edges = data?.allCloudinaryMedia?.edges ?? [];
    return edges.slice().sort((a, b) => {
      const yearA = parseInt(a.node.context?.custom?.Year);
      const yearB = parseInt(b.node.context?.custom?.Year);
      const hasYearA = !Number.isNaN(yearA);
      const hasYearB = !Number.isNaN(yearB);

      if (hasYearA && hasYearB && yearA !== yearB) return yearB - yearA;
      if (hasYearA && !hasYearB) return -1;
      if (!hasYearA && hasYearB) return 1;

      const createdA = new Date(a.node.created_at);
      const createdB = new Date(b.node.created_at);
      return createdB - createdA; // newest first
    });
  }, [data]);

  // Open/close preview
  const openPreview = useCallback((index) => {
    setCurrentIndex(index);
    setShowPreview(true);
  }, []);

  const hidePreview = useCallback(() => setShowPreview(false), []);

  // Body scroll lock (SSR-safe)
  useEffect(() => {
    if (!showPreview) return;
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showPreview]);

  const breakpointColumnsObj = {
    default: 3,
    800: 2,
  };

  return (
    <div className="main">
      {showPreview && (
        <Preview
          hidePreview={hidePreview}
          galleryData={galleryData}
          currentIndex={currentIndex}
        />
      )}
      <section className="section-gallery section">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {galleryData.map((edge, index) => {
            const media = edge.node;
            const title = media.context?.custom?.caption || "";
            const year = media.context?.custom?.Year || "";
            const size = media.context?.custom?.Size || "";
            const status = media.context?.custom?.Status || "";

            // Cloudinary: pass the actual gatsbyImageData field
            const imageData = getImage(media?.gatsbyImageDataThumb);
            const fallbackSrc = media?.secure_url;

            const onActivate = () => openPreview(index);
            const onKeyDown = (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onActivate();
              }
            };

            // Prefer a stable unique key, e.g., public_id or secure_url
            const key = media.public_id || media.secure_url || index;

            return (
              <div
                className="thumb"
                key={key}
                role="button"
                tabIndex={0}
                onClick={onActivate}
                onKeyDown={onKeyDown}
                aria-label={title ? `Open: ${title}` : "Open image"}
              >
                {imageData ? (
                  <GatsbyImage
                    image={imageData}
                    className="card-img"
                    alt={title || "Artwork"}
                  />
                ) : fallbackSrc ? (
                  <img
                    src={fallbackSrc}
                    alt={title || "Artwork"}
                    className="card-img"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                ) : (
                  <div className="card-img fallback">Image unavailable</div>
                )}

                <div className="caption">
                  {[title, year].filter(Boolean).join(", ")}
                  {size && ` (${size})`}
                  {status && ` – ${status}`}
                </div>
              </div>
            );
          })}
        </Masonry>
      </section>
      <ReturnToTop />
    </div>
  );
};

export default Gallery;
