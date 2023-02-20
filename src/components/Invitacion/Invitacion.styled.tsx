import styled from "styled-components";

export const H1 = styled.h1`
  color: var(--secondary-color);
  text-align: center;
  letter-spacing: 0.1rem;
  font-size: 2.5rem;
`;

export const H3 = styled.h3`
  color: var(--primary-color);
  text-align: center;
  font-weight: 200;
  font-size: 2rem;
  letter-spacing: 0.1rem;
`;

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
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;
