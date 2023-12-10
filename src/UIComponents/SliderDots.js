import React from "react";

import "./SliderDots.css";
import Slideshow from "../components/Slideshow";

const SliderDots = (props) => {
  const clicked = () => {
    // Syle button to be activated
    console.log("Slider ");
  };

  return (
    <div>
      {props.length.map((item, index) => {
        return (
          <button
            className="dots__dot"
            data-slide={index}
            onClick={() => props.changeIndex(index)}
          ></button>
        );
      })}

      {/* <button className="dots__dot" data-slide="${i}"></button>
      <button
        className="dots__dot dots__dot--active"
        data-slide="${i}"
      ></button> */}
    </div>
  );
};

export default SliderDots;
