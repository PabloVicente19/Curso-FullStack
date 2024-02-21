import React from 'react'
import { ButtonStyled,PStyled,HerenciaDeP,InputStyled} from './ContainerStyled'

export const FormularioConStyledComponent = () => {
  return (
    <form>
        <InputStyled></InputStyled>
        <ButtonStyled>Iniciar Sesion</ButtonStyled>
        <PStyled>hola soy un parrafo</PStyled>
        <HerenciaDeP>Hola soy un parrafo heredado</HerenciaDeP>
    </form>
  )
}
