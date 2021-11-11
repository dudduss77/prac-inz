import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: true,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    changeOpenState: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    changeOpenStateAction: (state, action) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { changeOpenState, changeOpenStateAction } = menuSlice.actions;

export const selectMenuStatus = (state) => state.menu.isMenuOpen;

export default menuSlice.reducer;
