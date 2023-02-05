import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from "../store/Features/addTocart";
export const store = configureStore({
    reducer: {cartReducer},
  })