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
                      className="test-class"
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
                My name is Chris Macleod, the artist behind ChrisMacleodArt, and
                I would love to share a little bit of my journey growing as a
                wildlife artist with you! First, a little about myself. I am 19
                years old, and am currently studying Biology at the University
                of Guelph. I love any opportunity to be able to mesh two of my
                main passions - animals and art together, which is why I focus
                of incorporating wildlife into my work. Though I am studying
                biology, would love to continue growing in my passion for art
                into something more!
              </p>
              <p className="contact-text">
                I have always been passionate about art and animals, birds in
                particular, which are my main subject matter. For me, art has
                always been something I go to to reflect, spend time with God,
                and take time to admire the incredible detail found within
                wildlife (and creation in general), which I try to mirror in my
                drawings.
              </p>
              <p className="contact-text">
                I started drawing when I was about 11, in 2013, using pencil
                crayons. I remember my first realism drawing - a red fox, and I
                fell in love with the style. I progressed and started using
                chalk pastels. I love using chalk pastels - they are quick and
                fun, but can still be used to get incredible detail and
                life-like textures. While I work in realism, I still incorporate
                the principles and elements of design found with nature:
                lighting, line, shape, form, texture etc. found in natural
                elements like feathers, fur, bark and leaves. Each of my
                drawings is time consuming and detailed - each tiny detail is
                addressed, and the animals are drawn as they would be in their
                natural habitats. I have also recently had the amazing honour of
                having one of my pieces, 'Red Phase Eastern Screech Owl',
                critiqued in person by renowned wildlife artist Robert Bateman.
                It was an incredible experience, and extremely encouraging, as
                Mr. Bateman stated, "this piece was done by a talented person,
                with a nice feeling of reality".
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
