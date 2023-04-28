import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { counterSlice } from "./slices/counterSlice";
import { postSlice } from "./slices/postsSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterSlice.reducer,
      posts: postSlice.reducer,
    },
    devTools: true,
  });
export const wrapper = createWrapper(makeStore);
