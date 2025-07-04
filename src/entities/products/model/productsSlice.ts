import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../productsApi/productsApi";
import { IProducts } from "@shared/types/globalTypes";

export const loadProducts = createAsyncThunk(
  "product/loadProducts",
  async () => {
    return await fetchProducts();
  },
);
interface ProductSlice {
  products: IProducts[];
  loading: boolean;
  error: string | null;
}
const initialState: ProductSlice = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
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
