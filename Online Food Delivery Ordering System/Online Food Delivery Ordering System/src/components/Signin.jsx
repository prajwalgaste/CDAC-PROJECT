import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

export default function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    // ⭐ ADMIN LOGIN CHECK
    if (email === "admin@foodapp.com" && password === "admin123") {
      alert("Admin Login Successful!");
      navigate("/admin/dashboard");
      return;
    }

    // ⭐ USER LOGIN
    alert("User Login Successful!");
    navigate("/home");
  };

  return (
    <div className="signin-bg">
      <Card className="signin-card shadow-lg">
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>

          {error && <p className="text-danger text-center">{error}</p>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" className="signin-btn">
                Login
              </Button>
            </div>
          </Form>

          <p className="text-center mt-3">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>

          {/* ⭐ Admin Hint (Optional) */}
          <p className="admin-hint">
           <center><a href="/admin/login" className="admin-login-link">Admin Login</a><br /></center> 
            

          </p>

        </Card.Body>
      </Card>
    </div>
  );
}
