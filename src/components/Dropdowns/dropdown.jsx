import React, { useState } from "react";
import "./dropdown.css";
import { RiArrowDropDownLine } from "react-icons/ri";

function Dropdown({ options, trigger, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`dropdown-container ${className}`}>
      <div className="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
        {trigger} <RiArrowDropDownLine />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => {
                if (option.onClick) option.onClick();
                setIsOpen(false);
              }}
            >
              {option.icon && <span className="dropdown-item-icon">{option.icon}</span>}
              <span className="dropdown-item-label">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;