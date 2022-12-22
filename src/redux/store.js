import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import supplierReducer from "./slices/supplierSlice";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    productReducer: productReducer,
    supplierReducer: supplierReducer,
  },
});
