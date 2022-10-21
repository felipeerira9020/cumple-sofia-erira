import { useState } from "react";
import Cinta from "../../components/Cinta/Cinta";
import { Fecha } from "../../components/Fecha/Fecha";
import Header from "../../components/Header/Header";
import Invitacion from "../../components/Invitacion/Invitacion";
import Ubicacion from "../../components/Ubicacion/Ubicacion";
import { ImgFondo, Loading } from "./Home.styled";

const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <div>
      {loading ? (
        <ImgFondo height="100vh">
          <Loading />
        </ImgFondo>
      ) : (
        <div>
          <ImgFondo>
            <Header />
            <Cinta />
            <Invitacion />
            <Fecha />
            <Ubicacion/>
          </ImgFondo>
        </div>
      )}
    </div>
  );
};

export default Home;
