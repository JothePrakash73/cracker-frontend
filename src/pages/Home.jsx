import React, { useEffect, useState } from "react";
import "./Home.css";

const slides = [
  { id: 1, image: "/images/diwali1.jpg", discount: "80% OFF" },
  { id: 2, image: "/images/diwali2.jpg", discount: "FESTIVAL DEAL" },
];

const companies = [
  { id: 1, name: "Meena Fireworks", image: "/images/meena.jpeg" },
  { id: 2, name: "Saravanvel", image: "/images/saravanvel.jpeg" },
];

const products = [
  { id: 1, name: "Flower Pots", image: "/images/FP.jpeg" },
  { id: 2, name: "Sparklers", image: "/images/Spar.jpeg" },
  { id: 3, name: "Ground Chakkar", image: "/images/Chak.jpeg" },
  { id: 4, name: "Rockets", image: "/images/Rock.jpeg" },
  { id: 5, name: "Garland Crackers", image: "/images/Garland.jpeg" },
  { id: 6, name: "Color Matches", image: "/images/Color.jpeg" },
  { id: 7, name: "Pencil Crackers", image: "/images/Pencil.jpeg" },
  { id: 8, name: "Atom Bombs", image: "/images/Atom.jpeg" },
  { id: 9, name: "Sky Shots", image: "/images/Sky.jpeg" },
  { id: 10, name: "Twinkling Stars", image: "/images/Twinkling.jpeg" },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = document.querySelectorAll(".product-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      <div className="greeting-wrapper">
        <div className="greeting-text-inner">
          <span>Welcome to Sri Pathrakali Crackers!</span>
          <span>Festival Offers Await!</span>
          <span>Shop Safely, Celebrate Brightly!</span>
        </div>
      </div>

      <div className="slideshow full-width">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide-wrapper" key={slide.id}>
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="slide"
              />
              <div className="discount-badge">{slide.discount}</div>
              <div className="order-now-3d">Order Now</div>
            </div>
          ))}
        </div>
        <div className="dots">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
            ></div>
          ))}
        </div>
      </div>

      <div className="main-content">
        <div className="products-section">
          <h2>Our Brands</h2>
          <div className="products-grid">
            {companies.map((comp) => (
              <div className="product-card fade-in-on-scroll" key={comp.id}>
                <img
                  src={comp.image}
                  alt={comp.name}
                  className="product-image company-logo"
                />
                <h3>{comp.name}</h3>
              </div>
            ))}
          </div>

          <h2 className="product-heading">Our Products</h2>
          <div className="products-grid">
            {products.map((prod) => (
              <div
                className={`product-card fade-in-on-scroll ${
                  prod.name === "Flower Pots" || prod.name === "Sparklers"
                    ? "highlight-image"
                    : ""
                }`}
                key={prod.id}
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="product-image"
                />
                <h3>{prod.name}</h3>
                
              </div>
            ))}
          </div>
          <div className="common-order-button-container">
  <button className="order-now-blink-button">Order Now</button>
</div>

        </div>

        <div className="services-section">
          <div className="service-card">
            <h3>Fast Delivery</h3>
            <p>Get your orders delivered on time in reliable lorry service.</p>
          </div>
          <div className="service-card">
            <h3>Bulk Orders</h3>
            <p>Special discounts and packages for large quantity purchases.</p>
          </div>
          <div className="service-card">
            <h3>Safe Packing</h3>
            <p>Carefully packed items with safety precautions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
