import React from "react";

import {
  BtnContainerStyled,
  BtnStyled,
  ContadorContainerStyled,
  ResultStyled,
  TitleStyled,
} from "./ContadorStyles";
import { useDispatch, useSelector } from "react-redux";
import { reset, resta, suma } from "../../slices/contadorSlice";

const Contador = () => {
  const contador = useSelector((state) => state.contador.valor);
  const dispatch = useDispatch();
  return (
    <ContadorContainerStyled>
      <TitleStyled>Contador</TitleStyled>
      <ResultStyled>{contador}</ResultStyled>
      <BtnContainerStyled>
        <BtnStyled onClick={() => dispatch(resta())}>-</BtnStyled>
        <BtnStyled onClick={() => dispatch(reset())}>RESET</BtnStyled>
        <BtnStyled onClick={() => dispatch(suma())}>+</BtnStyled>
      </BtnContainerStyled>
    </ContadorContainerStyled>
  );
};

export default Contador;
