// calculSlice.js
import { createSlice } from "@reduxjs/toolkit";

const calculSlice = createSlice({
  name: "calcul",
  initialState: {
    result: null,
    message: "RAS",
    counter: null,
  },
  reducers: {
    addValues: (state, action) => {
      const { value1, value2 } = action.payload;
      return {
        ...state,
        result: Number(value1) + Number(value2),
      };
    },

    multiplyValues: (state, action) => {
      const { value1, value2 } = action.payload;
      return {
        ...state,
        result: Number(value1) * Number(value2),
      };
    },

    resetValues: (state) => {
      return {
        ...state,
        result: 0,
        message: "",
        counter: 0,
      };
    },

    countAction: (state) => {
      return {
        ...state,
        counter: state.counter + 1,
      };
    },

    setMessage: (state, action) => {
      return {
        ...state,
        message: action.payload,
      };
    },
  },
});

export const {
  addValues,
  multiplyValues,
  resetValues,
  countAction,
  setMessage,
} = calculSlice.actions;
export default calculSlice.reducer;
