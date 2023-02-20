import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Click, Container, H2, Redirigir, Ubication } from "./Ubicacion.styled";

const Ubicacion = () => {
  const [color , setColor] = useState("#1b9089");
  const [opacity, setOpacity] = useState(1);

  setInterval(() => {
    setOpacity(opacity === 1 ? 0.6 : 1);
  }, 1000);

  setInterval(() => {
    setColor(color === "#1b9089" ? "#90891b" : "#1b9089");
  }, 1000);

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
