import React from "react";

import "./LinkButtonB.css";

const LinkButtonB = (props) => {
  return (
    <div className="button-container-b">
      <nav className="cl-effect-8">
        <a href={props.href} target={props.target}>
          {props.name} {} {props.children}
        </a>
      </nav>
    </div>
  );
};

export default LinkButtonB;
