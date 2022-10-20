import { useState } from "react";
import Cinta from "../../components/Cinta/Cinta";
import { Fecha } from "../../components/Fecha/Fecha";
import Header from "../../components/Header/Header";
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
            <Fecha/>
          </ImgFondo>
        </>
      )}
    </>
  );
};

export default Home;
