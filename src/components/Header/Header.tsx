import { useEffect, useState } from "react";
import { IProps } from "../model/interface";
import { Maribel, Mariposas } from "./Header.styled";


const Header = () => {
  const [data, setData] = useState<IProps[]>([]);

  useEffect(() => {
    fetch("https://6398eb4efe03352a94e1d4ba.mockapi.io/api/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Maribel style={{ backgroundImage: `url(${data?.[0]?.img})` }}>
      <Mariposas />
    </Maribel>
  );
};

export default Header;
