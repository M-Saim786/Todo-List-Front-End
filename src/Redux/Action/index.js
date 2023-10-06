import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
const baseUrl = "https://todo-list-backend-alpha.vercel.app/";
export const getAllTodo = createAsyncThunk("alltodos", async () => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${baseUrl}v1/api/todo/get`,
      headers: {},
    };

    const response = await axios.request(config);
    return response.data; // Return the data from the response
  } catch (error) {
    throw error; // Rethrow any errors so they can be handled in the thunk
  }
});
export const addTodo = createAsyncThunk("addTodo", async (todo) => {
  try {
    // const axios = require('axios');
    let data = JSON.stringify({
      todo: todo,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${baseUrl}v1/api/todo/add`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    // axios.request(config);
    const response = await axios.request(config);
    if (response.data.success == true) {
      Swal.fire("Success", response.data.message, "success");
    }
    return response.data; // Return the data from the responses
  } catch (error) {
    throw error;
  }
});

export const deleteTodo = createAsyncThunk("delete", async (id) => {
  // const axios = require("axios");
  try {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${baseUrl}v1/api/todo/delete/${id}`,
      headers: {},
    };

    const response = await axios.request(config);
    console.log(response);
    if (response.data.success == true) {
      Swal.fire("Success", response.data.message, "success");
    }
    return response.data; // Return the data from the responses
  } catch (error) {
    throw error;
  }
});
