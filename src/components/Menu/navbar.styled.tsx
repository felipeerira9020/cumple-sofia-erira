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
  background: transparent;
  cursor: pointer;
  width: auto;
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
  background: #ff00009d;
  color: white;
  font-size: 30px;
  font-weight: 100;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  border: transparent;
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
    text-align: left;
    padding-left: 40px;
    li {
      margin: 20px 0;
      a {
        text-decoration: none;
        color: pink;
        font-size: 25px;
        font-weight: 100;
        letter-spacing: 2px;
        &:hover {
            color: #90891b;
        }    
    }
    }
  }
  img {
    width: 200px;
    height: auto;
    padding-top: 200px;
  }
`;
