import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Click, Container, H2, Redirigir, Ubication } from "./Ubicacion.styled";

const Ubicacion = () => {
  const [color , setColor] = useState("#383b3bd3");
  const [opacity, setOpacity] = useState(1);

  setInterval(() => {
    setOpacity(opacity === 1 ? 0.9 : 1);
  }, 1000);

  setInterval(() => {
    setColor(color === "#383b3bd3" ? "#383b3bef" : "#383b3bd3");
  }, 1000);

  return (
    <Container>
      <H2>Ubicación</H2>
        <AiFillCaretDown className="flecha" />
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
