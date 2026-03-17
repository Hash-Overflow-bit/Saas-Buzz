import React, { useState } from "react";
import PanelLinks from "../PanelLinks/PanelLinks";
import Effect from "../BackgraoudTemplaeEffect/Effect";
import "./LeadsForm.css";

function LeadsForm({ activeTab, onTabChange, links }) {
  const [selectedLeads, setSelectedLeads] = useState([]);

  const leadsData = [
    { id: 1, responseNo: "#1265", time: "Oct 14, 2025 10:30 AM", page: "https://www.itbuzzint...", ip: "192.158.8.218", device: "Desktop", query: "", status: "New" },
    { id: 2, responseNo: "#1265", time: "Oct 14, 2025 10:30 AM", page: "https://www.itbuzzint...", ip: "192.158.8.218", device: "Desktop", query: "", status: "New" },
    { id: 3, responseNo: "#1265", time: "Oct 14, 2025 10:30 AM", page: "https://www.itbuzzint...", ip: "192.158.8.218", device: "Desktop", query: "", status: "New" },
    { id: 4, responseNo: "#1265", time: "Oct 14, 2025 10:30 AM", page: "https://www.itbuzzint...", ip: "192.158.8.218", device: "Desktop", query: "", status: "New" },
    { id: 5, responseNo: "#1265", time: "Oct 14, 2025 10:30 AM", page: "https://www.itbuzzint...", ip: "192.158.8.218", device: "Desktop", query: "", status: "New" },
    { id: 6, responseNo: "#1265", time: "Oct 14, 2025 10:30 AM", page: "https://www.itbuzzint...", ip: "192.158.8.218", device: "Desktop", query: "", status: "New" },
    { id: 7, responseNo: "#1265", time: "Oct 14, 2025 10:30 AM", page: "https://www.itbuzzint...", ip: "192.158.8.218", device: "Desktop", query: "", status: "New" },
    { id: 8, responseNo: "#1265", time: "Oct 14, 2025 10:30 AM", page: "https://www.itbuzzint...", ip: "192.158.8.218", device: "Desktop", query: "", status: "New" },
    { id: 9, responseNo: "#1265", time: "Oct 14, 2025 10:30 AM", page: "https://www.itbuzzint...", ip: "192.158.8.218", device: "Desktop", query: "", status: "New" },
    { id: 10, responseNo: "#1265", time: "Oct 14, 2025 10:30 AM", page: "https://www.itbuzzint...", ip: "192.158.8.218", device: "Desktop", query: "", status: "New" },
  ];

  const toggleLead = (id) => {
    setSelectedLeads(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedLeads.length === leadsData.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(leadsData.map(lead => lead.id));
    }
  };

  return (
    <div className="accounts-form-container">
      <Effect />
      <div className="accounts-formInput-container">
        {links && (
          <PanelLinks
            links={links}
            activeTab={activeTab}
            onTabChange={onTabChange}
          />
        )}
        
        <div className="leads-from-container">
          {/* Stats Row */}
          <div className="leads-stats-row">
            <div className="stat-item active">
              <span>All</span>
              <span className="stat-count">0</span>
            </div>
            <div className="stat-item">
              <span>Completed</span>
              <span className="stat-count">0</span>
            </div>
            <div className="stat-item">
              <span>Incompleted</span>
              <span className="stat-count">0</span>
            </div>
          </div>

          {/* Table Container */}
          <div className="leads-table-container">
            <table className="leads-table">
              <thead className="leads-table-header">
                <tr>
                  <th className="checkbox-cell">
                    <div 
                      className={`custom-checkbox ${selectedLeads.length === leadsData.length ? 'checked' : ''}`}
                      onClick={toggleAll}
                    ></div>
                  </th>
                  <th>Response No.</th>
                  <th>Time</th>
                  <th>Page</th>
                  <th>Visitor IP</th>
                  <th>Device</th>
                  <th>How can we help you today?</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="leads-table-body">
                {leadsData.map((lead) => (
                  <tr key={lead.id} className="leads-table-row">
                    <td className="checkbox-cell">
                      <div 
                        className={`custom-checkbox ${selectedLeads.includes(lead.id) ? 'checked' : ''}`}
                        onClick={() => toggleLead(lead.id)}
                      ></div>
                    </td>
                    <td className="response-no">{lead.responseNo}</td>
                    <td>{lead.time}</td>
                    <td>{lead.page}</td>
                    <td>{lead.ip}</td>
                    <td>{lead.device}</td>
                    <td>{lead.query}</td>
                    <td>
                      <div className="status-badge">
                        <span className="status-dot"></span>
                        {lead.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadsForm;