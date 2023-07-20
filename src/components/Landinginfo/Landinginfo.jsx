
import SimpleMap from "../SimpleMap/SimpleMap";
import "./Landinginfo.css";


const Landinginfo = () => {
    const handleButtonClick = () => {
        window.open('https://cmrbolsa.com/', '_blank');
      };
    return (
        <> 
            <section className="Landinginfo_info">
            <div className="Landinginfo_info_titulo_y_subtitulo">             
            <h2>Manipulación en los mercados y como <spam className="azul_cmrbolsa_08accc"> aprovecharse de esa manipulación</spam> conociendo la estructura y el volumen</h2>
            <h3>(¿O sigues pensando que <u>con indicadores</u> podrás batir al mercado? 😢)</h3>
            <br />
            -------------------------------------------------------
            <div>
            <button className="boton_reserva" onClick={handleButtonClick}>Quiero reserva MI PLAZA</button>
            </div>
           
            </div>
            <span className="Landinginfo_info_fecha_y_lugar">
            <h2>Lugar y Fecha: 16 Septiembre 2023</h2>
            <h4>MADRID</h4>
            <h3>Sábado 16 de 16:00 a 20:00 horas</h3>
            <h2>¿Donde será el taller?</h2>
            <h5>Hotel Silken Puerta Madrid en calle Juan Rizi, 5, 28027 Madrid</h5>
            <h5><a href={'https://goo.gl/maps/V12PDL2CeKTSVGbw6'} target="_blank" rel="noopener noreferrer">¿Como llegar al hotel?</a></h5>
            </span>
            <SimpleMap />
            <br />
            <h2>¿A quien va dirigido?</h2>
            <h5>(Dirigido para aquellos que desean conocer o ya se han iniciado en la metodología de Precio y Volumen)</h5>
        </section>

        <img src="" alt="" />
    </>
    );
}

export default Landinginfo;
