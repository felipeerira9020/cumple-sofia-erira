import { Fecha } from "../../components/Fecha/Fecha";
import Header from "../../components/Header/Header";
import Invitacion from "../../components/Invitacion/Invitacion";
import Ubicacion from "../../components/Ubicacion/Ubicacion";
import { ImgFondo, Loading } from "./Home.styled";
import { useEffect, useState } from "react";
import { IProps } from "../../components/model/interface";

const Home = () => {
  const [data, setData] = useState<IProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6398eb4efe03352a94e1d4ba.mockapi.io/api/users")
      .then((res) => res.json())
      .then((data) => setData(data));
      setTimeout(() => setLoading(false), 2000);
  }, []);
  
  if (loading) {
    return <Loading/>
  }
  return (
    <div>
      <ImgFondo style={{ backgroundImage: `url(${data?.[0]?.fondo})` }}>
        <Header img={data?.[0]?.img} />
        <Invitacion />
        <Fecha />
        <Ubicacion />
      </ImgFondo>
    </div>
  );
};

export default Home;
