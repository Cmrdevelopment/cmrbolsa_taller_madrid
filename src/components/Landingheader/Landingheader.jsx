import "./Landingheader.css";


const Landingheader = () => {
    return (
    <>
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
