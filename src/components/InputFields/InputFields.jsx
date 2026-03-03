import React, { useState } from "react";
import "./InputFields.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const InputFields = ({
  label,
  placeholder = "",
  type = "text",
  icon,
  error,
  disabled = false,
  onIconClick,
  id,
  showIcon,
  hideIcon,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const currentType = isPassword ? (showPassword ? "text" : "password") : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="inputfield-main-container">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      <div className="input-wrapper">
        <input
          id={id}
          type={currentType}
          placeholder={placeholder}
          disabled={disabled}
          className="input-field"
          {...rest}
        />
        {isPassword ? (
          <div
            className="input-icon"
            onClick={togglePasswordVisibility}
            style={{ cursor: "pointer" }}
          >
            {showPassword ? hideIcon || <FiEyeOff /> : showIcon || <FiEye />}
          </div>
        ) : (
          icon && (
            <div
              className="input-icon"
              onClick={onIconClick}
              style={{ cursor: onIconClick ? "pointer" : "default" }}
            >
              {typeof icon === "string" ? <img src={icon} alt="icon" /> : icon}
            </div>
          )
        )}
      </div>
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default InputFields;
