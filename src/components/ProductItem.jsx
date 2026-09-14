// ProductItem.jsx
import React from 'react';

function ProductItem({ product, onAddToCart }) {
  return (
    <div className="product-item">
<img
  src={
    product.imageUrl?.startsWith("http")
      ? product.imageUrl
      : `https://api.sripathrakalicrackers.in${product.imageUrl}`
  }
  alt={product.name}
/>      <h3>{product.name}</h3>
      <p>₹{product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
