import React, { useRef, useState } from "react";
import {
  ContainerStyled,
  ButtonStyled,
  FormStyled,
  InputStyled,
  TasksContainerStyled,
  Task,
} from "./TodoAppStyles";

const TodoApp = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  const addTask = () => {
    setTask((prevTask) => [...prevTask, newTask]);
    setNewTask("");
  };
  const removeTask = (index) => {
    setTask((prevTasks) => {
      const updateTasks = [...prevTasks];
      updateTasks.splice(index, 1);
      return updateTasks;
    });
  };
  return (
    <ContainerStyled>
      <FormStyled onSubmit={(e) => e.preventDefault(e)}>
        <InputStyled
          type="Text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          ref={inputRef}
        />
        <ButtonStyled onClick={addTask}>Agregar</ButtonStyled>
      </FormStyled>
      <TasksContainerStyled>
        {task.map((tasks) => {
          return <Task>{tasks}</Task>;
        })}
      </TasksContainerStyled>
    </ContainerStyled>
  );
};

export default TodoApp;
