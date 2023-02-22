import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Close, Menu, MenuContainer, Nav } from "./navbar.styled";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  console.log(clicked);

  return (
    <MenuContainer>
      <Button onClick={handleClick}>
        <GiHamburgerMenu className="menu" />
      </Button>
      {clicked ? (
        <Nav>
          <Menu>

          <ul>
            <li><a href="">Confirmar asistencia</a></li>
            <li><a href="">Ver ubicación</a></li>
          </ul>
          <img src="/assets/maribel.png" alt="" />
          </Menu>
          <Close onClick={handleClick}>X</Close>
        </Nav>
      ) : null}
    </MenuContainer>
  );
};

export default Navbar;
