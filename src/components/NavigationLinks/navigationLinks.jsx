import React from "react";
import { NavLink } from "react-router-dom";
import "./navigationLinks.css";

function NavigationLinks({ to, children, className = "" }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `nav-link ${className} ${isActive ? "active" : ""}`
      }
    >
      {children}
    </NavLink>
  );
}

export default NavigationLinks;