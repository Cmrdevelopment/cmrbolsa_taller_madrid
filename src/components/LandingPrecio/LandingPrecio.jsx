import "./LandingPrecio.css";
import { FaCheck } from "react-icons/fa"

const handleTallerClick = () => {
  window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RN8JT6RS6YUAS';
};

const handleTallerDigitalClick = () => {
  window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Z2WZAT8T5CGM6';
};

const handleButtonTallerClick = () => {
  window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RN8JT6RS6YUAS';
};

const handleButtonTallerEbookClick = () => {
  window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Z2WZAT8T5CGM6';
};

const LandingPrecio = () => {
    return (
        <>
        <div className="LandingPrecio_y_cuanto_cuesta">
            <div className="LandingPrecio_con-libro-o-sin-libro">
            <h1>¿Y cuanto cuesta?</h1>
            <p>Tienes estas dos opciones, con o sin libro digital (ebook) de `Desgranando la esencia del mercado`</p>
            <p> Precio del ebook <span className="LandingPrecio_precio-del-libro"> 19.80€</span> 10.50€</p>
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
                <h3><FaCheck/>Ebook Desgranando</h3>
                <button className="boton_reserva" onClick={handleButtonTallerEbookClick}>Reservo PLAZA y EBOOK</button>                            
            </div>
        </div>
      </button>
    </div>
    <div className="LandingPrecio_envio_del_libro">
                <p>El envío del ebook `Desgranando la esencia del mercado` se realzará 24-48 horas <p></p>después de reservar la plaza al correo una vez realizada la compra</p>        
                </div>
                
    </>
    );
}

export default LandingPrecio;
