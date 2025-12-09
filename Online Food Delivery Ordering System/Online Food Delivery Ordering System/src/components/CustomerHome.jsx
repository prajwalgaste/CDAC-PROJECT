import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import restaurantData from "../data/restaurantData";
import "./CustomerHome.css";

export default function CustomerHome() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">

      {/* The hardcoded navbar was removed from here. */}

      {/* SEARCH BAR */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search restaurants or dishes..."
          className="search-bar"
        />
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="category-container">
        <button className="category-btn">Biryani</button>
        <button className="category-btn">Pizza</button>
        <button className="category-btn">Desserts</button>
        <button className="category-btn">Burgers</button>
        <button className="category-btn">Chinese</button>
      </div>

      {/* RESTAURANTS GRID */}
      <div className="restaurant-grid">
        {restaurantData.map((res) => (
          <Card key={res.id} className="restaurant-card shadow-sm">
            <Card.Img src={res.img} className="restaurant-img" />

            <Card.Body>
              <h5 className="res-title">{res.name}</h5>
              <p className="res-cuisine">{res.cuisine}</p>

              <div className="res-bottom">
                <span className="rating">⭐ {res.rating}</span>
                <Button
                  className="menu-btn"
                  onClick={() => navigate(`/menu/${res.id}`)}
                >
                  View Menu
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}