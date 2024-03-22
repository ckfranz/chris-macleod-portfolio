import React from "react";

import Layout from "../components/Layout";
// import BasicPage from "../components/CloudinaryImages";

import "./about.css";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  AdvancedImage,
  CloudinaryContext,
  Cloudinary,
} from "@cloudinary/react"; // Import CloudinaryContext

import Img from "gatsby-image";
import Gallery from "../components/Gallery";
import { CloudinaryImage } from "@cloudinary/url-gen";
import CloudinaryImages from "../components/CloudinaryImages";
// import ImgTemplate from "../templates/ImgTemplate";

const About = ({ data }) => {
  // if (!data || !data.cloudinaryMedia) {
  //   console.log("no image found");
  // }
  // const image = getImage(data.cloudinaryMedia);

  return (
    <Layout>
      <div className="page-container">
        <div>
          {/* <h2>About</h2> */}
          <div className="about-container">
            <div className="about-img-container">
              {data.allCloudinaryMedia.nodes.map((media, index) => {
                // console.log(media + " : " + index);
                const image = getImage(media);
                return (
                  <div key={index}>
                    <GatsbyImage
                      key={index}
                      image={image}
                      alt="img-name"
                      className="about-img"
                      // style={{
                      //   objectFit: "contain",
                      //   width: "100px",
                      //   height: "100%",
                      // }}
                    />
                  </div>
                );
              })}
            </div>
            {/* <p className="contact-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              obcaecati maiores laudantium neque quisquam placeat, beatae
              laborum, nemo, non sequi deserunt enim iure praesentium reiciendis
              quas reprehenderit blanditiis totam consectetur. Iure laudantium
              saepe iste nostrum ratione eos nulla vel consectetur, fugit
              commodi natus, consequatur deserunt delectus, eligendi vero.
              Totam, libero.
            </p> */}
            <div className="bio">
              <p className="contact-text">
                Chris Macleod, born in 2001, is a Canadian wildlife artist based
                primarily in Guelph, ON. In the style of realism and
                impressionism, Chris creates lifelike works of art primarily
                using chalk pastel or watercolour, occasionally using acrylic
                paint paired with coloured pencils. Demonstrated through a
                childhood spent outdoors and a Bachelor of Science degree with a
                major in biology, Chris is passionate about nature and wildlife.
                This passion is where Chris draws much of his artistic
                inspiration from and is reflected in the detailed depictions of
                wildlife that he creates. Notably, Chris had the privilege of
                having his work critiqued by renowned wildlife artist Robert
                Bateman, who praised his talent and realistic portrayal. Chris
                continues to pursue his passion for wildlife art, seeking to
                capture the beauty and intricacies of the natural world in his
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

// const query = graphql`
//   query {
//     cloudinaryMedia(public_id: { eq: "spices" }) {
//       gatsbyImageData(width: 300, placeholder: BLURRED)
//     }
//   }
// `;

export const query = graphql`
  query {
    allCloudinaryMedia(
      filter: { public_id: { glob: "ChrisPortfolio/About/*" } }
    ) {
      nodes {
        public_id
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;
