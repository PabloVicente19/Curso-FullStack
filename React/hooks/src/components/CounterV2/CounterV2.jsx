import React, { useState, useRef, useEffect } from "react";
import {
  BtnContainerStyled,
  BtnStyled,
  CounterContainerStyled,
  ResultStyled,
  TitleStyled,
} from "./CounterV2Styles";

const CounterV2 = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  let id = useRef();

  useEffect(() => {
    id.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  }, []);

  const stopCounter = () => {
    console.log(id);
    clearInterval(id.current);
  };
  return (
    <CounterContainerStyled>
      <TitleStyled>Contador V2</TitleStyled>
      <ResultStyled>{count}</ResultStyled>
      <BtnContainerStyled>
        <BtnStyled onClick={stopCounter}>Stop</BtnStyled>
      </BtnContainerStyled>
    </CounterContainerStyled>
  );
};

export default CounterV2;
