// src/components/CartDrawer.jsx
import React, { useState } from 'react';
import CartItem from './CartItem';
import './CartDrawer.css';

function CartDrawer({ isOpen, onClose, cartItems, onRemoveFromCart, onUpdateQuantity }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');

  const DISCOUNT = 0.2; // 80% OFF → pay 20%
  const total = cartItems.reduce((sum, item) => sum + item.price * DISCOUNT * item.quantity, 0);

  const handleSubmitOrder = () => {
    if (!name || !phone || !place) {
      alert('⚠️ Please fill all details.');
      return;
    }

    if (cartItems.length === 0) {
      alert('⚠️ Your cart is empty.');
      return;
    }

    // Create WhatsApp order message
    const lines = [];

    lines.push(`🧨 *Sri Pathrakali Crackers Order*`);
    lines.push(`--------------------------------`);
    lines.push(`👤 *Name:* ${name}`);
    lines.push(`📞 *Phone:* ${phone}`);
    lines.push(`📍 *Place:* ${place}`);
    lines.push(``);
    lines.push(`🛒 *Items Ordered:*`);

    cartItems.forEach((item, idx) => {
      const discountedPrice = item.price * DISCOUNT;
      const subtotal = discountedPrice * item.quantity;

      lines.push(`${idx + 1}. ${item.name}`);
      lines.push(`   Qty: ${item.quantity}`);
      lines.push(`   Price: ₹${discountedPrice.toFixed(2)} each`);
      lines.push(`   Subtotal: ₹${subtotal.toFixed(2)}`);
      lines.push(``);
    });

    lines.push(`💰 *Total Payable:* ₹${total.toFixed(2)}`);
    lines.push(`🎉 Thank you for ordering with us!`);

    const message = lines.join('\n');
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '917305171319';

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Mobile: open WhatsApp app
      window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    } else {
      // Desktop: try WhatsApp app via iframe first, fallback to web
      const appUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;
      const webUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = appUrl;
      document.body.appendChild(iframe);

      setTimeout(() => {
        document.body.removeChild(iframe);
        window.open(webUrl, '_blank');
      }, 1000);
    }
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
