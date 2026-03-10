import React from "react";
import "./accounts.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdowns/dropdown";
import NavigationLinks from "../components/NavigationLinks/navigationLinks";
import { FaGlobeAfrica, FaChartLine, FaUsers, FaCog } from "react-icons/fa";
import { TiUserOutline, TiLocation } from "react-icons/ti";
import { FiUsers } from "react-icons/fi";
import { BiDollar, BiStreetView } from "react-icons/bi";
import { IoSendOutline } from "react-icons/io5";
import { HiGlobeAmericas } from "react-icons/hi2";
import { CgOrganisation } from "react-icons/cg";
import { MdOutlinePhoneEnabled, MdLinkOff } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import InputFields from "../components/InputFields/InputFields";
import Button from "../components/Button/Button";

import Effect from "../components/BackgraoudTemplaeEffect/Effect";

function Accounts() {
  const [selectedOrg, setSelectedOrg] = useState("Buzz Interactive");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const userOptions = [
    { label: "Signup", onClick: () => console.log("Signup clicked") },
    { label: "Settings", onClick: () => console.log("Settings clicked") },
  ];

  const orgOptions = [
    {
      label: "Buzz Interactive",
      icon: <FaGlobeAfrica />,
      onClick: () => setSelectedOrg("Buzz Interactive"),
    },
    {
      label: "Dap",
      icon: <FaGlobeAfrica />,
      onClick: () => setSelectedOrg("Dap"),
    },
    {
      label: "Sample Org",
      icon: <FaGlobeAfrica />,
      onClick: () => setSelectedOrg("Sample Org"),
    },
  ];

  const navLinks = [
    { label: "Report", to: "/account" },
    { label: "Leads", to: "/leads" },
    { label: "Settings", to: "/settings" },
  ];

  const panelLinks = [
    { label: "Account", icon: <TiUserOutline /> },
    { label: "Users", icon: <FiUsers /> },
    { label: "Subscriptions", icon: <BiDollar /> },
    { label: "Embed", icon: <IoSendOutline /> },
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
    <div className="accounts-main-container">
      {/* header */}
      <div className="accounts-header">
        <div className="accounts-header-logo">
          {" "}
          <span>
            {" "}
            <img src="\Images\logo-icon.svg" alt="" />
          </span>
          <p>Omega</p>
        </div>

        {/* orginization type */}
        <div className="accounts-orginization-type-container">
          <Dropdown
            options={orgOptions}
            trigger={
              <>
                <FaGlobeAfrica style={{ marginRight: "8px" }} />
                {selectedOrg}
              </>
            }
            className="accounts-user-profile-dropdown"
          />
        </div>

        {/* Navigation linkls */}

        <div className="accounts-nav-item-container">
          {navLinks.map((link, index) => (
            <NavigationLinks key={index} to={link.to}>
              {link.label}
            </NavigationLinks>
          ))}
        </div>

        {/* Hamburger button - visible only on responsive */}
        <button
          className="accounts-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <HiOutlineMenuAlt3 />
        </button>

        {/* user profile action */}
        <div
          className={`accounts-header-action ${mobileMenuOpen ? "mobile-open" : ""}`}
        >
          <div className="accounts-header-bell-icon">
            <img src="\Images\bell-icon.svg" alt="bell" />
          </div>
          <div className="accounts-header-msg-icon">
            <img src="\Images\msg-icon.svg" alt="" />
          </div>
          <div className="accounts-header-user-profile-container">
            <div className="accounts-header-user-img">
              <img src="\Images\user-pfp.svg" alt="" />
            </div>
            <div className="accounts-header-user-name">
              <p className="accounts-user-name">Alen Walker</p>
              <p className="accounts-user-dept">Human Resources</p>
            </div>
          </div>

          <Dropdown
            options={userOptions}
            trigger=""
            className="accounts-user-profile-dropdown"
          />
        </div>
      </div>

      {/* accounts from content */}
      <div className="accounts-form-container">
        <Effect />

        {/* accounts formInput container */}

        <div className="accounts-formInput-container">
          {/* Pandel btnsss */}
          <div className="account-panel-container">
            {panelLinks.map((link, index) => (
              <div
                className={`panel-links ${index === 0 ? "active" : ""}`}
                key={index}
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

          {/* reset password */}
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

          {/* Delete account */}

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
    </div>
  );
}

export default Accounts;
