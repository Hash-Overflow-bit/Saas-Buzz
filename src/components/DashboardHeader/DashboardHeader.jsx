import { FaGlobeAfrica } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Dropdown from "../Dropdowns/dropdown";
import NavigationLinks from "../NavigationLinks/navigationLinks";
import "./DashboardHeader.css";

function DashboardHeader({
  selectedOrg,
  setSelectedOrg,
  orgOptions,
  navLinks,
  mobileMenuOpen,
  setMobileMenuOpen,
  userOptions,
  userName = "Alen Walker",
  userDept = "Human Resources",
  userImg = "/Images/user-pfp.svg",
}) {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header-logo">
        <span>
          <img src="/Images/logo-icon.svg" alt="logo" />
        </span>
        <p>Omega</p>
      </div>

      {/* organization type */}
      <div className="dashboard-header-org-container">
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
      <div className="dashboard-header-nav-container">
        {navLinks.map((link, index) => (
          <NavigationLinks key={index} to={link.to}>
            {link.label}
          </NavigationLinks>
        ))}
      </div>

      {/* Hamburger button - visible only on responsive */}
      <button
        className="dashboard-header-hamburger-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <HiOutlineMenuAlt3 />
      </button>

      {/* user profile action */}
      <div
        className={`dashboard-header-action ${mobileMenuOpen ? "mobile-open" : ""}`}
      >
        <div className="dashboard-header-bell-icon">
          <img src="/Images/bell-icon.svg" alt="bell" />
        </div>
        <div className="dashboard-header-msg-icon">
          <img src="/Images/msg-icon.svg" alt="messages" />
        </div>
        <div className="dashboard-header-user-profile-container">
          <div className="dashboard-header-user-img">
            <img src={userImg} alt="user" />
          </div>
          <div className="dashboard-header-user-name">
            <p className="dashboard-header-user-text">{userName}</p>
            <p className="dashboard-header-user-dept">{userDept}</p>
          </div>
        </div>

        <Dropdown
          options={userOptions}
          trigger=""
          className="accounts-user-profile-dropdown"
        />
      </div>
    </div>
  );
}

export default DashboardHeader;
