import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart({ cartId }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/items/cart/1/`);
        const fetchedItems = response.data;

        const mergedItems = Object.values(
          fetchedItems.reduce((acc, item) => {
            if (acc[item.ticket_package]) {
              acc[item.ticket_package].quantity += item.quantity;
            } else {
              acc[item.ticket_package] = item;
            }
            return acc;
          }, {})
        );

        setCartItems(mergedItems);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [cartId]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.package_price, 0);
  const total = subtotal;  // Update this if you have additional charges to add to the total

  const removeFromCart = async (itemId) => {
    console.log('Removing item with ID:', itemId);  // Add this line
    try {
      await axios.delete(`http://localhost:8000/api/items/cart/1/`);
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id}>
          <h2>{item.ticket_package}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.package_price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Subtotal: {subtotal}</h2>
      <h2>Total: {total}</h2>
    </div>
  );
}

export default Cart;
