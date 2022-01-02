import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const protegeViewSlice = createSlice({
  name: "actualProtege",
  initialState,
  reducers: {
    putActualProtege: (state, action) => {
      return state != null ? { ...state, ...action.payload} : action.payload;
    },
    pushDiet: (state, action) => ({...state, diets: [
            ...state.diets,
            action.payload
        ]}),
    pushTraining: (state, action) => ({...state, trainings: [
            ...state.trainings,
            action.payload
        ]}),
  }
});

// Action creators are generated for each case reducer function
export const {
  putActualProtege,
  pushDiet,
  pushTraining
} = protegeViewSlice.actions;

export default protegeViewSlice.reducer;
