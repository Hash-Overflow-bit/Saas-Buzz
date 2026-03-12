import React, { useState } from "react";
import "./SubscriptionForm.css";
import { TiUserOutline, TiTick } from "react-icons/ti";
import { FiUsers } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { IoSendOutline, IoClose } from "react-icons/io5";
import Effect from "../BackgraoudTemplaeEffect/Effect";

function SubscriptionForm({ activeTab, onTabChange }) {
  const [billingCycle, setBillingCycle] = useState("annual");

  const panelLinks = [
    { id: "account", label: "Account", icon: <TiUserOutline /> },
    { id: "users", label: "Users", icon: <FiUsers /> },
    { id: "subscriptions", label: "Subscriptions", icon: <BiDollar /> },
    { id: "embed", label: "Embed", icon: <IoSendOutline /> },
  ];

  const plans = [
    {
      id: "basic",
      name: "Recruit Basic",
      price: billingCycle === "annual" ? 17 : 22,
      description: "Get started with essential tools to manage your team efficiently. Ideal for small teams with fundamental needs.",
      features: [
        { label: "Access to core HR features", included: true },
        { label: "Employee record management", included: true },
        { label: "Basic reporting tools", included: true },
        { label: "Manage up to 10 team members", included: true },
        { label: "Track employee attendance", included: false },
        { label: "Assign and monitor tasks", included: false },
        { label: "Email support", included: false },
        { label: "Simple onboarding process", included: false },
        { label: "Designed user-focused interfaces", included: false },
      ],
      badge: "Active",
      buttonText: "Cancel",
      isFeatured: false,
    },
    {
      id: "pro",
      name: "Talent Pro",
      oldPrice: 26,
      price: billingCycle === "annual" ? 19 : 24,
      description: "A comprehensive solution for growing teams, offering enhanced features to streamline HR processes.",
      features: [
        { label: "Access to core HR features", included: true },
        { label: "Employee record management", included: true },
        { label: "Basic reporting tools", included: true },
        { label: "Manage up to 10 team members", included: true },
        { label: "Track employee attendance", included: true },
        { label: "Assign and monitor tasks", included: true },
        { label: "Email support", included: false },
        { label: "Simple onboarding process", included: false },
        { label: "Designed user-focused interfaces", included: false },
      ],
      badge: "Save 27%",
      buttonText: "Start 7-days Free Trial",
      isFeatured: true,
    },
    {
      id: "master",
      name: "HR Master",
      price: billingCycle === "annual" ? 34 : 39,
      description: "Maximize team performance with premium tools and full customization options, perfect for larger organizations.",
      features: [
        { label: "Access to core HR features", included: true },
        { label: "Employee record management", included: true },
        { label: "Basic reporting tools", included: true },
        { label: "Manage up to 10 team members", included: true },
        { label: "Track employee attendance", included: true },
        { label: "Assign and monitor tasks", included: true },
        { label: "Email support", included: true },
        { label: "Simple onboarding process", included: true },
        { label: "Designed user-focused interfaces", included: true },
      ],
      badge: "Popular",
      buttonText: "Start 7-days Free Trial",
      isFeatured: false,
    },
  ];

  return (
    <div className="accounts-form-container">
      <Effect />

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

        {/* Pricing Header */}
        <div className="pricing-header">
          <h1>Pricing</h1>
          <div className="billing-toggle">
            <button
              className={billingCycle === "annual" ? "active" : ""}
              onClick={() => setBillingCycle("annual")}
            >
              Annual
            </button>
            <button
              className={billingCycle === "monthly" ? "active" : ""}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards-container">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.isFeatured ? "featured" : ""}`}
            >
              {plan.badge && (
                <div className="card-badge">
                  <span>{plan.badge}</span>
                  <div className="badge-dot"></div>
                </div>
              )}

              <div className="card-top">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  {plan.oldPrice && (
                    <span className="old-price">${plan.oldPrice}</span>
                  )}
                  <span className="current-price">${plan.price}</span>
                  <div className="price-details">
                    <span className="per-month">/ month (USD)</span>
                    <span className="billed-yearly">${plan.price * 12} billed yearly</span>
                  </div>
                </div>
                <p className="plan-desc">{plan.description}</p>
              </div>

              <div className="card-divider"></div>

              <div className="features-list">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className={`feature-item ${feature.included ? "included" : "excluded"}`}>
                    <span className="feature-icon">
                      {feature.included ? <TiTick /> : <IoClose />}
                    </span>
                    <span className="feature-label">{feature.label}</span>
                  </div>
                ))}
              </div>

              <div className="card-footer">
                <button className={`plan-btn ${plan.id === "basic" ? "outline" : "solid"}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubscriptionForm;
