import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./FramedImage.css";

const FramedImage = ({ image, alt }) => {
  return (
    <div className="frame">
      <div className="border">
        <GatsbyImage
          image={getImage(image)}
          alt={alt}
          className="inner-image"
        />
      </div>
    </div>
  );
};

export default FramedImage;
