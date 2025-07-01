import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ObjectState {
  object: Record<string, boolean>;
}

const initialState: ObjectState = {
  object: {},
};

const objectSlice = createSlice({
  name: "objectInfo",
  initialState,
  reducers: {
    setObject(state, action: PayloadAction<string>) {
      state.object = { [action.payload]: true };
    },
    clearObject(state) {
      state.object = {};
    },
  },
});

const objectReducer = objectSlice.reducer;

export const { setObject, clearObject } = objectSlice.actions;
export default objectReducer;
