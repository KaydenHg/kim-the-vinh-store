import React from 'react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">KIM THE VINH</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li>
            <button className="cart-btn">
              Cart ({cartCount})
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
