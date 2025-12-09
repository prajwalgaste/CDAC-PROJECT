import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear the specific error when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^\d{10}$/; // Basic 10-digit check

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone))
        newErrors.phone = "Phone must be 10 digits";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm password is required";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Logic to register the user goes here (e.g., API call)
      alert("Registration Successful! Redirecting to sign in.");
      navigate("/signin");
    }
  };

  return (
    <div className="signup-bg">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>

        <form onSubmit={handleSubmit}>
          
          <div className="form-group-custom">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? "input is-invalid" : ""}
              required
            />
            {errors.fullName && <div className="error-text">{errors.fullName}</div>}
          </div>

          <div className="form-group-custom">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input is-invalid" : ""}
              required
            />
            {errors.email && <div className="error-text">{errors.email}</div>}
          </div>

          <div className="form-group-custom">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "input is-invalid" : ""}
              required
            />
            {errors.phone && <div className="error-text">{errors.phone}</div>}
          </div>

          <div className="form-group-custom">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "input is-invalid" : ""}
              required
            />
            {errors.password && <div className="error-text">{errors.password}</div>}
          </div>

          <div className="form-group-custom">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? "input is-invalid" : ""}
              required
            />
            {errors.confirmPassword && <div className="error-text">{errors.confirmPassword}</div>}
          </div>

          <button type="submit" className="signup-btn">
            Register
          </button>
        </form>

        <p className="login-text">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
}