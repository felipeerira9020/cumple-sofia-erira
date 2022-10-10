import { useState } from "react";

const Sonido = () => {
  // Carga un sonido a través de su fuente y lo inyecta de manera oculta en el DOM

  const [audio] = useState(new Audio("/assets/sonido.mpeg"));

  // Reproduce el sonido
  const play = () => {
    audio.play();
    audio.autoplay = true;
    audio.loop = true;
  };

  setTimeout(() => {
    play();
  }, 3000);

  const volumen = () => {
    audio.volume = 0.07;
  };

  return (
    <div>
      <audio
        loop
        onVolumeChange={volumen}
        onPlay={play}
        src="/assets/sonido.mpeg"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Sonido;
