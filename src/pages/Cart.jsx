  // src/pages/Cart.jsx
  import React from 'react';
  import CartItem from '../components/CartItem';
  import CartSummary from '../components/CartSummary';
  import './Cart.css';

  function Cart({ cartItems, onRemoveFromCart, onUpdateQuantity }) {
    return (
      <div className="cart-page">
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. Go add some awesome products!</p>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                  onRemoveFromCart={onRemoveFromCart}
                  onUpdateQuantity={onUpdateQuantity}
                />
              ))}
            </div>
            <CartSummary cartItems={cartItems} />
          </>
        )}
      </div>
    );
  }

  export default Cart;
