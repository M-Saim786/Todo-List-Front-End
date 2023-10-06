import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "./reducers/Reducer";
export const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
  },
});

// store;
