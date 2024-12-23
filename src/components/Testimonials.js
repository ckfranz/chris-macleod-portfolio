import React, { useState, useEffect, useRef } from "react";
import "./Testimonials.css";
import FramedImage from "./FramedImage";

const Testimonials = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideTiming = 7000; // ms
  const timerRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    restartTimer(); // Restart the timer when a dot is clicked
  };

  const restartTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current); // Clear the existing timer
    }
    timerRef.current = setInterval(handleNext, slideTiming); // Start a new timer
  };

  useEffect(() => {
    timerRef.current = setInterval(handleNext, slideTiming);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current); // Clean up on unmount
      }
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((testimonial, index) => {
            const { node } = testimonial;
            const image = node || {};

            return (
              <div key={index} className="carousel-slide">
                <FramedImage image={image} alt={`Framed Image ${index + 1}`} />
                <div className="testimonial-content">
                  <blockquote>
                    {'"' + node?.context?.custom?.Testimonial + '"' ||
                      "No testimonial available"}
                  </blockquote>
                  {/* <cite>- {testimonial.name || "Anonymous"}</cite> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
