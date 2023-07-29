import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import swal from 'sweetalert';
import './Cart.css';
import NavComp from '../Nav/NavComp';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem('access_token');
      const decodedToken = jwt_decode(token);
      const user_id = decodedToken.user_id;

      const response = await axios.get(`http://localhost:8000/api/items/cart/${user_id}/`);
      setCartItems(response.data);
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (itemId) => {
    await axios.delete(`http://localhost:8000/api/items/${itemId}/`);

    const token = localStorage.getItem('access_token');
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.user_id;

    const response = await axios.get(`http://localhost:8000/api/items/cart/${user_id}/`);
    setCartItems(response.data);

    swal("Success!", "The item has been removed from the cart.", "success");
  };

  const subtotals = cartItems.map(item => item.package_price * item.quantity);
  const total = subtotals.reduce((total, subtotal) => total + subtotal, 0);

  const handleCheckout = async () => {
    try {
      // Create a checkout session on the server
      const response = await axios.post('http://localhost:8000/api/create-checkout-session', { amount: total });

      // Redirect to the Stripe Checkout page
      window.location.href = response.data.session.url;
    } catch (error) {
      console.error(error);
      swal("Error!", "An error occurred while processing your payment. Please try again later.", "error");
    }
  };

  return (
    <div>
      <NavComp/>
      <div className="cart-container">
        <h2 className="cart-head">Ticket Cart</h2>
        {cartItems.map((item, index) => (
          <div key={item.id} className="cart-item">
            <p>Event: {item.event_name}</p>
            <p>Package: {item.package_name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: Rs.{subtotals[index]}/=</p>
            <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))}
        <div className="cart-total">
          <h2>Total: Rs.{total}/=</h2>
        </div>
        <button className="checkout-button" onClick={handleCheckout}>Continue Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
