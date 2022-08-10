import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./Slicers/bookSlice";
import counterReducer from "./Slicers/counterSlice";
import loginReducer from "./Slicers/loginSlice";
import orderReducer from "./Slicers/orderSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    book: bookReducer,
    order: orderReducer,
  },
});
