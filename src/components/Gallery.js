import React, { useState, useEffect } from "react";
import "./Gallery.css";
import ReturnToTop from "../UIComponents/ReturnToTop";
import Preview from "./Preview";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Gallery = ({ data }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const galleryData = data?.allCloudinaryMedia.edges;

  useEffect(() => {
    if (selectedMedia) {
      const index = data.allCloudinaryMedia.edges.findIndex(
        (edge) => edge.node.secure_url === selectedMedia.secure_url
      );
      setCurrentIndex(index);
      setShowPreview(true);
    }
  }, [selectedMedia]); // Trigger the effect whenever selectedMedia changes

  const openPreview = (media) => {
    setSelectedMedia(media);
    document.body.style.overflow = "hidden";
  };

  const hidePreview = () => {
    setShowPreview(false);
    setSelectedMedia(null);
    document.body.style.overflow = "auto";
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
        <div className="collection">
          {data?.allCloudinaryMedia.edges.map((edge, index) => {
            const media = edge.node;
            const title = media.context?.custom?.caption || "";
            const image = getImage(media);
            const size = media?.context?.custom?.Size || "";
            const year = media?.context?.custom?.Year || "";
            return (
              <div
                className="thumb"
                key={index}
                onClick={() => openPreview(media)}
              >
                <GatsbyImage
                  image={image}
                  className="card-img"
                  alt={title ? title : "Image"}
                />
                <div className="caption">
                  {title && title}
                  {year && (title ? `, ${year}` : year)}
                  {size && (title || year) ? ` (${size})` : size}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <ReturnToTop />
    </div>
  );
};

export default Gallery;
