import "./LandingPrecio.css";
import { FaCheck } from "react-icons/fa"

const handleTallerClick = () => {
  
    window.location.href = 'https://cmrbolsa.com';
  };

  const handleTallerDigitalClick = () => {

    window.location.href = 'https://cmrbolsa.com/mi-libro/';
  };
  const handleButtonTallerClick = () => {
    window.open('https://cmrbolsa.com/', '_blank');
  };
  const handleButtonTallerEbookClick = () => {
    window.open('https://cmrbolsa.com/', '_blank');
  };

const LandingPrecio = () => {
    return (
        <>
        <div className="LandingPrecio_y_cuanto_cuesta">
            <div className="LandingPrecio_con-libro-o-sin-libro">
            <h1>¿Y cuanto cuesta?</h1>
            <p>Tienes estas dos opciones, con o sin libro digital de `Desgranando la esencia del mercado`</p>
            </div>
        </div>
        <div className="LandingPrecio_container_general">
            
      <button className="LandingPrecio_container_tablas" onClick={handleTallerClick}>
      <div className="LandingPrecio_titulo_y_precio">
            <div>
                <h1>Taller</h1>
                <h2 className="LandingPrecio_precio">57€</h2>
            </div>
            <div className="LandingPrecio_info_taller">
             <h3><FaCheck/>4 horas de TALLER</h3>
                <h3><FaCheck/> Merienda trader</h3>
                <h3> <FaCheck/>---------------</h3>
                <h3><FaCheck/>---------------</h3>

                <button className="boton_reserva" onClick={handleButtonTallerClick}>Reservo PLAZA</button>
            </div>
        </div>
      </button>
      <button className="LandingPrecio_container_tablas" onClick={handleTallerDigitalClick}>
        <div className="LandingPrecio_titulo_y_precio">
            <div>
                <h1>Taller + Digital</h1>
                <h2 className="LandingPrecio_precio">67,50€</h2>
            </div>
            <div className="LandingPrecio_info_taller">
                <h3><FaCheck/>4 horas de TALLER</h3>
                <h3><FaCheck/>Merienda trader</h3>
                <h3><FaCheck/>ebook de Desgranando la esencia del mercado</h3>
                <button className="boton_reserva" onClick={handleButtonTallerEbookClick}>Reservo PLAZA y EBOOK</button>
            </div>
        </div>
      </button>
    </div>
    <div className="LandingPrecio_quieres_saber_mas">
            <h1>¿Quieres saber más del taller?</h1>
            <p>Entra en el TELEGRAM y pregunta todas tus dudas</p>
            </div>
    </>
    );
}

export default LandingPrecio;
