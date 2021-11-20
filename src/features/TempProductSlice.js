import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Bułka",
    proteinOnHundredGrams: 5,
    carbohydratesOnHundredGrams: 6,
    fatOnHundredGrams: 1,
  },
];

const TempProductSlice = createSlice({
  name: "temp",
  initialState,
  reducers: {
    addProductToState: (state, action) => {
      state.push({ id: state.length + 1, ...action.payload });
    },
  },
});

export const selectProduct = (state) => state.temp;

export const { addProductToState } = TempProductSlice.actions;

export default TempProductSlice.reducer;
