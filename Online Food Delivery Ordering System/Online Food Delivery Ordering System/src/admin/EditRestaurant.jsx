import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// Reuse AddRestaurant.css for styling
import "./AddRestaurant.css"; 

export default function EditRestaurant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurantId = parseInt(id);

  const [form, setForm] = useState({
    name: "",
    cuisine: "",
    rating: "",
    img: "",
  });

  // Load data on component mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("restaurants")) || [];
    const restaurant = stored.find((res) => res.id === restaurantId);

    if (restaurant) {
      // Set form state with fetched data
      setForm({
        name: restaurant.name,
        cuisine: restaurant.cuisine,
        rating: restaurant.rating.toString(), // Convert number back to string for input value
        img: restaurant.img,
      });
    } else {
      // Handle case where restaurant ID is not found (e.g., bad URL)
      alert("Restaurant not found.");
      navigate("/admin/restaurants");
    }
  }, [restaurantId, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored = JSON.parse(localStorage.getItem("restaurants")) || [];

    // Find the index of the restaurant to update
    const index = stored.findIndex((res) => res.id === restaurantId);

    if (index !== -1) {
      // Update the restaurant object
      stored[index] = {
        ...stored[index], // Keep original id
        ...form,
        rating: parseFloat(form.rating), // Ensure rating is saved as a number
      };

      // Save the updated array back to LocalStorage
      localStorage.setItem("restaurants", JSON.stringify(stored));
      alert("Restaurant updated successfully!");
      navigate("/admin/restaurants");
    } else {
      alert("Error: Restaurant ID not found.");
    }
  };
  
  // If data is not yet loaded, show a simple loading message
  if (!form.name) {
      return (
          <div className="add-wrapper">
              <div className="add-container">Loading...</div>
          </div>
      );
  }

  return (
    <div className="add-wrapper">
        <div className="add-container">
        <h2 className="add-title">Edit Restaurant</h2>
        <p className="add-subtitle">ID: {restaurantId} | Update the restaurant information below.</p>

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

            <div className="form-row">
                <div className="form-group half">
                    <label>Cuisine Type</label>
                    <input
                        type="text"
                        name="cuisine"
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
                value={form.img}
                onChange={handleChange}
                required
            />
            </div>

            <button className="save-btn" type="submit">
            Update Listing
            </button>
            <button className="cancel-btn" type="button" onClick={() => navigate('/admin/restaurants')}>
                Cancel
            </button>
        </form>
        </div>
    </div>
  );
}