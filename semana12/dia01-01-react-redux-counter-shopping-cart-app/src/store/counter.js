// Slice: Parte del estado global
// Reducers: Funciones que cambian el estado
// Actions: Acciones que disparan cambios

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'Counter',
  initialState: 67,
  reducers: {
    increment: (state) => { // <- Actions
      // state.value = state.value + 1
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  } 
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer