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

    // 1. Get existing data from LS
    const stored = JSON.parse(localStorage.getItem("restaurants")) || [];
    
    // 2. Add new item
    const newRestaurant = { 
        id: Date.now(), 
        ...form,
        // Ensure rating is a number for math operations later
        rating: parseFloat(form.rating) 
    };
    
    stored.push(newRestaurant);
    
    // 3. Save back to LS
    localStorage.setItem("restaurants", JSON.stringify(stored));

    alert("Restaurant added successfully!");
    navigate("/admin/restaurants");
  };

  return (
    <div className="add-wrapper">
        <div className="add-container">
        <h2 className="add-title">Add New Restaurant</h2>
        <p className="add-subtitle">Enter details to display on the customer app.</p>

        <form className="add-form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Restaurant Name</label>
            <input
                type="text"
                name="name"
                placeholder="e.g. The Burger Joint"
                value={form.name}
                onChange={handleChange}
                required
            />
            </div>

            <div className="form-row">
                <div className="form-group half">
                    <label>Cuisine Type</label>
                    <input
                        type="text"
                        name="cuisine"
                        placeholder="e.g. Italian"
                        value={form.cuisine}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group half">
                    <label>Rating (0-5)</label>
                    <input
                        type="number"
                        step="0.1"
                        max="5"
                        min="0"
                        name="rating"
                        placeholder="4.5"
                        value={form.rating}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-group">
            <label>Image URL</label>
            <input
                type="url"
                name="img"
                placeholder="https://example.com/image.jpg"
                value={form.img}
                onChange={handleChange}
                required
            />
            </div>

            <button className="save-btn" type="submit">
            Create Listing
            </button>
            <button className="cancel-btn" type="button" onClick={() => navigate('/admin/restaurants')}>
                Cancel
            </button>
        </form>
        </div>
    </div>
  );
}