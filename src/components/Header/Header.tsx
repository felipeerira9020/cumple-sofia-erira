import Menu from "../Menu/Navbar";
import { IProps } from "../model/interface";
import { Maribel, Mariposas } from "./Header.styled";

const Header = ({ img }: IProps) => {
  return (
    <Maribel style={{ backgroundImage: `url(${img})` }}>
      <Mariposas />
      <Menu/>
    </Maribel>
  );
};

export default Header;
