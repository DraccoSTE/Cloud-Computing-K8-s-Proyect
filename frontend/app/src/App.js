// App.js
import React from 'react';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import Categories from './Categories';
import Subscription from './Subscription';
import Footer from './Footer';
import Kpop from './Kpop';
import Retro from './Retro';
import Colec from './Colec';
import Geek from './Geek';
import TCG from './TCG';
import Comics from './Comics';
import Cosplay from './Cosplay';
import Horror from './Horror';
import Login from './login';
import Home from './home'; 
import './App.css';

function Bar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/subscription">Subscription</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/login">Join | Log in 🛒</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Bar />
      <main>
        {location.pathname === "/" && <Home />}
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/kpop" element={<Kpop />} />
          <Route path="/Retro" element={<Retro />} />
          <Route path="/figuras-colec" element={<Colec />} />
          <Route path="ropa-geek" element={<Geek />} />
          <Route path="/tcg" element={<TCG />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/cosplay" element={<Cosplay />} />
          <Route path="/horror" element={<Horror />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;