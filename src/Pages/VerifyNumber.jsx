import React from "react";
import { Controller, useForm } from "react-hook-form";
import "./VerifyNumber.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function VerifyNumber() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Regex to allow +, digits, spaces, dots, hyphens, parentheses
  const phoneRegex = /^\+?[\d\s().-]{6,20}$/;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="verifynumber-main-container">
      {/* effect images-container */}
      <div className="verifynumber-effects-img-main-container">
        <div className="verifynumber-top-effect">
          <img
            src="/Images/top-left.svg"
            alt="top-left"
            className="verifynumber-top-left-img"
          />
        </div>

        <div className="verifynumber-left-middle-effect">
          <img src="/public/Images/left middle.svg" alt="" />
        </div>

        <div className="verifynumber-right-middle-effect">
          <img src="/public/Images/right.svg" alt="" />
        </div>
      </div>

      {/* VerifyNumber-form */}

      <div className="verifynumber-form-main-container">
        <div className="verifynumber-form-heading">Verify Your Number</div>

        <form onSubmit={handleSubmit(onSubmit)} className="verifynumber-form">
          {/* <div className="verifynumber-verification-heading">
            <p>Enter the code we just sent you</p>
          </div> */}

          <div className="verifynumber-phone-number">
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: "Phone Number is Required",
                minLength: { value: 6, message: "Enter correct Number" },
                pattern: {
                  value: phoneRegex,
                  message: "Enter a valid phone number format",
                },
                validate: (value) => {
                  // Count only digits
                  const digits = value.replace(/\D/g, "");
                  return digits.length >= 6 && digits.length <= 15
                    ? true
                    : "Phone number must have 6-15 digits";
                },
              }}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  country={"us"}
                  enableSearch
                  inputClass="verifynumber-phone-input"
                  containerClass="verifynumber-phone-container verifynumber-phone-rtl"
                  buttonClass="verifynumber-phone-button"
                  dropdownClass="verifynumber-phone-dropdown"
                />
              )}
            />
            {errors.phoneNumber && (
              <span className="verifynumber-error-msg">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>

          <div className="verifynumber-verification-heading verifynumber-verification-left">
            <p>Enter the code we just sent you</p>
          </div>

          {/* OTP innput fields */}
          <div className="otp-container">

            
          </div>

          <button type="submit" className="verifynumber-submit-btn">
            <p>Verify Number</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyNumber;
