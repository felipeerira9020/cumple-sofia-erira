import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Container, H2, Redirigir, Ubication } from "./Ubicacion.styled";

const Ubicacion = () => {
  return (
    <Container>
      <H2>Ubicación</H2>
      <Link to="/ubicacion">
        <AiFillCaretDown className="flecha" />
      </Link>
      <Redirigir href="https://goo.gl/maps/jHanrGXURuR6rZ3LA" target="_blank">
        <Ubication />
      </Redirigir>
    </Container>
  );
};

export default Ubicacion;
