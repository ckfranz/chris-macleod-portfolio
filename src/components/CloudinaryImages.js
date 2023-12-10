// import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import {
//   AdvancedImage,
//   CloudinaryContext,
//   Cloudinary,
// } from "@cloudinary/react"; // Import CloudinaryContext

// import Img from "gatsby-image";

// const BasicPage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allCloudinaryMedia {
//         nodes {
//           gatsbyImageData(width: 300, placeholder: BLURRED)
//         }
//       }
//     }
//   `);
//   console.log(data);
//   return (
//     <div>
//       {data.allCloudinaryMedia.nodes.map((media, index) => {
//         console.log(media + " : " + index);
//         const image = getImage(media);
//         return (
//           <GatsbyImage
//             key={index}
//             image={image}
//             className="about-img"
//             alt="img-name"
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default BasicPage;
