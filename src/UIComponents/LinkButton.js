import React from "react";

import "./LinkButton.css";

const LinkButton = (props) => {
  return (
    <div className="button-container">
      <nav className="cl-effect-3">
        <a href={props.href}>
          {props.name}
          {} {props.children}
        </a>
      </nav>
    </div>
  );
};

export default LinkButton;
