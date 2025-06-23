import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "@shared/types/globalTypes";

const initialState: IUserState = {
  password: "",
  entry: false,
  tel: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPasswordReg(state, action: PayloadAction<string>) {
      if (state.password !== action.payload) state.password = action.payload;
    },
    setEntry(state, action: PayloadAction<boolean>) {
      if (state.entry !== action.payload) state.entry = action.payload;
    },

    setTelReg(state, action: PayloadAction<string>) {
      if (state.tel !== action.payload) state.tel = action.payload;
    },

    exitAcc(state) {
      state.entry = false;
      state.password = "";
      state.tel = "";
    },
  },
});
const userReducer = userSlice.reducer;
export default userReducer;
export const { setPasswordReg, setEntry, setTelReg, exitAcc } =
  userSlice.actions;
