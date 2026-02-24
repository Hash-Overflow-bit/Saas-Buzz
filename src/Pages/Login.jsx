import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
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
    <div className="login-main-container">
      {/* effect images-container */}
      <div className="effects-img-main-container">
        <div className="top-effect">
          <img
            src="/Images/top-left.svg"
            alt="top-left"
            className="top-left-img"
          />
        </div>

        <div className="left-middle-effect">
          <img src="/Images/left middle.svg" alt="" />
        </div>

        <div className="right-middle-effect">
          <img src="/Images/right.svg" alt="" />
        </div>
      </div>

      {/* Login-form */}

      <div className="form-main-container">
        <div className="form-heading">Welcome back</div>

        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div className="google-auth-containe">
            <button className="auth">
              <img
                src="/Images/google.svg"
                alt="Google Logo"
                width={20.25}
                height={20.25}
              />
              <span>Login With Google</span>
            </button>

            {/* divider */}

            <div className="divider">
              <span>or</span>
            </div>

            {/* inputs */}
          </div>

          <div className="form-group">
            {/* <label htmlFor="email">Email</label> */}
            <div className="input-wrapper">
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
                className="input-icon"
                width="18"
                height="18"
              />
            </div>
            {errors.email && (
              <span className="error-msg">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            {/* <label htmlFor="password">Password</label> */}
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
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
                className="eye-icon-btn"
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
              <span className="error-msg">{errors.password.message}</span>
            )}
          </div>

          {/* Forget password link */}
          <div className="forget-password-container">
            <p>
              <Link to="/forgetpassword" className="text-blue-500 underline">
                Forgot you password?
              </Link>
            </p>
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>

        <div className="dont-have-account-container ">
          <p>
            Don't have an account? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
