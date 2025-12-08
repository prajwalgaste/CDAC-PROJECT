import React, { useState } from "react";
import restaurantData from "../data/restaurantData";
import "./ManageRestaurants.css";
import { Link } from "react-router-dom";

export default function ManageRestaurants() {
  const [restaurants, setRestaurants] = useState(restaurantData);

  const deleteRestaurant = (id) => {
    const updated = restaurants.filter((item) => item.id !== id);
    setRestaurants(updated);
  };

  return (
    <div className="manage-wrapper">
      <h2 className="manage-title">Manage Restaurants</h2>

      <Link to="/admin/add-restaurant">
        <button className="add-btn">+ Add Restaurant</button>
      </Link>

      <div className="restaurant-grid">
        {restaurants.map((res) => (
          <div className="restaurant-card-admin" key={res.id}>
            <img src={res.img} alt={res.name} className="admin-res-img" />

            <div className="admin-res-info">
              <h3>{res.name}</h3>
              <p>{res.cuisine}</p>
            </div>

            <div className="admin-res-actions">
              <Link to={`/admin/edit-restaurant/${res.id}`}>
                <button className="edit-btn">Edit</button>
              </Link>

              <button
                className="delete-btn"
                onClick={() => deleteRestaurant(res.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
