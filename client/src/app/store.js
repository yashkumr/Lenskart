import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import categoryReducer from "../features/category.reducer";


export const store = configureStore({
  reducer: {
    allCart: cartReducer,
    category:categoryReducer,
  },
});
