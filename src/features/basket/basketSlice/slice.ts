import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IBasket {
  basket: number[];
}
const initialState: IBasket = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBakset(state, action: PayloadAction<number>) {
      state.basket.push(action.payload);
    },
    deleteFromBasket(state, action: PayloadAction<number>) {
      state.basket = state.basket.filter((el) => el !== action.payload);
    },
    clearBasket(state) {
      state.basket = [];
    },
  },
});

const basketReducer = basketSlice.reducer;

export default basketReducer;
export const { addToBakset, deleteFromBasket, clearBasket } =
  basketSlice.actions;
