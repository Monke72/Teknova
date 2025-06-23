import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type NavSectionType = "reg" | "home";
interface IInitialState {
  section: NavSectionType;
}
const initialState: IInitialState = {
  section: "reg",
};
const navSection = createSlice({
  name: "navSection",
  initialState,
  reducers: {
    setSection(state, action: PayloadAction<NavSectionType>) {
      state.section = action.payload;
    },
  },
});
const navSectionReducer = navSection.reducer;
const { setSection } = navSection.actions;

export { navSectionReducer, setSection };
