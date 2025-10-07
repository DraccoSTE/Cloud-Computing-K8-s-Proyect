import React, {useState} from 'react';
import './all_categoria.css';
import comic_01 from './images/comic_01.jpg';
import comic_02 from './images/comic_02.jpg';
import comic_03 from './images/comic_03.jpg';
import Marvel from './images/marvel.jpg';
import DC from './images/DC.png';
import DarkHorse from './images/darkhorse.png';
import ImageComics from './images/image.jpg';

function Comics() {

  const images = [comic_01, comic_02, comic_03];

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
    <div className="Comics">
      <div className="content">
        <div className="product-image">
          <button className="arrow" onClick={handlePrev}>&lt;</button>
          <img src={images[currentIndex]} alt="Comic Cover" />
          <button className="arrow" onClick={handleNext}>&gt;</button>
        </div>
        
        <div className="product-info">
          <h2>Exclusive Comic Book Collectibles & Gear</h2>
          <p>
            ¡Explora una selección de cómics exclusivos y productos inspirados en tus superhéroes y villanos favoritos, entregados cada mes directamente en tu puerta!
          </p>
          <p className="price">$49.99 / Mystery Box + Envío</p>
          <button className="buy-button">Comprar</button>
        </div>
      </div>

      <footer className="footer">
        <h3>Exclusive Partners:</h3>
        <div className="partners">
          <img src={Marvel} alt="Marvel Comics" />
          <img src={DC} alt="DC Comics" />
          <img src={DarkHorse} alt="Dark Horse Comics" />
          <img src={ImageComics} alt="I Comics" />
        </div>
      </footer>
    </div>
  );
}

export default Comics;
