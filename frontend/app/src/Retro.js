import React, {useState} from 'react';
import './all_categoria.css';
import hoodie_twice from './images/retro_01.jpg';
import hoodie_bp from './images/retro_02.jpeg';
import hoodie_bts from './images/retro_03.jpg';
import YG from './images/super7.png';
import SM from './images/hasbro_pulse.png';
import JYP from './images/Neca.png';
import Cube from './images/funko.jpeg';
function Mangas() {

  const images = [hoodie_twice, hoodie_bp, hoodie_bts];

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
    <div className="RetroMerch">
      <div className="content">
        <div className="product-image">
          <button className="arrow" onClick={handlePrev}>&lt;</button>
          <img src={images[currentIndex]} alt="Retro Merch" />
          <button className="arrow" onClick={handleNext}>&gt;</button>
        </div>
        
        <div className="product-info">
          <h2>Retro Merch Collectibles & Gear</h2>
          <p>
            ¡Descubre una colección única de artículos retro que te llevarán de vuelta a tus series y juegos favoritos de los 80s y 90s!
          </p>
          <p className="price">$69.99 / Mystery Box + Envío</p>
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

export default Mangas;