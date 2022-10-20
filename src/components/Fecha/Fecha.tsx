import { Barrio, Container, Date, Day, H2, H2White, H3, ImgFondo, Maribel, PWhite } from './Fecha.styled'

export const Fecha = () => {

  return (
    <Container>
        <Day>
            <H2>sabado</H2>
            <H2White>25</H2White>
            <H2 fontSize='1.5rem'>mARZO</H2>
            <Maribel/>
        </Day>
        <Date>
            <H3 textAling='center'>Lugar:</H3>
            <PWhite>Centro Comercial el tesoro</PWhite>
            <PWhite>Avida 10 7-23</PWhite>
            <Barrio>El poblado</Barrio>
            <H3 paddingLeft="20px">hORA: 2:00 p.m.</H3>
            <ImgFondo/>

        </Date>
    </Container>

  )
}
