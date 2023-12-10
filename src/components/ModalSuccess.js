import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlane } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"; // Using the regular version

import "./ModalSuccess.css";

const ModalSuccess = ({ onClose }) => {
  return (
    <div id="myModal" className="modal fade">
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div className="modal-header">
            <FontAwesomeIcon icon={faPaperPlane} size="2xl" />
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faXmark} size="2xl" />
            </button>
          </div>
          <div className="modal-body text-center">
            <h4>Thank you!</h4>
            <p>Your message has been sent.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;
