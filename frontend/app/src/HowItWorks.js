import React from 'react';
import './css/styles.css';
function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>¿Cómo Funciona?</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Elige tu Suscripción</h3>
          <p>Selecciona el plan que mejor se adapte a ti.</p>
        </div>
        <div className="step">
          <h3>2. Recibe tu Caja</h3>
          <p>Cada mes, una caja temática será entregada en tu puerta.</p>
        </div>
        <div className="step">
          <h3>3. Descubre y Disfruta</h3>
          <p>Sumérgete en una experiencia llena de sorpresas geek.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;