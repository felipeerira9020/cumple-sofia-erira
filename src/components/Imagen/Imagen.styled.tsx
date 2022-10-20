import styled from "styled-components";

//crear un div con fondo de imagen

export const ImgFondo = styled.div`
  background-image: url("/assets/sofia.jpg");
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid var(--primary-color);
  border-radius: 10px;

  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px;
  &:hover {
    opacity: 0.8;
  }

  animation: fade 4s infinite;
  @keyframes fade {
    0% {
      opacity: 1;
      box-shadow: 0 0 0 1px var(--primary-color);
    }
    25% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.5;
      box-shadow: 0 0 0 1px var(--secondary-color);
    }
    75% {
      opacity: 0.8;
    }

    100% {
      opacity: 1;
      box-shadow: 0 0 0 1px var(--primary-color);
    }
  } ;
`;
