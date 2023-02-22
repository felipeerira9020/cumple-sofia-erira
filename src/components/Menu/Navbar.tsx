import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Close, Menu, MenuContainer, Nav } from "./navbar.styled";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";


const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <MenuContainer>
      <Button onClick={handleClick}>
        <GiHamburgerMenu className="menu" />
      </Button>
      {clicked ? (
        <Nav>
          <Menu>
            <ul>
              <li>
                <a href="https://goo.gl/maps/jHanrGXURuR6rZ3LA" target="_blank">
                  {" "}
                  <AiFillCaretDown className="flecha" /> Confirmar asistencia
                </a>
              </li>
              <li>
                <a  href="https://api.whatsapp.com/send?phone=573017548257&text=Hola!%20Quiero%20confirmar%20mi%20asistencia%20al%20cumple%20de%20Sofia🎂%20%F0%9F%98%8A" target="_blank">
                  <AiFillCaretDown className="flecha" /> Ver ubicación
                </a>
              </li>
            </ul>
            <img src="https://media1.giphy.com/media/aZOuIQmvS8A78JsuUA/200w.gif" alt="" />
          </Menu>
          <Close onClick={handleClick}>X</Close>
        </Nav>
      ) : null}
    </MenuContainer>
  );
};

export default Navbar;
