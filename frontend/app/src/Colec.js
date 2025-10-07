import React, {useState} from 'react';
import './all_categoria.css';
import hoodie_twice from './images/colec_01.jpg';
import hoodie_bp from './images/colec_02.jpg';
import hoodie_bts from './images/colec_03.jpg';
import YG from './images/slideshow.jpg';
import SM from './images/bandai.png';
import JYP from './images/mcfarlane.jpg';
import Cube from './images/hot_toys.jpeg';
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
    <div className="Collectibles">
      <div className="content">
        <div className="product-image">
          <button className="arrow" onClick={handlePrev}>&lt;</button>
          <img src={images[currentIndex]} alt="Figura de Colección" />
          <button className="arrow" onClick={handleNext}>&gt;</button>
        </div>
        
        <div className="product-info">
          <h2>Exclusive Collectible Figures</h2>
          <p>
            ¡Descubre una sorprendente colección de figuras de colección de tus personajes
            favoritos de anime, películas y videojuegos, entregadas directamente en tu puerta cada mes!
          </p>
          <p className="price">$59.99 / Mystery Box + Envío</p>
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