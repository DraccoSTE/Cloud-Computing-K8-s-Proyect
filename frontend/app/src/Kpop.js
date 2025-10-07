import React, {useState} from 'react';
import './all_categoria.css';
import hoodie_twice from './images/hoodie_twice.jpg';
import hoodie_bp from './images/hoodie_bp.jpg';
import hoodie_bts from './images/hoodie_bts.jpg';
import YG from './images/YG.png';
import SM from './images/SM.png';
import JYP from './images/JYP.png';
import Cube from './images/CUBE.jpg';
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
    <div className="Mangas">
      <div className="content">
      <div className="product-image">
          <button className="arrow" onClick={handlePrev}>&lt;</button>
          <img src={images[currentIndex]} alt="Hoodie" />
          <button className="arrow" onClick={handleNext}>&gt;</button>
        </div>
        
        <div className="product-info">
          <h2>Exclusive K-Pop Culture & Anime Collectibles & Gear</h2>
          <p>
            ¡Recibe una sorpresa mensual llena de coleccionables y artículos de tus animes
            favoritos, grupos de K-pop y más, directamente en tu puerta!
          </p>
          <p className="price">$49.99 / Mistery Box + Envío</p>
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