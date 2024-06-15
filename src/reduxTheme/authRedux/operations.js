import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://taskpro-api-nmqb.onrender.com/",
});

// const token =
// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Njg2Mzk5OGI5MGNkZTFhZTE3MDdmYyIsImlhdCI6MTcxODI5NzYwNywiZXhwIjoxNzE4MzQwODA3fQ.JAkjFKPn1HXBNPFlIILveNkTT1Xe_TSXROIOJ1SIieI';

const setAuthHeader = (token) => {
  instance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmM0Nzc5ZGQ1YTA1NDJmYTIzOWUyMyIsImlhdCI6MTcxODQxMjIxMCwiZXhwIjoxNzE4NDU1NDEwfQ.9z6ZI1jh7U1kaH0JL4C8DSoVf0DQAP76IuFiu-Se6_4"}`;
};

setAuthHeader();
// const setAuthHeader = (token) => {
//   instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

const clearAuthHeader = () => {
  instance.defaults.headers.common["Authorization"] = "";
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkApi) => {
    try {
      const response = await instance.post("/auth/register", userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (logInInfo, thunkApi) => {
    try {
      const response = await instance.post("/auth/login", logInInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkApi) => {
  try {
    // const response = await instance.post("/auth/logout");
    await instance.post("/auth/logout");
    clearAuthHeader();
    // return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkApi) => {
    const reduxState = thunkApi.getState();
    const savedToken = reduxState.auth.token;
    setAuthHeader(savedToken);
    try {
      const response = await instance.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
  {
    condition: (_, { getState }) => {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);

export const updateUserTheme = createAsyncThunk(
  "auth/updateUserTheme",
  async (theme, thunkAPI) => {
    try {
      await instance.patch(`/theme`, theme);
      return theme;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
