import React from "react";
import { useForm } from "react-hook-form";
import "./UnlockReport.css";
import AuthForm from "../components/AuthForm/AuthForm";
import InputFields from "../components/InputFields/InputFields";
import Button from "../components/Button/Button";
import Effect from "../components/BackgraoudTemplaeEffect/Effect";

function UnlockReport() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const nameIcon = (
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
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" fill="black" stroke="none" />
    </svg>
  );

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
    <div className="unlockreport-main-container">
      <Effect />
      {/* UnlockReport-form */}
      <div className="unlockreport-form-main-container">
        <div className="unlockreport-form-heading">Unlock You Free Report</div>

        <AuthForm
          onSubmit={handleSubmit(onSubmit)}
          className="unlockreport-form"
        >
          <div className="unlockreport-form-group">
            <InputFields
              type="text"
              id="name"
              placeholder="Enter your name"
              icon={nameIcon}
              error={errors.name?.message}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
          </div>

          <div className="unlockreport-form-group">
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

          <div className="unlockreport-form-group">
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

          <Button
            type="submit"
            label="Unlock Report"
            className="unlockreport-submit-btn"
          />
        </AuthForm>
      </div>
    </div>
  );
}

export default UnlockReport;
