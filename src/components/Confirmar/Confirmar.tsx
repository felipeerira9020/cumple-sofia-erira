import { AiFillCaretDown } from "react-icons/ai";
import { Container, H2, Redirigir } from "../Ubicacion/Ubicacion.styled";

const Confirmar = () => {
  return (
    <Container style={{ paddingTop: "30px", textAlign: "center" }}>
      <H2>Confirmar asistencia</H2>
      <p
        style={{
          fontSize: "1.2rem",
          color: "white",
          padding: "20px",
          backgroundColor: "#f44336",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        Fecha máxima para confirmar asistencia: 18 de marzo 2023
      </p>

      <AiFillCaretDown className="flecha" />
      <Redirigir
        href="https://api.whatsapp.com/send?phone=573017548257&text=Hola!%20Quiero%20confirmar%20mi%20asistencia%20al%20cumple%20de%20Sofia🎂%20%F0%9F%98%8A"
        target="_blank"
        style={{ margin: 0, height: "100px" }}
      >
        <img
          src="https://cuidadovital.co/wp-content/uploads/2020/02/boton-whatsapp.png"
          alt="what"
          style={{
            width: "50%",
            height: "auto",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        />
      </Redirigir>
    </Container>
  );
};

export default Confirmar;
