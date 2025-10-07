import './css/styles.css';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';

function Subscription() {
  return (
    <div className="App">
      <main>
        <section className="subscription-section">
          <div className="subscription-container">
            <div className="subscription-images">
              <img src={img1} alt="Fan Treasure Subscription" />
              <img src={img2} alt="Fan Treasure Subscription Box" />
            </div>
            <div className="subscription-content">
              <h1>SUSCRIPCIÓN</h1>
              <p>
                ¡Únete a la Aventura con FanTreasure! <br />
                ¿Eres un verdadero fan del anime, los videojuegos, y todo lo Geek? Entonces es hora de llevar tu pasión al siguiente nivel con una suscripción mensual, semestral o anual a FanTreasure.
              </p>
              <h2>Beneficios de Suscribirte:</h2>
              <ul>
                <li><strong>Sorpresas Exclusivas:</strong> Productos limitados y ediciones especiales solo para suscriptores.</li>
                <li><strong>Ahorros Garantizados:</strong> Obtén más valor por tu dinero con cajas que siempre superan el precio de tu suscripción.</li>
                <li><strong>Contenidos Curados:</strong> Seleccionamos a mano cada artículo para asegurarnos de que recibas solo lo mejor del mundo Geek y anime.</li>
                <li><strong>Acceso Prioritario:</strong> Sé el primero en enterarte y tener acceso a nuestras colaboraciones especiales y productos únicos.</li>
                <li><strong>Eventos y Ofertas Especiales:</strong> Como suscriptor, serás parte de promociones exclusivas, sorteos y concursos.</li>
              </ul>
              <p>
                <strong>Membresía Anual: ¡Ahorra más!</strong> Al optar por una <strong>suscripción anual</strong>, no solo recibirás 12 meses de increíbles cajas llenas de sorpresas, sino también ahorros adicionales en comparación con la suscripción mensual. Además, los suscriptores anuales recibirán un regalo especial al finalizar el año: un producto exclusivo de edición limitada para cerrar con broche de oro.
              </p>
              <p>
                <strong>Flexibilidad Total:</strong> No importa si eliges la suscripción mensual o anual, tienes la libertad de cancelar o pausar tu suscripción en cualquier momento. ¡Sin compromisos!
              </p>
              <div className="subscription-buttons">
                <button>1 mes</button>
                <button>6 meses</button>
                <button>12 meses</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Subscription;
