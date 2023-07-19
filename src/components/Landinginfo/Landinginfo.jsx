import SimpleMap from "../SimpleMap/SimpleMap";
import "./Landinginfo.css";

const Landinginfo = () => {
    return (
        <> 
            <section className="Landinginfo_info">
            <div className="Landinginfo_info_titulo_y_subtitulo">             
            <h2>Manipulación del mercado y como aprovecharse de él conociendo la estructura y el volumen</h2>
            <h3>(¿O sigues pensando que con indicadores podrás batir al mercado?)</h3>
            <br />
            -------------------------------------------------------
            </div>
            <span className="Landinginfo_info_fecha_y_lugar">
            <h2>Lugar y Fecha: 16 Septiembre 2023</h2>
            <h4>MADRID</h4>
            <h3>Sábado 16 de 16:00 a 20:00 horas</h3>
            </span>
            <SimpleMap />
            <h2>¿A quien va dirigido?</h2>
            <h3>(Dirigido para aquellos que desean conocer o ya se han iniciado en la metodología de Precio y Volumen)</h3>
        </section>

        <img src="" alt="" />
    </>
    );
}

export default Landinginfo;
