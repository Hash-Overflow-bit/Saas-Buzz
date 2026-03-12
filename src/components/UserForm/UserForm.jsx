import React from "react";
import "./UserForm.css";
import { TiUserOutline, TiLocation } from "react-icons/ti";
import { FiUsers } from "react-icons/fi";
import { BiDollar, BiStreetView } from "react-icons/bi";
import { IoSendOutline } from "react-icons/io5";
import { HiGlobeAmericas } from "react-icons/hi2";
import { CgOrganisation } from "react-icons/cg";
import { MdOutlinePhoneEnabled, MdLinkOff, MdOutlineMailOutline } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import InputFields from "../InputFields/InputFields";
import Button from "../Button/Button";
import Effect from "../BackgraoudTemplaeEffect/Effect";

function UserForm({ activeTab, onTabChange }) {
  const panelLinks = [
    { id: "account", label: "Account", icon: <TiUserOutline /> },
    { id: "users", label: "Users", icon: <FiUsers /> },
    { id: "subscriptions", label: "Subscriptions", icon: <BiDollar /> },
    { id: "embed", label: "Embed", icon: <IoSendOutline /> },
  ];

  const InputConfig = [
    {
      id: "email",
      label: "Email of the user",
      placeholder: "Email",
      type: "email",
      icon: <MdOutlineMailOutline />,
    },
    {
      id: "role",
      label: "Role",
      placeholder: "Role",
      type: "text",
      icon: <CgOrganisation />,
    },
    {
      id: "website link",
      label: "select website",
      placeholder: "Select Website  ",
      type: "text",
      icon: <HiGlobeAmericas />,
    },

  ];

  const managedUsers = [
    { email: "umerraza28@gmail.com", role: "Editor", website: "1", websiteLabel: "website", limits: "No limits" },
    { email: "gohardesign@gmail.com", role: "Owner", website: "All", websiteLabel: "websites", limits: "No limits" },
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

        {/* User Information */}
        <div className="accounts-divider-container">
          <h1>invite a User</h1>
          <hr />
        </div>

        <div className="input-container">
          {InputConfig.map((input, index) => (
            <InputFields key={index} {...input} />
          ))}

          <div className="saveChanges-btn-container SaveFromDeatils">
            <Button
              label=" Save User"
              className="SaveCHanges-btn"
              onClick={() => console.log("Save User clicked")}
            />
          </div>
        </div>

        {/* Manage User */}
        <div className="accounts-divider-container">
          <h1>Manage User</h1>
          <hr />
        </div>

        <div className="manage-users-table-container">
          <div className="manage-users-table-header">
            <div className="header-cell email-col">Email</div>
            <div className="header-cell role-col">Role</div>
            <div className="header-cell website-col">Website</div>
            <div className="header-cell limits-col">Limits</div>
            <div className="header-cell status-col">Status</div>
          </div>
          <div className="manage-users-table-body">
            {managedUsers.map((user, index) => (
              <div key={index} className="manage-users-table-row">
                <div className="body-cell email-col">{user.email}</div>
                <div className="body-cell role-col">{user.role}</div>
                <div className="body-cell website-col">
                  <span className="website-val">{user.website}</span>
                  <span className="website-label">{user.websiteLabel}</span>
                </div>
                <div className="body-cell limits-col">{user.limits}</div>
                <div className="body-cell status-col">
                  <HiDotsVertical className="status-kebab-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}

export default UserForm;
