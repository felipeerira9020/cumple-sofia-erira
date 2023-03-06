import { Fecha } from "../../components/Fecha/Fecha";
import Header from "../../components/Header/Header";
import Invitacion from "../../components/Invitacion/Invitacion";
import Ubicacion from "../../components/Ubicacion/Ubicacion";
import { Footer, ImgFondo, Loading } from "./Home.styled";
import { useEffect, useState } from "react";
import { IProps } from "../../components/model/interface";
import Confirmar from "../../components/Confirmar/Confirmar";
import Confetti from "../../components/Confetti/Confetti";
import Espero from "../../components/Espero/Espero";
import { Container } from "./Home.styled";
const Home = () => {
  const [data, setData] = useState<IProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6398eb4efe03352a94e1d4ba.mockapi.io/api/users")
      .then((res) => res.json())
      .then((data) => setData(data));
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return (
      <Container>

      <ImgFondo
        style={{ backgroundImage: `url(${data?.[0]?.fondo})`, height: "100vh" }}
      >
        <Loading />{" "}
      </ImgFondo>
      </Container>
    );
  }
  return (
    <div>
       <Confetti/>
       <Container>
      <ImgFondo style={{ backgroundImage: `url(${data?.[0]?.fondo})` }}>
        <Header img={data?.[0]?.img} />
        <Invitacion />
        <Fecha />
        <Ubicacion />
        <Confirmar />
        <Espero/>
      <Footer>
        <p>© 2023</p>
        <p>Contacto: 3017548257 - 3004296003</p>
      </Footer>
      </ImgFondo>
      </Container>
    </div>
   
  );
};

export default Home;
