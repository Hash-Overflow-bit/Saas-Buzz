import React from "react";
import "./Button.css";

const Button = ({ label, onClick, className, type = "button", ...rest }) => {
  return (
    <button type={type} onClick={onClick} className={className} {...rest}>
      {label}
    </button>
  );
};

export default Button;
