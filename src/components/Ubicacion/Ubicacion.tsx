import { AiFillCaretDown } from "react-icons/ai";
import { Click, Container, H2, Redirigir, Ubication } from "./Ubicacion.styled";

const Ubicacion = () => {


  return (
    <Container>
      <H2>Ubicación</H2>
        <AiFillCaretDown className="flecha" />
      <Redirigir href="https://goo.gl/maps/jHanrGXURuR6rZ3LA" target="_blank">
        <Ubication>
          <Click>
            <h3 >Click aquí para ver la ubicación</h3>
          </Click>
        </Ubication>
      </Redirigir>
    </Container>
  );
};

export default Ubicacion;
