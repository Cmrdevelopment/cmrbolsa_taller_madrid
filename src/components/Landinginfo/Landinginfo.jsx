
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
            <h5><a className="Landinginfo_info_como_llegar_al_hotel"  href={'https://goo.gl/maps/V12PDL2CeKTSVGbw6'} target="_blank" rel="noopener noreferrer">¿Como llegar al hotel?</a></h5>
            </span>
            <SimpleMap />
            <br />            
            <div className="Landinginfo_info_a-quien-va-dirigido-y-que-aprenderas">
            <h2>¿A quien va dirigido?</h2>
            <h5>(Dirigido para aquellos que <u>desean conocer o ya se han iniciado</u> en la metodología de Precio y Volumen)</h5>
            <p className="Landinginfo_info_a-quien-va-dirigido-y-te-gusta"> Si te gusta la inversión o especulación en la bolsa y quieres ver como leemos el mercado, solo debes venir y disfrutar del mercado con nosotros. Hablaremos sobre la manipulación de los mercados pero no la manipulación que uno suele pensar sino la que podrás ver a través de un grafico. Si, aquella que hacen los ´profesionales` para que ´la masa` deje su pasta sin ´darse cuenta´  </p>
            <h2>Entender, comprender para operar conociendo cómo y porqué se mueve el mercado</h2>   

            <div className="Landinginfo_info_a-quien-va-dirigido-comprender_y_operar">
            <p>Aprenderás y practicaremos, bajo la metodología de precio, volumen y estructura, <strong> como profesional hace sus jugarretas y arrebata</strong>, de una manera sencilla la pasta a la masa.</p>
            <p>Realizarás hipótesis basadas en el conocimiento y <strong>reducirás el miedo a entrar y operar en el mercado porque sabrás donde poner tu stop y donde poner tu profit</strong> en cada momento gracias a la estructura.</p>                           
            </div> 
            <p className="Landinginfo_info_a-quien-va-dirigido-adivinar">No se trata de adivinar ni de apostar a un largo o corto, se trata de ENTERDER y COMPRENDER que es lo que ocurre en el mercado y cuando podemos hacer hipotesis y cuando no ayudandote en tú operativa a asumir riesgos proporcionados y con una gestión monetaria aceptable. </p>              
            
            <br />
            </div>
            -------------------------------------------------------
        </section>

        <img src="" alt="" />
    </>
    );
}

export default Landinginfo;
