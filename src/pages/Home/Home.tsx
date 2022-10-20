import { useState } from "react";
import Cinta from "../../components/Cinta/Cinta";
import Header from "../../components/Header/Header";
import Imagen from "../../components/Imagen/Imagen";
import Invitacion from "../../components/Invitacion/Invitacion";
import { ImgFondo } from "./Home.styled";

const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 4000);
  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <ImgFondo>
            <Header />
            <Cinta />
            <Invitacion />
            <Imagen/>
          </ImgFondo>
        </>
      )}
    </>
  );
};

export default Home;
