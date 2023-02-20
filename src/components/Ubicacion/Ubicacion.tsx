import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Container, H2, Object } from "./Ubicacion.styled";

const Ubicacion = () => {
  return (
    <Container>
      <H2>Ubicación</H2>
      <Link to="/ubicacion">
        <AiFillCaretDown className="flecha" />
      </Link>
      {/* <object
        data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3935065407704!2d-75.56139828528327!3d6.211719795503317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442929d39560b1%3A0x2cd27b5c36b0e99d!2sMall%20Edificio%20Select!5e0!3m2!1ses!2sco!4v1676910648172!5m2!1ses!2sco"
        width="100%"
        height="400"
        type="text/html"
      ></object> */}
      <Object data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3935065407704!2d-75.56139828528327!3d6.211719795503317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442929d39560b1%3A0x2cd27b5c36b0e99d!2sMall%20Edificio%20Select!5e0!3m2!1ses!2sco!4v1676910648172!5m2!1ses!2sco" type="text/html"  />
    </Container>
  );
};

export default Ubicacion;
