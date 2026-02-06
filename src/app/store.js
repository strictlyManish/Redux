import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "./features/productSlice"
import CartReducers from "./features/cartSlice";

export const store = configureStore({
    reducer:{
      product: ProductReducer,
      cart:CartReducers,
    }
});