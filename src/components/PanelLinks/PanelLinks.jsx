import React from "react";
import "./PanelLinks.css";

function PanelLinks({ links, activeTab, onTabChange }) {
  return (
    <div className="account-panel-container">
      {links.map((link) => (
        <div
          className={`panel-links ${activeTab === link.id ? "active" : ""}`}
          key={link.id}
          onClick={() => onTabChange(link.id)}
        >
          {link.icon && <span className="panel-links-icon">{link.icon}</span>}
          <span className="panel-links-label">{link.label}</span>
        </div>
      ))}
    </div>
  );
}

export default PanelLinks;
