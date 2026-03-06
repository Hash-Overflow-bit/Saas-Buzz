import React from "react";
import "./AuthForm.css";

const AuthForm = ({ onSubmit, children, className }) => {
  return (
    <form onSubmit={onSubmit} className={`auth-form ${className || ""}`}>
      {children}
    </form>
  );
};

export default AuthForm;
