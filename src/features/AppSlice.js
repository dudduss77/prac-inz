import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: "big",
  isModalOpen: false,
  modalData: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setScreenSize: (state, action) => {
      state.screen = action.payload;
    },
    changeModalState: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setModalData: (state, action) => {
      state.modalData = action.payload;
    },
  },
});

export const selectScreenSize = (state) => state.app.screen;
export const selectModalState = (state) => state.app.isModalOpen;
export const selectModalData = (state) => state.app.modalData;

export const { setScreenSize, changeModalState, setModalData } =
  appSlice.actions;

export default appSlice.reducer;
