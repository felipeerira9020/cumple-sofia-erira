
import { AiFillCaretDown} from "react-icons/ai";
import { Link } from "react-router-dom";
import { Container, H2 } from "./Ubicacion.styled";

const Ubicacion = () => {
  return (
    <Container>
       <H2>Ubicación</H2>
       <Link to='/ubicacion'><AiFillCaretDown className="flecha"/></Link>
       
    </Container>
  )
}

export default Ubicacion