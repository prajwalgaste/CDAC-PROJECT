import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import "./Navbar.css";

export default function AppNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to determine if a link is active
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="main-navbar">
      <h2 
        className="nav-logo"
        onClick={() => navigate("/home")}
      >
        FoodExpress 🍕
      </h2>

      <ul className="nav-links">
        <li>
          <Link to="/home" className={`nav-link ${isActive("/home")}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/orders" className={`nav-link ${isActive("/orders")}`}>
            My Orders
          </Link>
        </li>
        <li>
          <Link to="/profile" className={`nav-link ${isActive("/profile")}`}>
            Profile
          </Link>
        </li>
        <li>
          <Link 
            to="/signin" 
            className="nav-link logout-link"
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}