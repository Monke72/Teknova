import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TextState {
  text: string;
}

const initialState: TextState = { text: "" };

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
    clearText(state) {
      state.text = "";
    },
  },
});

const textReducer = textSlice.reducer;

export const { setText, clearText } = textSlice.actions;
export default textReducer;
