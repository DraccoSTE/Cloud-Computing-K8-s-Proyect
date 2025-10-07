import React, {useState} from 'react';
import './all_categoria.css';
import horror_01 from './images/horror_01.jpg';
import horror_02 from './images/horror_02.jpg';
import horror_03 from './images/horror_03.jpg';
import Blumhouse from './images/blumhouse.jpg';
import Universal from './images/universal.jpg';
import A24 from './images/A24.jpg';
import Lionsgate from './images/lionsgate.jpg';

function Horror() {

  const images = [horror_01, horror_02, horror_03];

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
    <div className="Horror">
      <div className="content">
        <div className="product-image">
          <button className="arrow" onClick={handlePrev}>&lt;</button>
          <img src={images[currentIndex]} alt="Horror Collectible" />
          <button className="arrow" onClick={handleNext}>&gt;</button>
        </div>
        
        <div className="product-info">
          <h2>Exclusive Horror Collectibles & Gear</h2>
          <p>
            ¡Sumérgete en el horror con artículos exclusivos de tus franquicias de terror favoritas como *Five Nights at Freddy's*, películas de terror clásicas y más, entregados directamente en tu puerta cada mes!
          </p>
          <p className="price">$49.99 / Mystery Box + Envío</p>
          <button className="buy-button">Comprar</button>
        </div>
      </div>

      <footer className="footer">
        <h3>Exclusive Partners:</h3>
        <div className="partners">
          <img src={Blumhouse} alt="Blumhouse Productions" />
          <img src={Universal} alt="Universal Pictures" />
          <img src={A24} alt="A24" />
          <img src={Lionsgate} alt="Lionsgate" />
        </div>
      </footer>
    </div>
  );
}

export default Horror;
