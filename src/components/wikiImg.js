import React, { useState, useEffect } from "react";
import "./wikiImg.css";

const WikiImg = () => {
  const [speciesImg, setSpeciesImg] = useState("");

  // 1. Get Main species image file
  const speciesName = "Orca";
  let imgFile;
  let mediaFile;
  let mapFile;

  // 1. Get species img file
  const imgFileQuery = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=${encodeURIComponent(
    speciesName
  )}&formatversion=2&piprop=name&origin=*`;

  const mediaFileQuery = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=${encodeURIComponent(
    speciesName
  )}&formatversion=2&piprop=original&origin=*`;

  // 2. Get species img url
  const imgUrlQuery = (file) =>
    `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=imageinfo&list=&titles=${file}&formatversion=2&iiprop=url&iiurlwidth=300`;

  Promise.all([
    fetch(imgFileQuery)
      .then((response) => response.json())
      .then((data) => {
        imgFile = "File:" + data.query.pages[0].pageimage;
      })
      .catch((error) => console.error("Error fetching data:", error)),
    fetch(mediaFileQuery)
      .then((response) => response.json())
      .then((data) => {
        mediaFile = data.query.pages[0].original.source;
        console.log("Media File URL:", mediaFile);
      })
      .catch((error) => console.error("Error fetching data:", error)),
  ])
    .then(() => {
      // Ensure imgFile is defined before using it
      if (imgFile) {
        fetch(imgUrlQuery(imgFile))
          .then((response) => response.json())
          .then((data) => {
            const img = data.query.pages[0].imageinfo[0].thumburl;
            console.log(img);
            setSpeciesImg(img);
          })
          .catch((error) => console.error("Error fetching data:", error));
      }
    })
    .catch((error) => console.error("Error in Promise.all:", error));

  return (
    <div className="species-info-container">
      <h1>{speciesName}</h1>
      <p>Conservation Status</p>
      <p>Map</p>
      <div className="species-img-container">
        <img className="species-photo" src={speciesImg} />
        <img className="species-map" src={speciesImg} />
      </div>
    </div>
  );
};

export default WikiImg;
