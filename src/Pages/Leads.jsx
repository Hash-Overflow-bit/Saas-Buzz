import { useState, useEffect } from "react";
import "./accounts.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGlobeAfrica } from "react-icons/fa";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import PanelLinks from "../components/PanelLinks/PanelLinks";
import AccountForm from "../components/AccountForm/AccountForm";
import UserForm from "../components/UserForm/UserForm";
import EmbedForm from "../components/EmbedForm/EmbedForm";
import SubscriptionForm from "../components/SubscriptionForm/SubscriptionForm";
import { FiCalendar, FiFilter, FiMessageSquare, FiEye, FiDownload } from "react-icons/fi";
import LeadsForm from "../components/LeadsForm/LeadsForm";  

function Leads() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedOrg, setSelectedOrg] = useState("Buzz Interactive");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("This Month");

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
    setActiveTab(tabId);
    // Note: Removed the hardcoded navigation to /account since Leads should probably stay on /leads
    // unless the user specifically wants to jump between pages via these tabs.
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

  const panelLinks = [
    { id: "This Month", label: "This Month", icon: <FiCalendar /> },
    { id: "Filter", label: "Filter", icon: <FiFilter /> },
    { id: "Filter Response", label: "Filter Response", icon: <FiMessageSquare /> },
    { id: "View", label: "View", icon: <FiEye /> },
    { id: "Export CSV", label: "Export CSV", icon: <FiDownload /> },
  ];

  return (
    <div className="accounts-main-container">
      <DashboardHeader
        selectedOrg={selectedOrg}
        setSelectedOrg={setSelectedOrg}
        orgOptions={orgOptions}
        navLinks={navLinks}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        userOptions={userOptions}
      />

      {/* Conditional Form Rendering */}
      {activeTab === "This Month" ? (
        <LeadsForm activeTab={activeTab} onTabChange={handleTabChange} links={panelLinks} />
      ) : activeTab === "Filter" ? (
        <UserForm activeTab={activeTab} onTabChange={handleTabChange} links={panelLinks} />
      ) : activeTab === "Filter Response" ? (
        <SubscriptionForm activeTab={activeTab} onTabChange={handleTabChange} links={panelLinks} />
      ) : activeTab === "View" ? (
        <EmbedForm activeTab={activeTab} onTabChange={handleTabChange} links={panelLinks} />
      ) : activeTab === "Export CSV" ? (
        <AccountForm activeTab={activeTab} onTabChange={handleTabChange} links={panelLinks} />
      ) : (
        /* Fallback to show navigation even on other tabs for consistency */
        // <AccountForm activeTab={activeTab} onTabChange={handleTabChange} links={panelLinks} />?
        <LeadsForm activeTab={activeTab} onTabChange={handleTabChange} links={panelLinks} />
        
      )}
    </div>
  );
}

export default Leads;
