import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Click, Container, H2, Redirigir, Ubication } from "./Ubicacion.styled";

const Ubicacion = () => {
  //crear un evento que el texto de click se desaparezca y aparezca el texto de ubicacion cada segundo

  const [color , setColor] = useState("#1b9089");
  //que cambie de color cada segundo
  const [opacity, setOpacity] = useState(1);

  setInterval(() => {
    setOpacity(opacity === 1 ? 0.5 : 1);
  }, 1000);

  setInterval(() => {
    setColor(color === "#1b9089" ? "#90891b" : "#1b9089");
  }, 2000);












  return (
    <Container>
      <H2>Ubicación</H2>
      <Link to="/ubicacion">
        <AiFillCaretDown className="flecha" />
      </Link>
      <Redirigir href="https://goo.gl/maps/jHanrGXURuR6rZ3LA" target="_blank">
        <Ubication>
          <Click>
            <h3 style={{ color: color, opacity: opacity }}>Click aquí para ver la ubicación</h3>
          </Click>
        </Ubication>
      </Redirigir>
    </Container>
  );
};

export default Ubicacion;
