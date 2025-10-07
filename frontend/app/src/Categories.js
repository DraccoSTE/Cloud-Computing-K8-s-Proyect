import React from 'react';
import { Link } from 'react-router-dom';
import './css/styles.css';
import kpop from './images/kpop.jpg';
import retroImg from './images/retro.jpeg';
import figuImg from './images/figu.jpg';
import aniclothingImg from './images/aniclothing.jpg';
import tcgImg from './images/tcg.jpg';
import comicsImg from './images/comics.jpg';
import cosplayImg from './images/cosplay.jpg';
import terrorImg from './images/terror.jpg';

function Categories() {
  return (
    <main>
      <section className="categories">
        <div className="category">
          <Link to="/kpop">
            <img src={kpop} alt="Kpop" />
            <div className="label">K-Pop</div>
          </Link>
        </div>
        <div className="category">
          <Link to="/retro">
            <img src={retroImg} alt="Retro Merch" />
            <div className="label">Retro Merch</div>
          </Link>
        </div>
        <div className="category">
          <Link to="/figuras-colec">
            <img src={figuImg} alt="Figuras de Colección" />
            <div className="label">Figuras de Colección</div>
          </Link>
        </div>
        <div className="category">
          <Link to="/ropa-geek">
            <img src={aniclothingImg} alt="Ropa Geek" />
            <div className="label">Ropa Geek</div>
          </Link>
        </div>
        <div className="category">
          <Link to="/tcg">
            <img src={tcgImg} alt="Trading Card Games" />
            <div className="label">Trading Card Games</div>
          </Link>
        </div>
        <div className="category">
          <Link to="/comics">
            <img src={comicsImg} alt="Comics" />
            <div className="label">Comics</div>
          </Link>
        </div>
        <div className="category">
          <Link to="/cosplay">
            <img src={cosplayImg} alt="Cosplays" />
            <div className="label">Cosplays</div>
          </Link>
        </div>
        <div className="category">
          <Link to="/horror">
            <img src={terrorImg} alt="Horror" />
            <div className="label">Horror</div>
          </Link>
        </div>
      </section>
    </main>
  );
}


export default Categories;