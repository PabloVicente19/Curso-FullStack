import React, { useReducer } from "react";
import {
  ButtonStyled,
  ContainerButtonsStyled,
  ContainerStyled,
  TitleStyled,
} from "./ReducersStyles";

const Reducers = () => {
  const initialState = "";
  const reducer = (state, action) => {
    switch (action.type) {
      case "rojo":
        return "red";
      case "azul":
        return "blue";
      case "verde":
        return "green";
      default:
        return state;
    }
  };
  const [estado, dispatch] = useReducer(reducer, initialState);

  return (
    <ContainerStyled>
      <TitleStyled style={{ color: estado }}>Mi Título</TitleStyled>
      <ContainerButtonsStyled>
        <ButtonStyled onClick={() => dispatch({ type: "rojo" })}>
          Rojo
        </ButtonStyled>
        <ButtonStyled onClick={() => dispatch({ type: "azul" })}>
          Azul
        </ButtonStyled>
        <ButtonStyled onClick={() => dispatch({ type: "verde" })}>
          Verde
        </ButtonStyled>
      </ContainerButtonsStyled>
    </ContainerStyled>
  );
};

export default Reducers;
