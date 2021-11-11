import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProtege: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
});


export const selectUserType = (state) => state.user.isProtege;

export default userSlice.reducer;
