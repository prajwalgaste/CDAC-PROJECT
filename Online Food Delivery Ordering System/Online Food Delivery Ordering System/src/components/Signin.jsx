import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signin.css";

export default function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // ADMIN LOGIN CHECK (Using credentials provided in Admin module)
    if (email === "admin@gmail.com" && password === "ADMIN") {
      alert("Admin Login Successful! Redirecting to dashboard.");
      navigate("/admin/dashboard");
      return;
    }

    // USER LOGIN (Simplified for demo)
    alert(`User ${email} Login Successful!`);
    navigate("/home");
  };

  return (
    <div className="signin-bg">
      <div className="signin-card">
        <h2 className="signin-title">Welcome Back</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group-custom">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group-custom">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        <p className="bottom-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>

        <p className="bottom-text" style={{marginTop: "5px"}}>
            <Link to="/admin/login">Admin Login</Link>
        </p>
      </div>
    </div>
  );
}