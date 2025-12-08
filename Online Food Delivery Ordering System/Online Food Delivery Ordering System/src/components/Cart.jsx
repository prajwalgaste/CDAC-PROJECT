import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const deliveryFee = cart.length > 0 ? 30 : 0;
  const total = subtotal + deliveryFee;

  if (!cart || cart.length === 0) {
    return <h3 className="text-center mt-5">Your cart is empty</h3>;
  }

  return (
    <div className="cart-page-wrapper" style={{ padding: 30 }}>
      <h2 className="mb-4">Your Cart</h2>

      <div className="cart-content" style={{ display: "flex", gap: 30 }}>
        <div className="item-section" style={{ flex: 3 }}>
          {cart.map((item, i) => (
            <Card key={i} className="cart-item-card shadow-sm" style={{ display: "flex", gap: 16, padding: 12, marginBottom: 16 }}>
              <img src={item.img} alt={item.name} style={{ width: 120, height: 90, objectFit: "cover", borderRadius: 8 }} />

              <div className="cart-details" style={{ flex: 1 }}>
                <h5>{item.name}</h5>
                <p>₹ {item.price}</p>

                <div className="qty-box" style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <Button onClick={() => decreaseQty(item.name)}>-</Button>
                  <span>{item.qty}</span>
                  <Button onClick={() => increaseQty(item.name)}>+</Button>
                </div>

                <Button variant="danger" className="mt-2" onClick={() => removeItem(item.name)}>
                  Remove
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="summary-box shadow-sm" style={{ flex: 1, padding: 18, borderRadius: 8 }}>
          <h4>Bill Summary</h4>
          <p>Subtotal: ₹ {subtotal}</p>
          <p>Delivery Fee: ₹ {deliveryFee}</p>
          <h5>Total: ₹ {total}</h5>

          <Button className="w-100 mt-3" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </Button>

          <Button className="w-100 mt-2" variant="danger" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
