import React, {useState} from 'react';
import './all_categoria.css';
import card_01 from './images/card_01.jpg';
import card_02 from './images/card_02.jpg';
import card_03 from './images/card_03.jpg';
import YG from './images/upper_deck.jpg';
import SM from './images/wizards.jpg';
import JYP from './images/pokemon.png';
import Cube from './images/konami.png';

function TradingCardGames() {

  const images = [card_01, card_02, card_03];

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
    <div className="TradingCardGames">
      <div className="content">
        <div className="product-image">
          <button className="arrow" onClick={handlePrev}>&lt;</button>
          <img src={images[currentIndex]} alt="Trading Card" />
          <button className="arrow" onClick={handleNext}>&gt;</button>
        </div>
        
        <div className="product-info">
          <h2>Exclusive Trading Card Games & Collectibles</h2>
          <p>
            ¡Descubre un mundo de cartas coleccionables y sorpresas cada mes! Incluye cartas de tus juegos favoritos de TCG, accesorios y mucho más, entregado directamente en tu puerta.
          </p>
          <p className="price">$49.99 / Mystery Box + Envío</p>
          <button className="buy-button">Comprar</button>
        </div>
      </div>

      <footer className="footer">
        <h3>Exclusive Partners:</h3>
        <div className="partners">
          <img src={JYP} alt="JYP Entertainment" />
          <img src={SM} alt="SM Entertainment" />
          <img src={Cube} alt="Cube Entertainment" />
          <img src={YG} alt="YG Entertainment" />
        </div>
      </footer>
    </div>
  );
}

export default TradingCardGames;
