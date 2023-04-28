import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc(state) {
      state.value += 1;
    },
    dec(state) {
      if (state.value > 0) state.value -= 1;
    },
    incNum(state, action) {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return (state = {
        ...state,
        ...action.payload.counter,
      });
    });
  },
});

export const { inc, dec, incNum } = counterSlice.actions;
export const selectCounterState = (state) => state.counter.value;
export default counterSlice.reducer;
