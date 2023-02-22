import styled from "styled-components";

export const Maribel = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  top: 0;
  button {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 20;
    @media (min-width: 768px) {
      right: 22%;
    }
    @media (min-width: 1024px) {
      right: 36%;
    }
  }
`;

export const Mariposas = styled.div`
  background-image: url("assets/mariposas.gif");
  width: 20%;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: scaleX(-1);
  &:hover {
    transform: scale(1.2);
  }
`;
