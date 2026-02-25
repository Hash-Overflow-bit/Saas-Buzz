import React from "react";
import BackgroundTemplate from "../components/BackgroundTemplate/BackgroundTemplate";
import "./Dashboard.css";
import { useState } from "react";

function Dashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="dashboard-main-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-header-logo">
          {" "}
          <span>
            {" "}
            <img src="public\Images\logo-icon.svg" alt="" />
          </span>
          <p>Omega</p>
        </div>

        {/* user profile action */}
        <div className="dashboard-header-action">
          <div className="header-bell-icon">
            <img src="public\Images\bell-icon.svg" alt="bell" />
          </div>
          <div className="header-msg-icon">
            <img src="public\Images\msg-icon.svg" alt="" />
          </div>
          <div className="header-user-profile-container">
            <div className="header-user-img">
              <img src="public\Images\user-pfp.svg" alt="" />
            </div>
            <div className="header-user-name">
              <p className="user-name">Alen Walker</p>
              <p className="user-dept">Human Resources</p>
            </div>
          </div>

          <div className="user-profile-dropdown">
            <div className="dropdown-trigger" onClick={() => setOpen(!open)}>
              ▾
            </div>
            {open && (
              <div className="dropdown-options">
                <div className="dropdown-item">Signup</div>
                <div className="dropdown-item">Settings</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="BackgroundTemplateOnDashboard">
        <BackgroundTemplate />
      </div>

       {/* Dashboard content */}
      <div className="dashboard-container">
        {/* welcome back User */}
        <div className="greeting-user"><p>Hi, Gohar</p></div>
      </div>






    </div>
  );
}

export default Dashboard;
