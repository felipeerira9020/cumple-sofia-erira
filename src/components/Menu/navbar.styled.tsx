import styled from "styled-components";

export const MenuContainer = styled.nav`
  .menu {
    font-size: 40px;
    z-index: 20;
    color: #000000c8;
    background-color: #ffffffae;
    border-radius: 8px;
    box-shadow: 0 0 10px 0 #0000006a;
    padding: 0px;
    font-weight: 100;
  }
`;
export const Button = styled.button`
  background: red;
  cursor: pointer;
  width: auto;
  :hover {
    background: blue;
  }
`;

export const Nav = styled.div`
  width: 80%;
  display: block;
  position: absolute;
  top: 0;
  left: auto;
  right: 0;
  text-align: center;
  background: #232324;
  //que el background con degradado blanco y negro en forma de triangulo{}
    background: linear-gradient(
    50deg,
    #dadada 0%,
    #8f8d8d 10%,
    #0a0a0a 50%,
    #111111 100%
    );
    
        


  height: 100%;
  z-index: 100;
  height: 100%;
`;
export const Close = styled.button`
  background: red;
  color: white;
  font-size: 30px;
  font-weight: 100;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
`;

export const Menu = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin: 20px 0;
      a {
        text-decoration: none;
        color: white;
        font-size: 25px;
        font-weight: 100;
        letter-spacing: 2px;
        //que tenga decoracion arriba y abajo

        text-shadow: 0 0 10px #0000006a;
        text-decoration: underline;
      
    }
    }
  }
  img {
    width: 200px;
    height: auto;
    padding-top: 200px;
  }
`;
