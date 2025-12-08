import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Form, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const deliveryFee = 30;
  const total = subtotal + deliveryFee;

  const placeOrder = () => {
    if (!address.trim()) {
      alert("Please enter delivery address");
      return;
    }
    if (!payment) {
      alert("Please select payment method");
      return;
    }

    clearCart();
    // after placing order, send user back to home (or you can navigate to success)
    navigate("/home");
  };

  return (
    <div className="checkout-wrapper" style={{ padding: 30 }}>
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-container" style={{ display: "flex", gap: 30 }}>
        <div style={{ flex: 2 }}>
          <Card className="p-3 shadow-sm">
            <h4>Delivery Address</h4>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your complete address…"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="address-box"
            />
          </Card>

          <Card className="p-3 shadow-sm mt-4">
            <h4>Payment Method</h4>
            <Form.Check label="UPI" name="payment" value="UPI" type="radio" onChange={(e) => setPayment(e.target.value)} />
            <Form.Check label="Credit / Debit Card" name="payment" value="Card" type="radio" onChange={(e) => setPayment(e.target.value)} />
            <Form.Check label="Cash on Delivery (COD)" name="payment" value="COD" type="radio" onChange={(e) => setPayment(e.target.value)} />
          </Card>
        </div>

        <Card className="p-3 shadow-sm" style={{ flex: 1 }}>
          <h4>Order Summary</h4>

          {cart.map((it, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span>{it.name} × {it.qty}</span>
              <span>₹ {it.price * it.qty}</span>
            </div>
          ))}

          <hr />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Subtotal</span>
            <span>₹ {subtotal}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Delivery Fee</span>
            <span>₹ {deliveryFee}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, marginTop: 12 }}>
            <span>Total</span>
            <span>₹ {total}</span>
          </div>

          <Button className="place-order-btn w-100 mt-3" onClick={placeOrder}>
            Place Order
          </Button>
        </Card>
      </div>
    </div>
  );
}
