import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (form.email === "admin@gmail.com" && form.password === "ADMIN") {
      alert("Admin Login Successful!");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <h2>Admin Login</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="admin@foodapp.com"
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="admin123"
            onChange={handleChange}
          />

          <button type="submit" className="admin-login-btn">
            Login
          </button>
        </form>

        <p className="back-text">
          <a href="/signin">Back to User Login</a>
        </p>
      </div>
    </div>
  );
}
