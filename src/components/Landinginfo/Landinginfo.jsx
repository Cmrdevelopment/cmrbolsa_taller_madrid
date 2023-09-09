

import SimpleMap from "../SimpleMap/SimpleMap";
import "./Landinginfo.css";

const Landinginfo = () => {
    const handleButtonClick = () => {
        const elementoDestino = document.querySelector('#reservarPlaza');
        if (elementoDestino) {
          elementoDestino.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
    };
    return (
        <> 
            <section className="Landinginfo_info">
            <div className="Landinginfo_info_titulo_y_subtitulo">             
            <h2>Manipulación en los mercados y como <spam className="azul_cmrbolsa_08accc"> aprovecharse de esa manipulación</spam> conociendo la estructura y el volumen</h2>
            <h3>(¿O sigues pensando que <u>con indicadores</u> podrás batir al mercado? 😢)</h3>
            <br />
            <span className="LandingGeneral_linea_de_puntos"> -------------------------------------------------------</span>
            <div>
            <button className="boton_reserva" onClick={handleButtonClick}>Quiero reservar mi plaza</button>
            </div>           
            </div>
            <span className="Landinginfo_info_fecha_y_lugar">
            <h2>Lugar y Fecha: 16 Septiembre 2023</h2>
            <h4>MADRID</h4>
            <h3>Sábado 16 de 16:00 a 20:00 horas</h3>
            <h2>¿Donde será el taller?</h2>
            <h5>Hotel Silken Puerta Madrid en calle Juan Rizi, 5, 28027 Madrid</h5>
            <h5><a className="Landinginfo_info_como_llegar_al_hotel"  href={'https://goo.gl/maps/V12PDL2CeKTSVGbw6'} target="_blank" rel="noopener noreferrer">¿Como llegar al hotel?</a></h5>
            <h5>¡Si deseas quedarte en hotel, no dudes en preguntarme! Te proporcionaré un código especial para que puedas disfrutar de un descuento.</h5><h5> ¡Espero verte pronto y que vivas un TALLER inolvidable en nuestro hotel! 🌟🏨</h5>
            <h3 className="Landing_info_anuncio_patrocinio">Patrocinado por:</h3>
            <section className="Landing_info_patrocinio">          
            <img src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1694260187/BisonTrade_H_positivo_lineal_p1lu4k.png" alt="Logo Bison" />                                    
            </section>
            </span>
            <SimpleMap />
            <br />            
            <div className="Landinginfo_info_a-quien-va-dirigido-y-que-aprenderas">
            <h2>¿A quien va dirigido?</h2>
            <h5 className="Landinginfo_info_dirigido-para-aquellos">(Dirigido para aquellos que <u>desean conocer o ya se han iniciado</u> en la metodología de Precio y Volumen)</h5>
            <p className="Landinginfo_info_a-quien-va-dirigido-y-te-gusta"> Si te gusta la inversión o especulación en la bolsa y quieres ver cómo leemos el mercado, solo debes venir y disfrutar del mercado con nosotros. Hablaremos sobre la manipulación de los mercados, pero no la manipulación que uno suele pensar, sino la que podrás ver a través de un gráfico. Sí, aquella que hacen los `profesionales` para que la `masa` deje su pasta sin `darse cuenta`.</p>
            <h2 className="Landinginfo_info_titulo_enteder_y_comprender">Entender, comprender para operar conociendo cómo y porqué se mueve el mercado</h2>   

            <div className="Landinginfo_info_a-quien-va-dirigido-comprender_y_operar">
            <p>Aprenderás y practicaremos, bajo la metodología de precio, volumen y estructura (PEV), y comprenderás <strong>cómo un profesional hace sus jugarretas y arrebata</strong>, de una manera sencilla, la pasta a la masa.</p>
            <p>Realizarás hipótesis basadas en el conocimiento y <strong>reducirás el miedo a entrar y operar en el mercado</strong> porque sabrás dónde poner tu stop y dónde poner tu profit en cada momento gracias a la estructura.</p>

            </div> 
            <p className="Landinginfo_info_a-quien-va-dirigido-adivinar">No se trata de adivinar ni de apostar a un largo o corto, se trata de ENTENDER y COMPRENDER qué es lo que ocurre en el mercado y cuándo podemos hacer hipótesis y cuándo no. Ayudándote en tu operativa a asumir riesgos proporcionados y con una gestión monetaria aceptable.</p>           
            
            </div>
            <span className="LandingGeneral_linea_de_puntos">-------------------------------------------------------</span>
            <br />
            <section id="reservarPlaza"></section>
        </section>
    </>
    );
}

export default Landinginfo;
