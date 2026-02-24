import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./forgetpassword.css";

import { Link } from "react-router-dom";

function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [isSendingResetLink, setIsSendingResetLink] = useState(true);
  const [message, setMessage] = useState("");

  const HanldeForgetpassword = () => {
    setMessage(
      "If you have an account with us, a password reset link will be sent to your email.",
    );
    setIsSendingResetLink(false);
  };

  return (
    <div className="forget-main-container">
      {/* effect images-container */}
      <div className="forget-effects-img-main-container">
        <div className="forget-top-effect">
          <div className="forget-top-left-img"></div>
        </div>

        <div className="forget-left-middle-effect"></div>

        <div className="forget-right-middle-effect"></div>
      </div>

      {/* Forget Password Form */}
      <div className="forget-form-main-container">
        <div className="forget-form-heading">Forgot Password?</div>

        <form onSubmit={handleSubmit(onSubmit)} className="forget-form">
          {isSendingResetLink ? (
            <>
              <div className="forget-form-group">
                <div className="forget-input-wrapper">
                  <input
                    type="email"
                    id="forget-email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <img
                    src="/Images/Mail.svg"
                    alt="Mail icon"
                    className="forget-input-icon"
                    width="18"
                    height="18"
                  />
                </div>
                {errors.email && (
                  <span className="forget-error-msg">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="forget-submit-btn"
                onClick={HanldeForgetpassword}
              >
                <p>SEND RESET LINK</p>
              </button>
            </>
          ) : (
            <div className="successfull-message-send">
              <svg
                className="forget-success-icon"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11.25"
                  stroke="#367B53"
                  strokeWidth="0.75"
                  fill="transparent"
                />
                <path
                  d="M7 12L10.5 15.5L17 9"
                  stroke="#367B53"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="forget-success-text">{message}</p>
            </div>
          )}
        </form>

        <div className="Rememberpassword">
          <p>
            Remember your password ? <Link to="/login">Back to Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
