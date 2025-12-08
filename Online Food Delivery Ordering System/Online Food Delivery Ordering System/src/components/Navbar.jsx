import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function AppNavbar() {
  const navigate = useNavigate();

  return (
    <div
      className="main-navbar shadow-sm"
      style={{
        padding: "18px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <h2
        style={{
          color: "#e63946",
          cursor: "pointer",
          fontWeight: "700",
          margin: 0,
        }}
        onClick={() => navigate("/home")}
      >
        FoodExpress
      </h2>

      <Nav style={{ display: "flex", gap: "25px", fontSize: "17px" }}>
        <Nav.Link onClick={() => navigate("/home")} style={{ color: "black" }}>
          Home
        </Nav.Link>
        <Nav.Link style={{ color: "black" }}>My Orders</Nav.Link>
        <Nav.Link style={{ color: "black" }}>Profile</Nav.Link>
        <Nav.Link
          onClick={() => navigate("/signin")}
          style={{ color: "red", fontWeight: 600 }}
        >
          Logout
        </Nav.Link>
      </Nav>
    </div>
  );
}
