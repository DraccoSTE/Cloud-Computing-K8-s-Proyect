import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch('/api/random-background');
        const data = await res.json();
        if (alive && res.ok && data?.url) setBackgroundImage(data.url);
      } catch {}
    })();
    return () => { alive = false; };
  }, []);

  const style = backgroundImage
    ? { background: `url(${backgroundImage}) no-repeat center center/cover` }
    : { background: 'linear-gradient(180deg,#1f2937,#111827)' }; // fallback sin "Loading..."

  return (
    <section className="hero" style={style}>
      <div className="hero-content">
        <div className="h11">
          <h1>Encuentra Sorpresas Únicas Cada Mes</h1>
        </div>
        <div className="bubble">
          <p>Únete a Fan Treasure y recibe una caja misteriosa llena de productos exclusivos de tus franquicias geek y anime favoritas.</p>
        </div>
        <Link to="/Subscription" className="cta-button">Suscríbete Ahora</Link>
      </div>
    </section>
  );
}

export default Hero;
