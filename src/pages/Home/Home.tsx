import Cinta from "../../components/Cinta/Cinta";
import Header from "../../components/Header/Header";
import Invitacion from "../../components/Invitacion/Invitacion";
import Sonido from "../../components/Sonido/Sonido";
import { ImgFondo } from "./Home.styled";

const Home = () => {


  
  return (
    <ImgFondo>
      <Sonido />
      <Header />
      <Cinta />
      <Invitacion />
    </ImgFondo>
  );
};

export default Home;
