import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import './Products.css';

function Products({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();

  const categories = [
    'All', '30 cm Sparklers', '15 cm Sparklers', '7 cm Sparklers',
    '12 cm Sparklers', '50 cm Sparklers', '10 cm Sparklers',
    'All Sparklers', 'Flower Pots', 'Chakkars', 'Rockets',
    'Fancy Novelties', 'Fountains', 'Candles & Twinkling Star',
    'Mega Fountains', 'One Sound Crackers', 'Rockets','New Novelties',
    'Elite Series','Mini Aerial Fancy','Paper Bombs','Repeating Shots',
    'Atom Bombs','New Arrival','Aerial Magic Fancy','Color Matches'
  ];

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(p => ({
          ...p,
          imageUrl: `http://localhost:5000${p.image}`,
        }));
        setProducts(formatted);
        setFiltered(formatted);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
      });
  }, []);

  useEffect(() => {
    let temp = [...products];

    if (category !== 'All') {
      if (category === 'All Sparklers') {
        temp = temp.filter(p => p.category.toLowerCase().includes('sparklers'));
      } else {
        temp = temp.filter(p => p.category === category);
      }
    }

    if (search.trim()) {
      const keyword = search.toLowerCase();
      temp = temp.filter(p => p.name.toLowerCase().includes(keyword));
    }

    setFiltered(temp);
  }, [search, category, products]);

  // Firework effect
  useEffect(() => {
    const container = document.getElementById('firework-container');

    const createBurst = () => {
      const count = 20;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight * 0.5 + 100;

      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-burst';

        const angle = (360 / count) * i;
        const distance = Math.random() * 80 + 40;
        const dx = Math.cos((angle * Math.PI) / 180) * distance;
        const dy = Math.sin((angle * Math.PI) / 180) * distance;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);

        container?.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 1500);
      }
    };

    const interval = setInterval(createBurst, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="products-page">
      <div className="firework-container" id="firework-container"></div>

      <h2>🎆 Our Products</h2>

      <div className="filters" style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
        <button onClick={() => { setSearch(''); setCategory('All'); }}>Reset</button>
      </div>

      {category !== 'All' && (
        <h3 className="category-heading" style={{color:'white'}}>🎇 {category}</h3>
      )}

      <div className="products-grid">
        {filtered.length === 0 ? (
          <div className="not-found">❌ No products found</div>
        ) : (
          filtered.map((product) => (
            <ProductItem
              key={product._id}
              product={product}
              onAddToCart={() => onAddToCart(product, navigate)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
