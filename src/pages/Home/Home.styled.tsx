import styled from "styled-components";


interface IHeight {
    height?: string;
}
export const Container = styled.div`
//background-image: url("assets/home-background.avif");
width: 100%;
height: ${(props: IHeight) => props.height || "auto"};
background-size: cover;
background-repeat: no-repeat;
background-position: center;
   background: linear-gradient(
    50deg,
    #425174 0%,
    #425174  10%,
    #061123 50%,
    #061123 100%
  ); 
`

export const ImgFondo = styled.div`
background-image: url("assets/home-background.avif");
width: 100%;
height: ${(props: IHeight) => props.height || "auto"};
background-size: cover;
background-repeat: no-repeat;
background-position: center;


@media (min-width: 768px) {
    padding: 1% 20%;
}
@media (min-width: 1024px) {
    width: 40%;
    padding: 0;
    margin-right: auto;
    margin-left: auto;
    border-radius: 5px;
    padding-top: 5px;
;
}

`;

export const Loading= styled.div`
background-image: url("/assets/loading2.png!c1024wm0");
width: 40%;
height: 150px;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
position: absolute ;
top:40% ;
text-align:center ;
animation: move 1s infinite;
@keyframes move {
    0% {
        left: 0;
    }
    25% {
        left: 5%;
    }
    50% {
        left: 10%;
    }
    75% {
        left: 15%;
    }
    100% {
        left: 0;
    }
}
@media (min-width: 768px) {
    width: 20%;
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 1024px) {
    width: 10%;
    position: absolute;
    margin-left: 35%;
}


`;

export const Footer = styled.footer`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;;

    p{
        text-align: center;
        color: #cddfdd;
        font-weight: 100;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;

    }
`;