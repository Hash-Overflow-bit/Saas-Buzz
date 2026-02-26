import React from "react";
import { FaArrowRight } from "react-icons/fa";
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

     

      {/* Dashboard content */}
      <div className="dashboard-container">
        <div className="BackgroundTemplateOnDashboard">
          <BackgroundTemplate />
        </div>
        
        {/* welcome back User */}
        <div className="greeting-user">
          <p>Hi, Gohar</p>
        </div>

        {/* Dashboard input */}

        <div className="dashboard-input">
          <div className="input-wrapper">
            <input type="text" placeholder="Enter the Address of the website" />
            <button className="arrow-btn">
              <img src="public\Images\arrow-btn.svg" alt="" />
            </button>
          </div>
        </div>

        {/* Recent searches/////// recent website searches */}

        <div className="recent-search-container">

          <div className="recent-search-website-container">
            <div className="search-web-result">
              <div className="web-name">
                {" "}
                <span className="search-web-icon">
                  <img src="public\Images\web icon.svg" alt="" />
                </span>
                Buzz Interactive
              </div>
              <div className="result">Fair <span><img src="public\Images\gradient-icon.svg" alt="" /></span></div>
            </div>

            <div className="leads-report-container">
              <div className="leads">100 leads</div>
              <div className="report">
                <button>
                  View Report{" "}
                  <FaArrowRight
                    style={{
                      marginLeft: "6px",
                      fontSize: "15px",
                      verticalAlign: "middle",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="recent-search-website-container">
            <div className="search-web-result">
              <div className="web-name">
                {" "}
                <span className="search-web-icon">
                  <img src="public\Images\web icon.svg" alt="" />
                </span>
                Buzz Interactive
              </div>
              <div className="result">Fair <span><img src="public\Images\gradient-icon.svg" alt="" /></span></div>
            </div>

            <div className="leads-report-container">
              <div className="leads">100 leads</div>
              <div className="report">
                <button>
                  View Report{" "}
                  <FaArrowRight
                    style={{
                      marginLeft: "6px",
                      fontSize: "15px",
                      verticalAlign: "middle",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="recent-search-website-container">
            <div className="search-web-result">
              <div className="web-name">
                {" "}
                <span className="search-web-icon">
                  <img src="public\Images\web icon.svg" alt="" />
                </span>
                Buzz Interactive
              </div>
              <div className="result">Fair <span><img src="public\Images\gradient-icon.svg" alt="" /></span></div>
            </div>

            <div className="leads-report-container">
              <div className="leads">100 leads</div>
              <div className="report">
                <button>
                  View Report{" "}
                  <FaArrowRight
                    style={{
                      marginLeft: "6px",
                      fontSize: "15px",
                      verticalAlign: "middle",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>




          


        </div>
      </div>
    </div>
  );
}

export default Dashboard;
