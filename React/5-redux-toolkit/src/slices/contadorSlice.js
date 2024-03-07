import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valor: 0,
};
export const contadorSlice = createSlice({
  name: "contador",
  initialState,
  reducers: {
    suma: (state) => {
      state.valor += 1;
    },
    resta: (state) => {
      state.valor -= 1;
    },
    reset: (state) => {
      state.valor = 0;
    },
  },
});

export const { suma, resta, reset } = contadorSlice.actions;
export default contadorSlice.reducer;
