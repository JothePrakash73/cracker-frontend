// src/components/CartSummary.jsx
import React from 'react';
import '../pages/Cart.css';

function CartSummary({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('🛍️ Proceeding to checkout... (Add payment logic here)');
  };

  return (
    <div className="cart-summary">
      <h3>Cart Total: ₹{total.toFixed(2)}</h3>
      <button className="checkout-button" onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartSummary;
