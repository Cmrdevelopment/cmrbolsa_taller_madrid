import "./LandingSaberMas.css";

const LandingSaberMas = () => {
  const handleButtonTelegramClick = () => {
    window.open('https://t.me/+ep0SYmGWWJU2ZWRk', '_blank');
  };

  return (
    <div className="LandingSaberMas_quieres_saber_mas">
    <button className="LandingSaberMas_boton_quieres_saber_mas" onClick={handleButtonTelegramClick}>
      <div className="LandingSaberMas_texto">
        <h1>¿Quieres saber más del taller?</h1>
        <p>Entra en el <span>TELEGRAM</span> y pregunta todas tus dudas</p>
        <p>Únete</p>      
      </div>
    </button>
    </div>
  );
}

export default LandingSaberMas;





