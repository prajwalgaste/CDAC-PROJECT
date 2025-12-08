import "./AdminDashboard.css";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="admin-wrapper">
      <div className="admin-sidebar">
        <h2 className="admin-logo">Admin Panel</h2>

        <ul className="admin-menu">
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/restaurants">Manage Restaurants</Link></li>
          <li><Link to="/admin/add-restaurant">Add Restaurant</Link></li>
          <li><Link to="/signin">Logout</Link></li>
        </ul>
      </div>

      <div className="admin-main">
        <h1>Welcome, Admin 👋</h1>
        <p className="admin-subtext">Manage restaurants and system operations.</p>

        <div className="admin-cards">
          <div className="admin-card">
            <h3>Total Restaurants</h3>
            <p>8</p>
          </div>

          <div className="admin-card">
            <h3>Active Orders</h3>
            <p>12</p>
          </div>

          <div className="admin-card">
            <h3>Pending Tasks</h3>
            <p>4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
