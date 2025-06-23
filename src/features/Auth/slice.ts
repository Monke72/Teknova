import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "@shared/types/globalTypes";

const initialState: IUserState = {
  password: "",
  entry: false,
  mail: "",
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

    setMailReg(state, action: PayloadAction<string>) {
      if (state.mail !== action.payload) state.mail = action.payload;
    },

    exitAcc(state) {
      state.entry = false;
      state.password = "";
      state.mail = "";
    },
  },
});
const userReducer = userSlice.reducer;
export default userReducer;
export const { setPasswordReg, setEntry, setMailReg, exitAcc } =
  userSlice.actions;
