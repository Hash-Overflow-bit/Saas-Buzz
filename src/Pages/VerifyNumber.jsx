import React, { useRef, useState } from "react";
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

  // Create refs for OTP inputs
  const otpRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // State to store OTP values
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    // Only allow single digit
    const newValue = value.slice(-1);

    if (!/^\d*$/.test(newValue)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = newValue;
    setOtp(newOtp);

    // Clear error when user starts typing
    if (otpError) setOtpError("");

    // Auto-focus next input
    if (newValue && index < 4) {
      otpRefs[index + 1].current.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  // Regex to allow +, digits, spaces, dots, hyphens, parentheses
  const phoneRegex = /^\+?[\d\s().-]{6,20}$/;

  const onSubmit = (data) => {
    const otpValue = otp.join("");

    // Validate OTP - check if all fields are filled
    if (otpValue.length < 5) {
      setOtpError("Please enter all 5 digits of the OTP code");
      return;
    }

    // Check if OTP contains only numbers
    if (!/^\d{5}$/.test(otpValue)) {
      setOtpError("OTP must contain only numbers");
      return;
    }

    console.log({ ...data, otp: otpValue });
  };

  return (
    <div className="verifynumber-main-container">
      {/* effect images-container */}
      <div className="verifynumber-effects-img-main-container">
        <div className="verifynumber-top-effect">
          <div className="verifynumber-top-left-img"></div>
        </div>

        <div className="verifynumber-left-middle-effect"></div>

        <div className="verifynumber-right-middle-effect"></div>
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
                  disableDropdown={true}
                  countryCodeEditable={true}
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

          {/* OTP input fields */}
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={otpRefs[index]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="otp-input"
                style={{
                  width: "65.25px",
                  height: "67.5px",
                  borderRadius: "18.75px",
                  background: "#FAFAFA",
                  opacity: 1,
                  border: otpError ? "2px solid #ff4d4d" : "1px solid #E0E0E0",
                  textAlign: "center",
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontWeight: "400",
                  fontStyle: "normal",
                  fontSize: "48px",
                  lineHeight: "22.5px",
                  letterSpacing: "0%",
                }}
              />
            ))}
          </div>
          {otpError && (
            <span className="verifynumber-error-msg otp-error-msg">
              {otpError}
            </span>
          )}

          <button type="submit" className="verifynumber-submit-btn">
            <p>Verify</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyNumber;
