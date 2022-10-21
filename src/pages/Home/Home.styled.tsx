import styled from "styled-components";


export const ImgFondo = styled.div`
background-image: url("assets/home-background.png");
width: 100%;
height: 100vh;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;
export const Loading= styled.div`
background-image: url("/assets/loading2.png!c1024wm0");
width: 40%;
height: 150px;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
/* colocarlo en la mitad de la pagina */
position: absolute ;
top:30% ;
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

`;
