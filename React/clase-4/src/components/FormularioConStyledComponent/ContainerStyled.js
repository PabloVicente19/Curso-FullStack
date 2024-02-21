import styled from "styled-components";

export const ButtonStyled = styled.button`
    color:red
    cursor:pointer
    
`
export const InputStyled = styled.input`
    outline:none;
`
export const PStyled = styled.p`
    font-size: 2rem;
    color: violet;
`
export const HerenciaDeP = styled(PStyled)`
    color: green;
`