import React, {useState} from 'react';
import './all_categoria.css';
import geek_01 from './images/geek_01.jpeg';
import geek_02 from './images/geek_02.jpeg';
import geek_03 from './images/geek_03.jpg';
import box_lunch from './images/box-lunch.jpg';
import hot_topic from './images/hot-topic.jpg';
import insert_coin from './images/insert-coin.png';
import uniqlo from './images/uniqlo.png';

function GeekApparel() {

  const images = [geek_01, geek_02, geek_03];

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
    <div className="GeekApparel">
      <div className="content">
        <div className="product-image">
          <button className="arrow" onClick={handlePrev}>&lt;</button>
          <img src={images[currentIndex]} alt="Ropa Geek" />
          <button className="arrow" onClick={handleNext}>&gt;</button>
        </div>
        
        <div className="product-info">
        <h2>Exclusive Geek Apparel</h2>
          <p>
            Explora nuestra exclusiva colección de ropa geek inspirada en tus videojuegos, animes y personajes favoritos. Perfecta para fans que desean llevar su pasión a todas partes.
          </p>
          <p className="price">$59.99 / Prenda + Envío</p>
          <button className="buy-button">Comprar</button>
        </div>
      </div>

      <footer className="footer">
        <h3>Socios Exclusivos:</h3>
        <div className="partners">
          <img src={insert_coin} alt="insert_coin Entertainment" />
          <img src={hot_topic} alt="hot_topic Entertainment" />
          <img src={uniqlo} alt="uniqlo Entertainment" />
          <img src={box_lunch} alt="box_lunch Entertainment" />
        </div>
      </footer>
    </div>
  );
}

export default GeekApparel;
