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
  //para tablet y desktop display none
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Button = styled.button`
  background: transparent;
  border-color: transparent;
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
  /* background: linear-gradient(
    50deg,
    #425174 0%,
    #425174  10%,
    #061123 50%,
    #061123 100%
  ); */
  background-image: url("https://i.pinimg.com/736x/f2/60/40/f26040d4cb685cdd0ba532dd1459c27f.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    

  z-index: 100;
  height: 100%;
  position: fixed;

  //hacer animacion al abrir
    @keyframes slideIn {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}
    animation: slideIn 0.5s ease-in-out;



`;
export const Close = styled.button`
 // background: #d29fca;
 background: black;
  color: white;
  font-size: 30px;
  font-weight: 100;
  border-radius: 10px;
  width: auto;
    padding: 10px 20px;
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
    display: flex;
    flex-direction: column;
    gap: 20px;
    li {
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
       //color: #fddce2;
        color: #ffffff;
        padding: 10px;
        border-radius: 10px;
        background: #494545;
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
    width: 250px;
    height: auto;
    padding-top: 100px;
  }
`;
