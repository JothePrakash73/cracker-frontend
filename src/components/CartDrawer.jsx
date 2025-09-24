// src/components/CartDrawer.jsx
import React, { useState } from 'react';
import CartItem from './CartItem';
import './CartDrawer.css';

function CartDrawer({ isOpen, onClose, cartItems, onRemoveFromCart, onUpdateQuantity }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');

  // 80% OFF → You pay only 20%
  const DISCOUNT = 0.2;

  // Total payable (after 80% OFF)
  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * DISCOUNT * item.quantity;
  }, 0);

  const handleSubmitOrder = () => {
    if (!name || !phone || !place) {
      alert('⚠️ Please fill all details.');
      return;
    }
    if (cartItems.length === 0) {
      alert('⚠️ Your cart is empty.');
      return;
    }

    // Build WhatsApp message
    let message = `🧨 Order Details:%0A`;
    message += `👤 Name: ${name}%0A`;
    message += `📞 Phone: ${phone}%0A`;
    message += `📍 Place: ${place}%0A%0A`;
    message += `🛒 Items Ordered:%0A`;

    cartItems.forEach((item, idx) => {
      const discountedPrice = item.price * DISCOUNT;
      const subtotal = discountedPrice * item.quantity;
      message += `${idx + 1}. ${item.name} = ${item.quantity} x ₹${discountedPrice.toFixed(2)} = ₹${subtotal.toFixed(2)}%0A`;
    });

    message += `%0A✅ Total Payable: ₹${total.toFixed(2)}%0A`;
    message += `🎉 Thank you for shopping with Sri Pathrakali Crackers!`;

    // WhatsApp number (with country code, replace with yours)
    const whatsappNumber = '918148842731';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

    // Open WhatsApp in a new tab (works on all devices)
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-drawer-header">
        <h2>Your Cart</h2>
        <button onClick={onClose} className="close-button">&times;</button>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                onRemoveFromCart={onRemoveFromCart}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>

          <div className="cart-drawer-summary">
            <h3 style={{ color: 'white' }}>
              Total (after 80% OFF): ₹{total.toFixed(2)}
            </h3>

            <div className="customer-details" style={{ marginBottom: '10px' }}>
              <input
                type="text"
                placeholder="Customer Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>

            <button className="purchase-button" onClick={handleSubmitOrder}>
              📤 Submit Order to WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartDrawer;
