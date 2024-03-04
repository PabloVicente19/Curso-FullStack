import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
export const FormStyled = styled.form`
  padding: 1rem;
  display: flex;
  gap: 1rem;
`;
export const InputStyled = styled.input`
  text-indent: 1rem;
  outline: none;
  height: 35px;
  font-size: 1rem;
`;
export const ButtonStyled = styled.button`
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;
export const TasksContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #313131;
  padding: 0.5rem;
`;
export const Task = styled.span`
  text-align: left;
`;
