import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import restaurantData from "../data/restaurantData.js";
import { CartContext } from "../context/CartContext.jsx";
import "./Menu.css";

export default function Menu() {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = restaurantData.find((r) => r.id === Number(id));
  const { addToCart } = useContext(CartContext);

  if (!restaurant) {
    return <h2 className="text-center mt-5">Restaurant not found</h2>;
  }

  const handleAddAndGoCart = (dish) => {
    // add item to cart, then redirect to cart
    addToCart(dish);
    navigate("/cart");
  };

  return (
    <div className="menu-page" style={{ padding: "30px 60px" }}>
      <div className="menu-header shadow-sm" style={{ paddingBottom: 20 }}>
        <img src={restaurant.img} alt="" className="menu-banner" style={{ width: 240, height: 160, objectFit: "cover", borderRadius: 12 }} />
        <div>
          <h2 className="menu-title">{restaurant.name}</h2>
          <p className="menu-cuisine">{restaurant.cuisine}</p>
          <span className="menu-rating">⭐ {restaurant.rating}</span>
        </div>
      </div>

      <div className="dishes-container" style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
        {restaurant.dishes.map((dish, idx) => (
          <Card key={idx} className="dish-card shadow-sm" style={{ borderRadius: 8 }}>
            <Card.Img src={dish.img} className="dish-img" style={{ height: 160, objectFit: "cover" }} />
            <Card.Body>
              <h5 className="dish-name">{dish.name}</h5>
              <p className="dish-price">₹ {dish.price}</p>

              <div className="menu-footer" style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="primary" onClick={() => handleAddAndGoCart(dish)}>
                  Add
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
