import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: "big",
  isModalOpen: false,
  modalData: {
    name: "",
    config: {},
  },
  isMenuOpen: true,
  showNotification: false,
  notificationMessage: "",
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
      state.modalData.name = action.payload.name;
      state.modalData.id = action.payload.id;
      state.modalData.config = action.payload.config;
    },
    changeOpenState: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    changeOpenStateAction: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    changeNotificationStateHidde: (state) => {
      state.showNotification = false;
    },
    changeNotificationStateShow: (state, action) => {
      state.showNotification = true;
      state.notificationMessage = action.payload;
    },
  },
});

export const selectScreenSize = (state) => state.app.screen;
export const selectModalState = (state) => state.app.isModalOpen;
export const selectModalData = (state) => state.app.modalData;
export const selectMenuStatus = (state) => state.app.isMenuOpen;
export const selectNotificationStatus = (state) => state.app.showNotification;
export const selectNotificationMessage = (state) =>
  state.app.notificationMessage;

export const {
  setScreenSize,
  changeModalState,
  setModalData,
  changeOpenState,
  changeOpenStateAction,
  changeNotificationStateHidde,
  changeNotificationStateShow,
} = appSlice.actions;

export default appSlice.reducer;
