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
      {/* hacer un link con una imagen que nos lleve a la ubicacion  */}
      {/* <a
        href="https://goo.gl/maps/jHanrGXURuR6rZ3LA"
        target="_blank"
        rel="noreferrer"
      > */}
      <Redirigir href="https://goo.gl/maps/jHanrGXURuR6rZ3LA" target="_blank">
        <Ubication />
      </Redirigir>
      {/* </a> */}
    </Container>
  );
};

export default Ubicacion;
