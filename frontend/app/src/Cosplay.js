import React, { useState } from 'react';
import './all_categoria.css';
import cosplay_01 from './images/cosplay_01.jpg';
import cosplay_02 from './images/cosplay_02.jpg';
import cosplay_03 from './images/cosplay_03.jpg';
import ezcosplay from './images/ezcosplay.jpg';
import miccostumes from './images/miccostumes.png';
import role from './images/role.jpg';
import pro from './images/pro.jpg';

function Cosplay() {

  const images = [cosplay_01,cosplay_02,cosplay_03];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="Cosplay">
      <div className="content">
        <div className="product-image">
          <button className="arrow" onClick={handlePrev}>&lt;</button>
          <img src={images[currentIndex]} alt="Cosplay" />
          <button className="arrow" onClick={handleNext}>&gt;</button>
        </div>

        <div className="product-info">
          <h2>Exclusive Cosplay Gear & Accessories</h2>
          <p>
            ¡Sumérgete en el mundo de tus personajes favoritos! Cada caja contiene accesorios de cosplay y productos exclusivos de series de anime y cultura geek.
          </p>
          <p className="price">$59.99 / Cosplay Box + Envío</p>
          <button className="buy-button">Comprar</button>
        </div>
      </div>

      <footer className="footer">
        <h3>Exclusive Partners:</h3>
        <div className="partners">
          <img src={role} alt="role Entertainment" />
          <img src={miccostumes} alt="miccostumes Entertainment" />
          <img src={pro} alt="pro Entertainment" />
          <img src={ezcosplay} alt="ezcosplay Entertainment" />
        </div>
      </footer>
    </div>
  );
}

export default Cosplay;
