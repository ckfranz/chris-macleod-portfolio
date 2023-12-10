import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./ModalSuccess.css";

const ModalSuccess = () => {
  return (
    <div className="commision-info">
      <h1>How to Commission</h1>
      <h2>Photograph</h2>
      <p>
        PHOTOGRAPH Most pet portrait commissions are created from photographs.
        Where possible I like to take my own photos but I can work from those
        supplied. Permission in writing to use the photo must be supplied at the
        time of commission by the copyright owner.
      </p>
      <p>
        Photographs need to be clear and in focus. The best images are those
        taken at eye level with front natural lighting.
      </p>
      <h2>Process</h2>
      <p>
        Once a commission is accepted the next stage is to decide the size of
        the work and background colour. I’m happy to include more than one pet
        in a composition and pricing reflects the complexity of the work. I want
        the finished work to capture much more than a photo so the more
        information I have of a pet’s character the better the result. At this
        stage I ask for a non refundable 50% deposit.
      </p>
      <h2>Completed Work</h2>
      <p>
        Once completed I will email an image of the finished work. Once the
        balance of payment is received I will send your completed portrait for
        you to frame to your own taste.
      </p>
    </div>
  );
};

export default ModalSuccess;
