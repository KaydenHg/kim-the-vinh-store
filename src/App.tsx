import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'shop'>('home');

  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <div className="nav-shortcuts container">
          <button onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>Home</button>
          <button onClick={() => setCurrentPage('shop')} className={currentPage === 'shop' ? 'active' : ''}>Shop</button>
        </div>
        <main>
          {currentPage === 'home' ? <Home /> : <Shop />}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
