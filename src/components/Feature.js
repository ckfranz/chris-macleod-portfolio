import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDollar,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

// import { prominent } from "color.js";
// import { average } from "color.js";

import { Link } from "gatsby";

import "./Feature.css";
// import { Link } from "react-scroll";
import LinkButtonB from "../UIComponents/LinkButtonB";
import Gallery from "./Gallery";
import Slideshow from "./Slideshow";

const Feature = (props) => {
  let [avgColour, setAvgColour] = useState("");

  // average("hi-res-images/Test-Image-2.jpg", { sample: 50 }).then((color) => {
  //   setAvgColour("rgba(" + color.join(",") + ",0.2)");
  //   console.log(avgColour);
  // });
  // useEffect(() => {
  //   prominent("hi-res-images/Test-Image-2.jpg", {
  //     amount: 5,
  //     group: 10,
  //     sample: 50,
  //   }).then((color) => {
  //     setAvgColour("rgba(" + color[0].join(",") + ",1)");
  //     console.log(avgColour); // [241, 221, 63]
  //   });
  // }, []);

  return (
    <section className="section-feature">
      {/* <div style={{ backgroundColor: avgColour[0] }}></div> */}
      {/* <div style={{ backgroundColor: avgColour[1] }}></div>
      <div style={{ backgroundColor: avgColour[2] }}></div>
      <div style={{ backgroundColor: avgColour[3] }}></div>
      <div style={{ backgroundColor: avgColour[4] }}></div> */}
      <div className="feature-block">
        {/* <Slideshow className="feature-img" /> */}
        <img
          className="feature-img"
          src="hi-res-images/Test-Image-2.jpg"
          alt="Piece 1"
        />
        {/* <div className="feature-container"></div> */}

        <div className="feature-memo">
          {/* <div className="feature-memo" style={{ background: avgColour }}> */}
          <div>{props.children}</div>
          {/* <button
            className="hollow-button"
            href="https://www.etsy.com"
            target="_blank"
          >
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Feature;
