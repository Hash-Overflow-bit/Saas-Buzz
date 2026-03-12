import React from "react";
import "./AccountForm.css";
import { TiUserOutline, TiLocation } from "react-icons/ti";
import { FiUsers } from "react-icons/fi";
import { BiDollar, BiStreetView } from "react-icons/bi";
import { IoSendOutline } from "react-icons/io5";
import { HiGlobeAmericas } from "react-icons/hi2";
import { CgOrganisation } from "react-icons/cg";
import { MdOutlinePhoneEnabled, MdLinkOff } from "react-icons/md";
import InputFields from "../InputFields/InputFields";
import Button from "../Button/Button";
import Effect from "../BackgraoudTemplaeEffect/Effect";

function AccountForm({ activeTab, onTabChange }) {
  const panelLinks = [
    { id: "account", label: "Account", icon: <TiUserOutline /> },
    { id: "users", label: "Users", icon: <FiUsers /> },
    { id: "subscriptions", label: "Subscriptions", icon: <BiDollar /> },
    { id: "embed", label: "Embed", icon: <IoSendOutline /> },
  ];

  const InputConfig = [
    {
      id: "account_name",
      label: "Account Name",
      placeholder: "Account Name",
      type: "text",
      icon: <TiUserOutline />,
    },
    {
      id: "last-name",
      label: "Last Name",
      placeholder: "Last Name",
      type: "text",
      icon: <TiUserOutline />,
    },
    {
      id: "email",
      label: "Email Address",
      placeholder: "Email",
      type: "email",
      icon: "/Images/Mail.svg",
    },
    {
      id: "city",
      label: "City",
      placeholder: "City",
      type: "text",
      icon: <TiLocation />,
    },
    {
      id: "postal-code",
      label: "Postal Code",
      placeholder: "Postal Code",
      type: "number",
      icon: "/Images/Mail.svg",
    },
    {
      id: "street",
      label: "Street",
      placeholder: "Street",
      type: "text",
      icon: <BiStreetView />,
    },
    {
      id: "country",
      label: "Country",
      placeholder: "Country",
      type: "text",
      icon: <HiGlobeAmericas />,
    },
    {
      id: "company-name",
      label: "Company Name",
      placeholder: "Company Name",
      type: "text",
      icon: <CgOrganisation />,
    },
    {
      id: "phone-number",
      label: "Phone Number",
      placeholder: "Phone Number",
      type: "number",
      icon: <MdOutlinePhoneEnabled />,
    },
    {
      id: "website-url",
      label: "Website URL",
      placeholder: "Website URL",
      type: "url",
      icon: <MdLinkOff />,
    },
  ];

  const resetPasswordConfig = [
    {
      id: "old-password",
      label: "Old Password",
      placeholder: "Password",
      type: "password",
    },
    {
      id: "new-password",
      label: "New Password",
      placeholder: "New Password",
      type: "password",
    },
    {
      id: "confirm-password",
      label: "Confirm Password",
      placeholder: "Confirm Password",
      type: "password",
    },
  ];

  return (
    <div className="accounts-form-container">
      <Effect />

      {/* accounts formInput container */}
      <div className="accounts-formInput-container">
        {/* Panel btns */}
        <div className="account-panel-container">
          {panelLinks.map((link) => (
            <div
              className={`panel-links ${activeTab === link.id ? "active" : ""}`}
              key={link.id}
              onClick={() => onTabChange(link.id)}
            >
              <span className="panel-links-icon">{link.icon}</span>
              <span className="panel-links-label">{link.label}</span>
            </div>
          ))}
        </div>

        {/* Account Information */}
        <div className="accounts-divider-container">
          <h1>Account Information</h1>
          <hr />
        </div>

        <div className="input-container">
          {InputConfig.map((input, index) => (
            <InputFields key={index} {...input} />
          ))}

          <div className="saveChanges-btn-container SaveFromDeatils">
            <Button
              label=" Save Changes"
              className="SaveCHanges-btn"
              onClick={() => console.log("Delete clicked")}
            />
          </div>
        </div>

        {/* Reset Password */}
        <div className="accounts-divider-container">
          <h1>Change Password</h1>
          <hr />
        </div>

        <div className="input-container">
          {resetPasswordConfig.map((input, index) => (
            <InputFields key={index} {...input} />
          ))}

          <div className="saveChanges-btn-container changePassword">
            <Button
              label=" Save Changes"
              className="SaveCHanges-btn"
              onClick={() => console.log(" changes saved")}
            />
          </div>
        </div>

        {/* Delete Account */}
        <div className="accounts-divider-container">
          <h1>Delete Account</h1>
          <hr />
        </div>

        <div className="deleteAccountBtn-container">
          <Button
            label=" Delete Account"
            className="deleteAccountBtn"
            onClick={() => console.log("Delete clicked")}
          />
        </div>
      </div>
    </div>
  );
}

export default AccountForm;
