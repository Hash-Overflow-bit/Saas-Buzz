import React, { useState } from "react";
import "./EmbedForm.css";
import { TiUserOutline } from "react-icons/ti";
import { FiUsers, FiMonitor } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { IoSendOutline, IoCopyOutline } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuLayoutTemplate } from "react-icons/lu";
import Effect from "../BackgraoudTemplaeEffect/Effect";

function EmbedForm({ activeTab, onTabChange }) {
  const [activeSubTab, setActiveSubTab] = useState("website");

  const panelLinks = [
    { id: "account", label: "Account", icon: <TiUserOutline /> },
    { id: "users", label: "Users", icon: <FiUsers /> },
    { id: "subscriptions", label: "Subscriptions", icon: <BiDollar /> },
    { id: "embed", label: "Embed", icon: <IoSendOutline /> },
  ];

  const subPanelLinks = [
    { id: "website", label: "Website", icon: <FiMonitor /> },
    { id: "wordpress", label: "WordPress", icon: <FaWordpress /> },
    { id: "builders", label: "Website Builders", icon: <LuLayoutTemplate /> },
    { id: "email", label: "Email Instructions", icon: <MdOutlineMailOutline /> },
  ];

  const snippet = `<script>(function(w, d) { w.CollectId = "60e4e4bc8956351af02b5eea"; var h = d.head || d.getElementsByTagName("head")[0]; s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document);</script>`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    console.log("Snippet copied!");
  };

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

        {/* Sub Panel Navigation */}
        <div className="embed-subpanel-container">
          {subPanelLinks.map((link) => (
            <div
              className={`subpanel-link ${activeSubTab === link.id ? "active" : ""}`}
              key={link.id}
              onClick={() => setActiveSubTab(link.id)}
            >
              <span className="subpanel-icon">{link.icon}</span>
              <span className="subpanel-label">{link.label}</span>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="embed-content-header">
          <h1>Add to website</h1>
        </div>

        {/* Content */}
        <div className="embed-content-body">
          <p className="embed-instruction">
            Copy the below code snippet and paste it into your HTML code, preferably before the closing head tag (&lt;/head&gt;).
          </p>

          <div className="code-snippet-container">
            <div className="code-snippet-header">
              <span className="code-lang-label">javascript</span>
              <button className="copy-snippet-btn" onClick={handleCopy}>
                {copied ? (
                  <>
                    <IoCopyOutline />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <IoCopyOutline />
                    <span>Copy code</span>
                  </>
                )}
              </button>
            </div>
            <pre className="code-snippet-pre">
              <code>
                <span className="code-tag">&lt;script&gt;</span>
                <span className="code-func">(function</span>(w, d) {"{"} w.CollectId = <span className="code-str">"60e4e4bc8956351af02b5eea"</span>; var h = d.head || d.getElementsByTagName(<span className="code-str">"head"</span>)[0]; s = d.createElement(<span className="code-str">"script"</span>); s.setAttribute(<span className="code-str">"type"</span>, <span className="code-str">"text/javascript"</span>); s.async=<span className="code-bool">true</span>; s.setAttribute(<span className="code-str">"src"</span>, <span className="code-str">"https://collectcdn.com/launcher.js"</span>); h.appendChild(s); {"}"})(window, document);
                <span className="code-tag">&lt;/script&gt;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmbedForm;
