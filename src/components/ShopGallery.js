import React, { useState, useMemo, useCallback, useEffect } from "react";
import "./ShopGallery.css";
import ReturnToTop from "../UIComponents/ReturnToTop";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { X } from "lucide-react";

const ShopGallery = ({ data, showStatus = true }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [fullResLoaded, setFullResLoaded] = useState(false);

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
      return createdB - createdA;
    });
  }, [data]);

  const openItemModal = useCallback((media) => {
    setFullResLoaded(false);
    setSelectedItem(media);
    document.body.style.overflow = "hidden";
  }, []);

  const closeItemModal = useCallback(() => {
    setSelectedItem(null);
    document.body.style.overflow = "";
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!selectedItem) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") closeItemModal();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [selectedItem, closeItemModal]);

  if (!galleryData.length) {
    return (
      <div className="shop-main">
        <div className="empty">No products to display.</div>
      </div>
    );
  }

  return (
    <div className="shop-main">
      {/* Inquiry Banner */}
      <div className="shop-banner">
        <p>
          Interested in a piece? <a href="/contact">Contact me</a> to inquire
          about availability and pricing.
        </p>
      </div>

      {/* Item Modal */}
      {selectedItem && (
        <div className="shop-modal-overlay" onClick={closeItemModal}>
          <div className="shop-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="shop-modal-close"
              onClick={closeItemModal}
              aria-label="Close"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            <div className="shop-modal-body">
              <div className="shop-modal-image-wrap">
                <img
                  src={
                    selectedItem.gatsbyImageDataThumb?.images?.fallback?.src ||
                    selectedItem.secure_url
                  }
                  alt={selectedItem.context?.custom?.caption || "Artwork"}
                  className={
                    "shop-modal-img shop-modal-img-thumb" +
                    (fullResLoaded ? " hidden" : "")
                  }
                />
                <img
                  src={
                    selectedItem.secure_url?.includes("/upload/")
                      ? selectedItem.secure_url.replace(
                          "/upload/",
                          "/upload/f_auto,q_80,w_900,c_limit/"
                        )
                      : selectedItem.secure_url
                  }
                  alt={selectedItem.context?.custom?.caption || "Artwork"}
                  className={
                    "shop-modal-img shop-modal-img-full" +
                    (fullResLoaded ? " loaded" : "")
                  }
                  onLoad={() => setFullResLoaded(true)}
                />
              </div>

              <div className="shop-modal-info">
                <h3>{selectedItem.context?.custom?.caption || "Untitled"}</h3>
                <div className="shop-modal-details">
                  {selectedItem.context?.custom?.Year && (
                    <span>{selectedItem.context.custom.Year}</span>
                  )}
                  {selectedItem.context?.custom?.Size && (
                    <span>{selectedItem.context.custom.Size}</span>
                  )}
                  {selectedItem.context?.custom?.Medium && (
                    <span>{selectedItem.context.custom.Medium}</span>
                  )}
                </div>
                {showStatus && selectedItem.context?.custom?.Status && (
                  <p className="shop-modal-status">
                    {selectedItem.context.custom.Status.charAt(0) +
                      selectedItem.context.custom.Status.slice(1).toLowerCase()}
                  </p>
                )}
                {selectedItem.context?.custom?.Price && (
                  <p className="shop-modal-price">
                    ${selectedItem.context.custom.Price}
                  </p>
                )}
                <a href="/contact" className="shop-inquiry-btn">
                  Inquire About This Piece
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="shop-collection">
        {galleryData.map((edge, index) => {
          const media = edge.node;
          const title = media.context?.custom?.caption || "";
          const size = media.context?.custom?.Size || "";
          const medium = media.context?.custom?.Medium || "";
          const price = media.context?.custom?.Price || "";

          const imageData = getImage(media?.gatsbyImageDataThumb);
          const fallbackSrc = media?.secure_url;

          const onActivate = () => openItemModal(media);
          const onKeyDown = (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onActivate();
            }
          };

          const key = media.public_id || media.secure_url || index;

          return (
            <div
              className="shop-thumb"
              key={key}
              role="button"
              tabIndex={0}
              onClick={onActivate}
              onKeyDown={onKeyDown}
              aria-label={title ? `View: ${title}` : "View artwork"}
            >
              <div className="shop-card-img-wrapper">
                {imageData ? (
                  <GatsbyImage
                    image={imageData}
                    alt={title || "Artwork"}
                    className="shop-card-img"
                    imgStyle={{ objectFit: "contain" }}
                    loading="lazy"
                  />
                ) : fallbackSrc ? (
                  <img
                    src={fallbackSrc}
                    alt={title || "Artwork"}
                    className="shop-card-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="card-img fallback">Image unavailable</div>
                )}
              </div>

              <div className="shop-caption">
                <span className="shop-title">{title || "Untitled"}</span>
                {(size || medium) && (
                  <span className="shop-meta">
                    {[medium, size].filter(Boolean).join(" · ")}
                  </span>
                )}
                {price && <span className="shop-price">${price}</span>}
              </div>
            </div>
          );
        })}
      </div>

      <ReturnToTop />
    </div>
  );
};

export default ShopGallery;
