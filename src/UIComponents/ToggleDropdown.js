import React, { useState } from "react";

const ToggleDropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggle-dropdown">
      <div className="dropdown-header" onClick={toggleOpen}>
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default ToggleDropdown;
