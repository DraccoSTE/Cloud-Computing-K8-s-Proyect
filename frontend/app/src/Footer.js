import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Fan Treasure. Todos los derechos reservados.</p>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/categories">CATEGORIES</Link>
        <Link to="/subscription">SUBSCRIPTION</Link>
        <Link to="/about-us">ABOUT US</Link>
      </nav>
    </footer>
  );
}

export default Footer;