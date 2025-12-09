import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Note: Assuming you have a file named restaurantData.js with your mock data
import restaurantData from "../data/restaurantData.js"; 
import { CartContext } from "../context/CartContext.jsx";
import "./Menu.css";

export default function Menu() {
  const { id } = useParams();
  const navigate = useNavigate();
  // Find the restaurant using its ID
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

  const handleAddToCart = (dish) => {
    addToCart(dish);
  }

  return (
    <div className="menu-wrapper">
      {/* RESTAURANT HEADER */}
      <div className="menu-header">
        <img 
            src={restaurant.img} 
            alt={restaurant.name} 
            className="menu-banner" 
        />
        <div className="menu-info">
          <h2 className="menu-title">{restaurant.name}</h2>
          <p className="menu-cuisine">{restaurant.cuisine}</p>
          <span className="menu-rating">
            <span role="img" aria-label="star">⭐</span> {restaurant.rating}
          </span>
        </div>
      </div>

      <h3 className="section-subtitle">Dishes</h3>

      {/* DISHES GRID */}
      <div className="menu-grid">
        {/* Assuming each restaurant object has a 'dishes' array */}
        {restaurant.dishes.map((dish, idx) => (
          <div key={idx} className="dish-card">
            <img 
                src={dish.img} 
                alt={dish.name} 
                className="dish-img" 
            />
            
            <div className="dish-content">
              <h5 className="dish-name">{dish.name}</h5>
              <p className="dish-price">₹ {dish.price}</p>
              
              <div className="dish-actions">
                <button 
                    className="add-to-cart-btn" 
                    onClick={() => handleAddToCart(dish)}
                >
                    Add to Cart
                </button>
                <button 
                    className="buy-now-btn" 
                    onClick={() => handleAddAndGoCart(dish)}
                >
                    Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}