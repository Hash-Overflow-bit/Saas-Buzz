import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Signup.css";
import InputFields from "../components/InputFields/InputFields";
import Button from "../components/Button/Button";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const showIcon = (
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
  );

  const hideIcon = (
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
  );

  return (
    <div className="signup-main-container">
      {/* effect images-container */}
      <div className="signup-effects-img-main-container">
        <div className="signup-top-effect">
          <div className="signup-top-left-img"></div>
        </div>
        <div className="signup-left-middle-effect"></div>
        <div className="signup-right-middle-effect"></div>
      </div>

      {/* Signup-form */}
      <div className="signup-form-main-container">
        <div className="signup-form-heading">Get Started in Seconds</div>

        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <div className="signup-google-auth-containe">
            <button className="signup-auth" type="button">
              <img
                src="/Images/google.svg"
                alt="Google Logo"
                width={20.25}
                height={20.25}
              />
              <span>Sign up With Google</span>
            </button>

            {/* divider */}
            <div className="signup-divider">
              <span>or</span>
            </div>
            {/* inputs */}
          </div>

          <div className="signup-form-group">
            <InputFields
              type="email"
              id="email"
              placeholder="Enter your email"
              icon="/Images/Mail.svg"
              error={errors.email?.message}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>

          <div className="signup-form-group">
            <InputFields
              type="password"
              id="password"
              placeholder="Create a password"
              showIcon={showIcon}
              hideIcon={hideIcon}
              error={errors.password?.message}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
          </div>

          <Button type="submit" label="Sign Up" className="signup-submit-btn" />
        </form>

        <div className="signup-policy-container">
          <p>
            By creating account you agree to our{" "}
            <span className="signup-policy-link">Terms</span> &{" "}
            <span className="signup-policy-link">Privacy Policy</span>
          </p>
        </div>

        <div className="already-have-account-container">
          <p>
            Already have an account? <Link to="/Login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
