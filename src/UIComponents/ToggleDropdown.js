import React, { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./ToggleDropdown.css";

const ToggleDropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggle-dropdown">
      <div className="dropdown-header" onClick={toggleOpen}>
        <span>{title}</span>
        {/* <span>{isOpen ? "-" : "+"}</span> */}
        {isOpen ? (
          <i className="bi bi-chevron-down" />
        ) : (
          <i className="bi bi-chevron-right" />
        )}
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default ToggleDropdown;
