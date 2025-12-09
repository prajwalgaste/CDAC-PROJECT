import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./AdminDashboard.css";
// import { FaHome, FaUtensils, FaPlusSquare, FaSignOutAlt } from "react-icons/fa"; // Uncomment if installed

export default function AdminDashboard() {
  const location = useLocation();

  // Helper to highlight active link
  const isActive = (path) => location.pathname === path ? "active" : "";

  // Dynamic stats (retrieving real count from local storage)
  const restaurantCount = JSON.parse(localStorage.getItem("restaurants"))?.length || 0;

  return (
    <div className="admin-wrapper">
      <div className="admin-sidebar">
        <div className="admin-logo">FOOD ADMIN</div>

        <ul className="admin-menu">
          <li>
            <Link to="/admin/dashboard" className={isActive("/admin/dashboard")}>
              {/* <FaHome /> */} Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/restaurants" className={isActive("/admin/restaurants")}>
              {/* <FaUtensils /> */} Manage Restaurants
            </Link>
          </li>
          <li>
            <Link to="/admin/add-restaurant" className={isActive("/admin/add-restaurant")}>
              {/* <FaPlusSquare /> */} Add Restaurant
            </Link>
          </li>
          <li style={{ marginTop: "auto" }}>
            <Link to="/signin">
              {/* <FaSignOutAlt /> */} Logout
            </Link>
          </li>
        </ul>
      </div>

      <div className="admin-main">
        <h1 className="admin-header-title">Welcome Back, Admin!</h1>
        <p className="admin-subtext">Here is what's happening in your food delivery service.</p>

        <div className="admin-cards">
          <div className="admin-card" style={{ borderLeftColor: "#4f46e5" }}>
            <h3>Total Restaurants</h3>
            <p>{restaurantCount}</p>
          </div>

          <div className="admin-card" style={{ borderLeftColor: "#10b981" }}>
            <h3>Active Orders</h3>
            <p>12</p>
          </div>

          <div className="admin-card" style={{ borderLeftColor: "#f59e0b" }}>
            <h3>Pending Tasks</h3>
            <p>4</p>
          </div>
          
           <div className="admin-card" style={{ borderLeftColor: "#ef4444" }}>
            <h3>Total Revenue</h3>
            <p>12,450</p>
          </div>
        </div>
      </div>
    </div>
  );
}