import './css/styles.css';
import logo from './images/logo.jpg'; // Update with the correct path to your logo image

function AboutUs() {
  return (
    <div className="about-us-section">
      <div className="about-content">
          <h1>ABOUT US</h1>
          <p>
            En <strong>FanTreasure</strong>, nuestra misión es simple: llevar la emoción y la sorpresa del unboxing al siguiente nivel para los fanáticos de la cultura Geek y el anime en todo el mundo! Nacimos de la pasión por coleccionar objetos únicos y la nostalgia de nuestras series y videojuegos favoritos. Sabemos lo que significa ser un verdadero fan, y por eso, nuestras cajas misteriosas están pensadas para crear una experiencia de descubrimiento en cada entrega.
          </p>

          <h2>¿Qué ofrecemos?</h2>
          <p>
            Cada caja de FanTreasure es una aventura temática, cuidadosamente seleccionada para asegurar que cada fan reciba productos de alta calidad que celebren lo mejor de sus universos favoritos. Ya seas fanático del anime más popular, los videojuegos retro, la ciencia ficción o las películas de héroes, tenemos una caja especialmente para ti.
          </p>

          <h2>Nuestra Promesa</h2>
          <p>
            En FanTreasure, cada caja es una obra de amor. Trabajamos con marcas reconocidas y coleccionistas para traer productos exclusivos y ediciones limitadas que los verdaderos fans apreciarán. No solo vendemos productos; creamos una experiencia que conecta a nuestros suscriptores con sus pasiones y personajes favoritos.
          </p>
        
      </div>
      <div className="about-image">
          <img src={logo} alt="Fan Treasure Logo" className="about-logo" />
        </div>
    </div>
  );
}

export default AboutUs;