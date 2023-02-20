import styled from "styled-components";

//crear div

export const Container = styled.div`
display:flex ;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
padding: 0px 10px;
.flecha{
    font-size: 3rem;
    color: var(--secondary-color);
    animation: move 1s infinite;
    @keyframes move {
        0% {
            top: 0;
            color: var(--secondary-color);
        }
        25% {
            top: 5%;
            color: var(--primary-color);

        }
        50% {
            top: 10%;
            color: var(--secondary-color);

        }   
        75% {
            top: 15%;
            color: var(--primary-color);

        }
        100% {
            top: 0;
            color: var(--secondary-color);

        }
    }
}
`


export const H2 = styled.h2`
color:var(--primary-color);
font-size:1.8rem ;
letter-spacing: 2px;
`

export const Redirigir = styled.a`
width: 100%;
height: 300px;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0,0,0,0.5);
text-decoration: none;

`

export const  Ubication = styled.div`
background-image: url("https://imaginario.com.co/wp-content/uploads/2020/08/Peces-al-agua-2.png");
width: 100%;
height: 300px;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0,0,0,0.5);
z-index: 2;
display: flex;
justify-content: center;
align-items: center;
`

export const Click = styled.div`
    z-index: 10;
    //hacer una transicion que apareza el texto y desaparezca

    color: var(--secondary-color);
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;
    animation: move 1s infinite;
    //un keyframes que haga que el apareza y desaparezca
    @keyframes move {
        0% {
            top: 0;
            opacity: 0;
        }
        25% {
            top: 5%;
            opacity: 1;
        }
        50% {
            top: 10%;
            opacity: 0;
        }
        75% {
            top: 15%;
            opacity: 1;
        }
        100% {
            top: 0;
            opacity: 0;
        }
    }
    
`