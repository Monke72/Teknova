import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../productsApi/productsApi";

export const loadProducts = createAsyncThunk(
  "product/loadProducts",
  async () => {
    return await fetchProducts();
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const productsReducer = productSlice.reducer;
export default productsReducer;
