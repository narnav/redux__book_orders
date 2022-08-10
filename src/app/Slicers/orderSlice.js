import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrders, loanBook } from "../API/orderAPI";

const initialState = {
  myOrders: [],
  myTest: "test",
};

export const loanBookAsync = createAsyncThunk(
  "order/loanBook",
  async (data) => {
    const response = await loanBook(data);
    return response.data;
  }
);

export const getMyOrdersAsync = createAsyncThunk(
  "order/getOrders",
  async (data) => {
    const response = await getOrders(data);
    return response.data;
  }
);
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loanBookAsync.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getMyOrdersAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.myOrders = action.payload;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = orderSlice.actions;
export const selectOrders = (state) => state.order.myOrders;
export const selectTest = (state) => state.order.myTest;
export default orderSlice.reducer;
