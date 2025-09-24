import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Products from './pages/Products';
import Cart from './pages/Cart';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import './App.css';
import Register from './pages/Register';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const product = action.payload;
      const existingItem = state.cartItems.find(item => item._id === product._id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item._id === product._id
              ? {
                  ...item,
                  quantity: Math.min(item.quantity + 1, 100),
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        };
      }
    }

    case 'REMOVE_ITEM': {
      const idToRemove = action.payload.id;
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item._id !== idToRemove),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item._id !== id),
        };
      }
      if (quantity > 100) {
        return state; // ignore quantity > 100
      }
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item._id === id ? { ...item, quantity } : item
        ),
      };
    }

    default:
      return state;
  }
};

function App() {
  const initialState = { cartItems: [] };
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 100) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
    }
  };

  const getTotalCartItems = () => {
    return state?.cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;
  };

  const handlePurchase = () => {
    const totalAmount = state.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const amountStr = totalAmount.toFixed(2);
    const gpayUrl = `https://pay.google.com/gp/p/ui/pay?amount=${amountStr}&currency=INR`;
    window.open(gpayUrl, '_blank');
  };

  return (
    <Router>
      <Navbar cartItemCount={getTotalCartItems()} onCartClick={() => setCartOpen(true)} />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/after-payment" element={<AfterPayment />} /> */}
          <Route
            path="/products"
            element={<Products onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={state.cartItems}
                onRemoveFromCart={handleRemoveFromCart}
                onUpdateQuantity={handleUpdateQuantity}
              />
            }
          />
        </Routes>
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={state.cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onPurchase={handlePurchase}
        onClearCart={() => dispatch({ type: 'CLEAR_CART' })} // optional clear
      />

      <Footer />
    </Router>
  );
}

export default App;
