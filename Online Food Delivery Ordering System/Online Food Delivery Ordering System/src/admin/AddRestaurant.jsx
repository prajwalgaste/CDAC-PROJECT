import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddRestaurant.css";

export default function AddRestaurant() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    cuisine: "",
    rating: "",
    img: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored = JSON.parse(localStorage.getItem("restaurants")) || [];
    stored.push({ id: Date.now(), ...form });
    localStorage.setItem("restaurants", JSON.stringify(stored));

    alert("Restaurant added successfully!");
    navigate("/admin/restaurants");
  };

  return (
    <div className="add-container">
      <h2 className="add-title">Add New Restaurant</h2>

      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Restaurant Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter restaurant name"
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
            placeholder="Eg. Biryani, Italian, Chinese"
            value={form.cuisine}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <input
            type="number"
            step="0.1"
            max="5"
            name="rating"
            placeholder="Eg. 4.5"
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
            placeholder="Paste image link"
            value={form.img}
            onChange={handleChange}
            required
          />
        </div>

        <button className="save-btn" type="submit">
          Save Restaurant
        </button>
      </form>
    </div>
  );
}
