// import React, { useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// import "./Slideshow.css";
// // import { Link } from "react-scroll";
// import LinkButton from "../UIComponents/LinkButton";
// import SliderDots from "../UIComponents/SliderDots";

// function importAll(r) {
//   return r.keys().map(r);
// }

// const Slideshow = () => {
//   const slideImgFiles = importAll(
//     require.context("../images/slideshow-images", false, /\.(png|jpe?g|svg)$/)
//   );

//   let startingIndex = 1;
//   let [currentIndex, setIndex] = useState(startingIndex);

//   const nextSlide = () => {
//     currentIndex == slideImgFiles.length - 1
//       ? (currentIndex = 0)
//       : currentIndex++;
//     console.log("Next slide " + currentIndex);
//     setIndex(currentIndex);
//   };

//   const prevSlide = () => {
//     currentIndex == 0
//       ? (currentIndex = slideImgFiles.length - 1)
//       : currentIndex--;
//     console.log("Prev slide " + currentIndex);
//     setIndex(currentIndex);
//   };

//   // const goToSlide = (slide) => {
//   //   currentIndex = slide;
//   //   setIndex(currentIndex);
//   //   console.log("activeted " + slide);
//   // };

//   let file = slideImgFiles[currentIndex];
//   let pieceName = file.substring(file.lastIndexOf("/") + 1, file.indexOf("."));

//   return (
//     <section className="section-slideshow">
//       {/* <div className="piece-name">{pieceName}</div> */}
//       <div className="slider">
//         {/* Create featured folder to contain newest images */}
//         <img className="header-img" src={file} alt="Piece 1" />
//         <button className="slider__btn slider__btn--left" onClick={prevSlide}>
//           <FontAwesomeIcon icon={faAngleLeft} />
//         </button>
//         <button className="slider__btn slider__btn--right" onClick={nextSlide}>
//           <FontAwesomeIcon icon={faAngleRight} />
//         </button>
//         <div className="dots">
//           <SliderDots
//             length={slideImgFiles}
//             changeIndex={(index) => setIndex(index)}
//           />
//         </div>
//       </div>
//       {/* <Link to="gallery" spy={true} smooth={true} offset={500} duration={500}>
//         <LinkButton name="Gallery" />
//       </Link> */}
//     </section>
//   );
// };

// export default Slideshow;
