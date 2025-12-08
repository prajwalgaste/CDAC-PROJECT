import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import restaurantData from "../data/restaurantData";
import "./AddRestaurant.css"; // reuse same styling

export default function EditRestaurant() {
  const { id } = useParams();
  const navigate = useNavigate();

  const restaurant = restaurantData.find(
    (res) => res.id === parseInt(id)
  );

  const [form, setForm] = useState({
    name: restaurant?.name || "",
    cuisine: restaurant?.cuisine || "",
    rating: restaurant?.rating || "",
    img: restaurant?.img || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Restaurant updated successfully!");

    navigate("/admin/restaurants");
  };

  return (
    <div className="add-container">
      <h2 className="add-title">Edit Restaurant</h2>

      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Restaurant Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Cuisine</label>
          <input
            type="text"
            name="cuisine"
            value={form.cuisine}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            step="0.1"
            max="5"
            value={form.rating}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            name="img"
            value={form.img}
            onChange={handleChange}
            required
          />
        </div>

        <button className="save-btn" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}
