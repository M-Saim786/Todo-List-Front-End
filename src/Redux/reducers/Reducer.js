import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addTodo, deleteTodo, getAllTodo } from "../Action";
// import { useDispatch } from "react-redux";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    loading: false,
    error: null,
    value: 0,
  },
  // reducers: {
  //   addTodo: (state, action) => {
  //     return {
  //       ...state,
  //       todo: [...state.todo, action.payload],
  //     };
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodo.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error when a new request is pending
      })
      .addCase(getAllTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todo = action.payload;
        state.error = null; // Reset error when request is fulfilled successfully
      })
      .addCase(getAllTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set the error message if the request is rejected
      })
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todo = action.payload;
        state.error = null; // Reset error when request is fulfilled successfully
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set the error message if the request is rejected
      });
    // .addCase(deleteTodo.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(deleteTodo.fulfilled, (state, action) => {
    //   state.loading = false;
    //   // state.todo = action.payload;
    //   state.error = null; // Reset error when request is fulfilled successfully
    // })
    // .addCase(deleteTodo.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message; // Set the error message if the request is rejected
    // });
  },
});

// export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
