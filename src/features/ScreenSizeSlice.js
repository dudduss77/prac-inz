import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: "big",
};

export const screenSizeSlice = createSlice({
  name: "screenSize",
  initialState,
  reducers: {
    setScreenSize: (state, action) => {
      state.screen = action.payload;
    },
  },
});

export const selectScreenSize = (state) => state.screenSize.screen;

export const { setScreenSize } = screenSizeSlice.actions;

export default screenSizeSlice.reducer;
