import styled from "styled-components";

interface IProps {
  fontSize?: string;
  textAling?: string;
  paddingLeft?: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px 40px;
`;
export const Day = styled.div`
  width: 30%;
  line-height: 1.3;
`;
export const Date = styled.div`
  width: 70%;
  border-left: 2px solid #f2c94c;
  line-height: 1.3;
`;

export const H2 = styled.h2`
  font-size: ${(props: IProps) => props.fontSize || "2rem"};
  text-transform: uppercase;
  color: #f7a8b8;
  font-weight: 500;
`;

export const H2White = styled.h2`
  font-size: 2rem;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
`;

export const H3 = styled.h3`
  font-size: ${(props: IProps) => props.fontSize || "1.7rem"};
  color: #f7a8b8;
  text-align: ${(props: IProps) => props.textAling || "left"};
  padding-left: ${(props: IProps) => props.paddingLeft || "0"};
  font-weight: 500;
  padding-top: 5px;
`;

export const PWhite = styled.p`
  font-size: 1.2rem;
  color: white;
  padding-left: 20px;
`;

export const Barrio = styled.p`
  font-size: 1.2rem;
  color: white;
  border-bottom: 2px solid #f2c94c;
  padding-left: 20px;
  padding-bottom: 10px;
`;

//div con una imagen de fondo

export const ImgFondo = styled.div`
  background-image: url("/assets/disney1.png");
  height: 60px;
  width: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
`;
export const Maribel = styled.div`
  background-image: url("/assets/maribel.png");
  height: 120px;
  width: 80%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
