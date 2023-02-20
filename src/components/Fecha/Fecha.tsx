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
            <PWhite>Mall Edificio Select</PWhite>
            <PWhite>Cra. 30 #10c-134</PWhite>
            <Barrio>El Poblado, Medellín</Barrio>
            <H3 paddingLeft="20px">hORA: 3:00 p.m.</H3>
            <ImgFondo/>
            

        </Date>
    </Container>
  )
}
