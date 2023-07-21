import "./Landingheader.css";
import { FiTwitter } from 'react-icons/fi'

const Landingheader = () => {
    return (
    <>
    <div className="Landingheader_imagenes_carlos_miguel">
        <div className="Landingheader_imagenes_carlos">
        <img className="Landingheader_imagenes_carlos" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1689930848/Foto_Cuadrada_Carlos_3_d2yk1v.png" alt="imagen Carlos Martín" />

        <h3>
        <a href="https://twitter.com/cmrbolsa" target="_blank" rel="noopener noreferrer">
            <FiTwitter/>@cmrbolsa
        </a>
        </h3>
        </div>
        <div className="Landingheader_imagenes_miguel">
        <img className="Landingheader_imagenes_miguel" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1689932361/Miguel_Angel_Sosa_sin_fondo_218x220_dojfdj.png" alt="imagen Miguel Angel" />
        <h3>
        <a href="https://twitter.com/duricof" target="_blank" rel="noopener noreferrer">
            <FiTwitter/>@duricof
        </a>
        </h3>
        </div>
        
    </div>
        <section className="Landingheader_logo_imagen_fondo">
            <img src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1689771593/Logo_Cmrbolsa_NUEVO_Precio_y_Volumen_vpjm71.png" alt="Logo Cmrbolsa" />  
                                    
        </section>
        <div className="Landingheader_titulo_subtitulo">
        <h1>Taller <u>presencial</u> de <span className="azul_cmrbolsa_08accc">P</span>recio, <span className="azul_cmrbolsa_08accc">V</span>olumen y <span className="azul_cmrbolsa_08accc">E</span>structura</h1>
            <h2 className="azul_cmrbolsa_08accc">PEV</h2>
            -------------------------------------------------------
        </div> 
    </>
    );
}

export default Landingheader;
