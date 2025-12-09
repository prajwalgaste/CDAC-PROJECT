import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error message on new input
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }

    // Hardcoded check (Based on your original logic)
    if (form.email === "admin@gmail.com" && form.password === "ADMIN") {
      // In a real app, you would set an Auth token here
      navigate("/admin/dashboard");
    } else {
      setError("Invalid admin credentials. (Hint: admin@gmail.com / ADMIN)");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <h2>Admin Login</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />

          <button type="submit" className="admin-login-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}