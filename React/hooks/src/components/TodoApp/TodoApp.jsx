import React from "react";
import {
  ContainerStyled,
  ButtonStyled,
  FormStyled,
  InputStyled,
} from "./TodoAppStyles";

const TodoApp = () => {
  return (
    <ContainerStyled>
      <FormStyled>
        <InputStyled></InputStyled>
        <ButtonStyled>Agregar</ButtonStyled>
      </FormStyled>
    </ContainerStyled>
  );
};

export default TodoApp;
