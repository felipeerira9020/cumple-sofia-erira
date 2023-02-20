import { IProps } from "../model/interface";
import { Maribel, Mariposas } from "./Header.styled";

const Header = ({ img }: IProps) => {
  return (
    <Maribel style={{ backgroundImage: `url(${img})` }}>
      <Mariposas />
    </Maribel>
  );
};

export default Header;
