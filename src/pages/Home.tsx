import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Elegance Defined</h1>
          <p>Discover our exclusive collection of fine jewelry.</p>
          <button className="cta-btn">Explore Collection</button>
        </div>
      </section>

      <section className="featured container">
        <h2 className="section-title">Featured Pieces</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
