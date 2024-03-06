import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valor: 0,
};
export const contadorSlice = createSlice({
  name: "contador",
  initialState,
  reducers: {
    sumar: (estado) => {
      estado.valor += 1;
    },
    restar: (estado) => {
      estado.valor -= 1;
    },
    resetear: (estado) => {
      estado.valor = 0;
    },
  },
});

export const { sumar, restar, resetear } = contadorSlice.actions;

export default contadorSlice.reducer;
