import React from "react";
import { Card, Form, Button, Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CustomerHome.css";

export default function CustomerHome() {
  const navigate = useNavigate();

  const restaurants = [
    {
      id: 1,
      name: "Spicy Biryani House",
      cuisine: "Biryani, North Indian",
      rating: 4.4,
      img: "https://i.pinimg.com/736x/79/53/fb/7953fbcd346daad06ae3afe79db15b3c.jpg",
    },
    {
      id: 2,
      name: "Italiano Pizza Hub",
      cuisine: "Pizza, Italian",
      rating: 4.2,
      img: "https://i.pinimg.com/736x/a9/3e/2c/a93e2c4fb1e2f5bba5e33c162c0dfac2.jpg",
    },
    {
      id: 3,
      name: "Sweet Dessert World",
      cuisine: "Desserts, Ice Cream",
      rating: 4.7,
      img: "https://i.pinimg.com/736x/59/ba/f5/59baf5853213b8c9c85831c4b92874a2.jpg",
    },
    {
      id: 4,
      name: "Burger Factory",
      cuisine: "Burger, Fast Food",
      rating: 4.0,
      img: "https://i.pinimg.com/736x/a0/47/d5/a047d54afd7a9f44d0dcedd3f4a89cc5.jpg",
    },
    {
      id: 5,
      name: "Tandoori Flames",
      cuisine: "Tandoori, Punjabi",
      rating: 4.5,
      img: "https://i.pinimg.com/1200x/ed/97/db/ed97db6a0a649e6dad477ad14f7f4b97.jpg",
    },
    {
      id: 6,
      name: "Chinese Wok Corner",
      cuisine: "Chinese, Asian",
      rating: 4.3,
      img: "https://i.pinimg.com/736x/3f/65/c1/3f65c1c7f274de09ef2bdf4c7ebfe674.jpg",
    },
    {
      id: 7,
      name: "Fresh Salad Bar",
      cuisine: "Healthy, Salads",
      rating: 4.6,
      img: "https://i.pinimg.com/736x/cf/b5/f5/cfb5f5722c374665e441555b3d83e0bc.jpg",
    },
    {
      id: 8,
      name: "Royal Thali Express",
      cuisine: "Indian Thali, Veg Meals",
      rating: 4.1,
      img: "https://i.pinimg.com/736x/64/b1/52/64b152db9ae61c6cd1968e33c1cbaf60.jpg",
    },
  ];

  return (
    <div className="home-wrapper">

      {/* NAVBAR */}
      <Navbar expand="lg" className="navbar-custom shadow-sm">
        <Container fluid>
          <Navbar.Brand className="brand">FoodExpress</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto nav-links">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/orders">My Orders</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/signin" className="logout">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* SEARCH BAR */}
      <div className="search-container">
        <Form.Control
          type="text"
          placeholder="Search restaurants or dishes..."
          className="search-bar"
        />
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="category-container">
        <Button className="category-btn">Biryani</Button>
        <Button className="category-btn">Pizza</Button>
        <Button className="category-btn">Desserts</Button>
        <Button className="category-btn">Burgers</Button>
        <Button className="category-btn">Chinese</Button>
      </div>

      {/* RESTAURANTS GRID */}
      <div className="restaurant-list">
        {restaurants.map((res) => (
          <div key={res.id} className="restaurant-item">
            <Card className="restaurant-card shadow-sm">

              <Card.Img src={res.img} className="restaurant-img" />

              <Card.Body>
                <Card.Title className="restaurant-title">{res.name}</Card.Title>
                <Card.Text className="restaurant-cuisine">{res.cuisine}</Card.Text>

                <div className="rating-row">
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
          </div>
        ))}
      </div>

    </div>
  );
}
