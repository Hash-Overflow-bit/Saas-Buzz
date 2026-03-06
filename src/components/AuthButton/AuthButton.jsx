import React from "react";
import "./AuthButton.css";

function AuthButton({ label }) {
  return (
    <div className="auth-button-container">
      <button className="auth-btn" type="button">
        <img
          src="/Images/google.svg"
          alt="Google Logo"
          width={20.25}
          height={20.25}
        />
        <span>{label}</span>
      </button>

      {/* divider */}
      <div className="auth-divider">
        <span>or</span>
      </div>
    </div>
  );
}

export default AuthButton;
