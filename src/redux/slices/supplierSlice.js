import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  supplier: [],
  error: "",
};

export const fetchSupplier = createAsyncThunk(
  "user/fetchSupplier",
  async () => {
    const res = await axios.get("http://localhost:3000/api/v1/supplier");
    return res.data;
    // return axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.data);
  }
);

const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSupplier.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSupplier.fulfilled, (state, action) => {
      state.loading = false;
      state.supplier = action.payload;
      state.error = " ";
    });
    builder.addCase(fetchSupplier.rejected, (state, action) => {
      state.loading = false;
      state.supplier = [];
      state.error = action.error.message;
    });
  },
});

export default supplierSlice.reducer;
