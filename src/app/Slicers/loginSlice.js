import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doLogin } from "../API/loginAPI";

const initialState = {
  logged: false,
  token: "",
};

export const loginAsync = createAsyncThunk(
  "login/doLogin",
  async (loginData) => {
    const response = await doLogin(loginData);
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.logged = true;
      state.token = action.payload.access;
    });
  },
});

// export const { increment, decrement, incrementByAmount } = loginSlice.actions;
export const selectlogged = (state) => state.login.logged;
export const selectToken = (state) => state.login.token;
export default loginSlice.reducer;
