import React, { useState } from "react";
import {
  BtnContainerStyled,
  BtnStyled,
  CounterContainerStyled,
  ResultStyled,
  TitleStyled,
} from "./CounterStyles";

const Counter = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const add = () => setCount(count + 1);
  const subStrack = () => setCount(count - 1);
  return (
    <CounterContainerStyled>
      <TitleStyled>Contador</TitleStyled>
      <ResultStyled>{count}</ResultStyled>
      <BtnContainerStyled>
        <BtnStyled onClick={add}>+</BtnStyled>
        <BtnStyled onClick={subStrack}>-</BtnStyled>
      </BtnContainerStyled>
    </CounterContainerStyled>
  );
};

export default Counter;
