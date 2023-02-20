import { Container, H2 } from "../Ubicacion/Ubicacion.styled"
import { Image } from "./espero.styled"

const Espero = () => {
  return (
    <Container>
      <H2 
       style={{ paddingBottom: "20px", textAlign: "center" }}
      >¡Los esperamos!</H2>
         <Image src="/assets/sofia.jpeg" alt="sofia"/>    
    </Container>
  )
}

export default Espero
