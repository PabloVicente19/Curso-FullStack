import React from "react";
import { motion } from "framer-motion";

import {
  BtnContainerStyled,
  BtnStyled,
  ContadorContainerStyled,
  ResultStyled,
  TitleStyled,
} from "./ContadorStyles";

const Contador = () => {
  return (
    <ContadorContainerStyled>
      <TitleStyled>Contador</TitleStyled>
      <ResultStyled>2</ResultStyled>
      <BtnContainerStyled>
        <BtnStyled>+</BtnStyled>
        <BtnStyled>RESET</BtnStyled>
        <BtnStyled>+</BtnStyled>
      </BtnContainerStyled>
    </ContadorContainerStyled>
  );
};

export default Contador;
