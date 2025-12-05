import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import { restaurants } from "../data/restaurantData";
import "./Menu.css";

export default function Menu() {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id == id);

  if (!restaurant) {
    return <h2 style={{ textAlign: "center" }}>Restaurant Not Found</h2>;
  }

  return (
    <div className="menu-wrapper">

      <div className="menu-banner">
        <img src={restaurant.img} className="banner-img" alt="" />
        <div className="banner-info">
          <h2>{restaurant.name}</h2>
          <p>{restaurant.cuisine}</p>
          <span className="rating">⭐ {restaurant.rating}</span>
          <p className="delivery">{restaurant.deliveryTime}</p>
        </div>
      </div>

      <div className="dish-search">
        <Form.Control
          type="text"
          placeholder="Search dishes..."
          className="dish-search-input"
        />
      </div>

      <div className="dish-grid">
        {restaurant.dishes.map((dish) => (
          <Card key={dish.id} className="dish-card shadow-sm">
            <Card.Img src={dish.img} className="dish-img" />
            <Card.Body>
              <Card.Title>{dish.name}</Card.Title>
              <Card.Text className="dish-desc">{dish.desc}</Card.Text>
              <p className="dish-price">₹ {dish.price}</p>
              <Button className="add-btn w-100">Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

    </div>
  );
}
