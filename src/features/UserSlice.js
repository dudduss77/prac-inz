import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProtege: true,
  userId: 4321
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
});


export const selectUserType = (state) => state.user.isProtege;
export const selectUserId = (state) => state.user.userId;

export default userSlice.reducer;
