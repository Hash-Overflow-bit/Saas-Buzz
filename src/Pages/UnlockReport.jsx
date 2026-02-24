import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./UnlockReport.css";

function UnlockReport() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="unlockreport-main-container">
      {/* effect images-container */}
      <div className="unlockreport-effects-img-main-container">
        <div className="unlockreport-top-effect">
          <div className="unlockreport-top-left-img"></div>
        </div>

        <div className="unlockreport-left-middle-effect"></div>

        <div className="unlockreport-right-middle-effect"></div>
      </div>

      {/* UnlockReport-form */}

      <div className="unlockreport-form-main-container">
        <div className="unlockreport-form-heading">Unlock You Free Report</div>

        <form onSubmit={handleSubmit(onSubmit)} className="unlockreport-form">
          <div className="unlockreport-form-group">
            <div className="unlockreport-input-wrapper">
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="unlockreport-input-icon"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" fill="black" stroke="none" />
              </svg>
            </div>
            {errors.name && (
              <span className="unlockreport-error-msg">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="unlockreport-form-group">
            <div className="unlockreport-input-wrapper">
              <input
                type="email"
                id="email"
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
                className="unlockreport-input-icon"
                width="18"
                height="18"
              />
            </div>
            {errors.email && (
              <span className="unlockreport-error-msg">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="unlockreport-form-group">
            <div className="unlockreport-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Create a password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                className="unlockreport-eye-icon-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#999"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#999"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" fill="#999" />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && (
              <span className="unlockreport-error-msg">
                {errors.password.message}
              </span>
            )}
          </div>

          <button type="submit" className="unlockreport-submit-btn">
            <p>Unlock Report</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default UnlockReport;
