import React from 'react';
import '../pages/Cart.css';

function CartItem({ item, onRemoveFromCart, onUpdateQuantity, disabled = false }) {
  const discountPercent = 80; // 🔥 Changed to 80%
  const originalPrice = item.price;
  const discountedPrice = Math.round(originalPrice * (100 - discountPercent) / 100);
  const subtotal = discountedPrice * item.quantity;

  const handleDecrease = () => {
    if (!disabled && item.quantity > 1)
      onUpdateQuantity(item._id, item.quantity - 1);
  };

  const handleIncrease = () => {
    if (!disabled && item.quantity < 100)
      onUpdateQuantity(item._id, item.quantity + 1);
  };

  return (
    <div className="cart-item">
      <img
        src={`http://localhost:5000${item.image}`}
        alt={item.name}
        className="cart-item-image"
      />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>
          Price:{' '}
          <span className="original-price" style={{ textDecoration: 'line-through', color: 'gray' }}>
            ₹{originalPrice.toFixed(2)}
          </span>{' '}
          <span className="discounted-price" style={{ fontWeight: 'bold', color: 'green' }}>
            ₹{discountedPrice.toFixed(2)}
          </span>
        </p>

        <p className="offer-text">{discountPercent}% OFF</p>

        <div className="quantity-controls">
          <button onClick={handleDecrease} disabled={disabled || item.quantity <= 1}>
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease} disabled={disabled || item.quantity >= 100}>
            +
          </button>
        </div>

        <p>Subtotal: ₹{subtotal.toFixed(2)}</p>

        <button
          className="remove-button"
          onClick={() => onRemoveFromCart(item._id)}
          disabled={disabled}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
