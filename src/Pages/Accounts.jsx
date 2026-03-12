import { useState, useEffect } from "react";
import "./accounts.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdowns/dropdown";
import NavigationLinks from "../components/NavigationLinks/navigationLinks";
import { FaGlobeAfrica } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import AccountForm from "../components/AccountForm/AccountForm";
import UserForm from "../components/UserForm/UserForm";
import EmbedForm from "../components/EmbedForm/EmbedForm";
import SubscriptionForm from "../components/SubscriptionForm/SubscriptionForm";

function Accounts() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedOrg, setSelectedOrg] = useState("Buzz Interactive");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("account");

  // Sync activeTab with URL
  useEffect(() => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    
    if (pathParts.length === 1 && pathParts[0] === "account") {
      setActiveTab("account");
    } else if (["users", "subscriptions", "embed"].includes(lastPart)) {
      setActiveTab(lastPart);
    }
  }, [location.pathname]);

  const handleTabChange = (tabId) => {
    if (tabId === "account") {
      navigate("/account");
    } else {
      navigate(`/account/${tabId}`);
    }
  };

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

        {/* Navigation links */}
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

      {/* Conditional Form Rendering */}
      {activeTab === "account" ? (
        <AccountForm activeTab={activeTab} onTabChange={handleTabChange} />
      ) : activeTab === "users" ? (
        <UserForm activeTab={activeTab} onTabChange={handleTabChange} />
      ) : activeTab === "subscriptions" ? (
        <SubscriptionForm activeTab={activeTab} onTabChange={handleTabChange} />
      ) : activeTab === "embed" ? (
        <EmbedForm activeTab={activeTab} onTabChange={handleTabChange} />
      ) : (
        /* Fallback to show navigation even on other tabs for consistency */
        <AccountForm activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
}

export default Accounts;
