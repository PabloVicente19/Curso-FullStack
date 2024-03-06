import React from "react";
import { motion } from "framer-motion";
import { sumar } from "../../slices/contadorSlice";

import {
  BtnContainerStyled,
  BtnStyled,
  ContadorContainerStyled,
  ResultStyled,
  TitleStyled,
} from "./ContadorStyles";
import { useDispatch, useSelector } from "react-redux";

const Contador = () => {
  const contador = useSelector((state) => state.contador.valor);
  const dispatch = useDispatch();

  return (
    <ContadorContainerStyled>
      <TitleStyled>{contador}</TitleStyled>
      <ResultStyled>2</ResultStyled>
      <BtnContainerStyled>
        <BtnStyled
          onClick={() => {
            dispatch(sumar());
          }}
        >
          +
        </BtnStyled>
        <BtnStyled>RESET</BtnStyled>
        <BtnStyled>+</BtnStyled>
      </BtnContainerStyled>
    </ContadorContainerStyled>
  );
};

export default Contador;
