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

export const  Object = styled.object`
        width:100%;
        height:400px;
        border-radius: 5px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
`