import { useState } from "react";
import Cinta from "../../components/Cinta/Cinta";
import { Fecha } from "../../components/Fecha/Fecha";
import Header from "../../components/Header/Header";
import Invitacion from "../../components/Invitacion/Invitacion";
import { ImgFondo } from "./Home.styled";

const Home = () => {
  //crear un loading que se demore en cargar mientras carga la pagina con sus imagenes
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div>
      {loading ? (
        <ImgFondo />
      ) : (
        <div>
          <ImgFondo>
            <Header />
            <Cinta />
            <Invitacion />
            <Fecha />
          </ImgFondo>
        </div>
      )}
    </div>
  );
};

export default Home;
