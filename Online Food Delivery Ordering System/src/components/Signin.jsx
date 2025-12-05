import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

export default function Signin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.password.trim())
      newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Success → Redirect to customer home
      navigate("/home");
    }
  };

  return (
    <div className="signin-bg">
      <Card className="signin-card shadow-lg">
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>

          <Form onSubmit={handleSubmit} className="w-100">

            {/* Email */}
            <Form.Group className="mb-3 form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3 form-group">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Centered Sign In Button */}
            <div className="center-btn">
              <Button
                variant="primary"
                type="submit"
                className="center-signin-btn"
              >
                Sign In
              </Button>
            </div>
          </Form>

          {/* Centered Sign Up Link */}
          <p className="signup-text">
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}
