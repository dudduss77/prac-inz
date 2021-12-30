import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/configFirebase";

export const loadDataFromDb = createAsyncThunk("users/basicData", async (userId) => {
  const userDocRef = doc(db, 'users', userId)
  const docSnap = await getDoc(userDocRef);
  return docSnap.data()
});

const initialState = {
  // isLogged: true,
  isProtege: null,
  userId: null,
  // name: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      if(action.payload == undefined) 
        state.isProtege = undefined;
      state.userId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadDataFromDb.fulfilled, (state, action) => {
      // console.log(action)
      if(action.payload) {
        state.isProtege = action.payload.isProtege;
        state.name = action.payload.name;        
      }

    })
  }
});

export const selectUserType = (state) => state.user.isProtege;
export const selectUserId = (state) => state.user.userId;
export const selectUsername = (state) => state.user.name;

export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
