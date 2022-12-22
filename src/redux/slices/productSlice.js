import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  product: [],
  error: "",
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const res = await axios.get("http://localhost:3000/api/v1/product");
    return res.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = " ";
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.product = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
