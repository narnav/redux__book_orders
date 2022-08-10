import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllBooks } from "../API/bookAPI";

const initialState = {
  books: [],
};

export const getAllbookAsync = createAsyncThunk(
  "book/getAllBooks",
  async () => {
    const response = await getAllBooks();
    return response.data;
  }
);

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllbookAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.books = action.payload;
    });
  },
});

// export const { increment, decrement, incrementByAmount } = bookSlice.actions;
export const selectBooks = (state) => state.book.books;
export default bookSlice.reducer;
