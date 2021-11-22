import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Brak nazwy",
  trainingDays: [
    {
      id: 1,
      types: [
        {
          id: 1,
          name: "Rozgrzewka",
          exercises: [
            {
              id: 1,
              name: "Wyciskanie francuskie",
              series: [
                {
                  id: 1,
                  weight: 10,
                  repeat: 10,
                },
                {
                  id: 2,
                  weight: 10,
                  repeat: 12,
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Trening właściwy",
          exercises: [
            {
              id: 1,
              name: "Wyciskanie francuskie",
              series: [
                {
                  id: 1,
                  weight: 10,
                  repeat: 10,
                },
                {
                  id: 2,
                  weight: 10,
                  repeat: 10,
                },
                {
                  id: 3,
                  weight: 10,
                  repeat: 10,
                },
                {
                  id: 4,
                  weight: 10,
                  repeat: 10,
                },
              ],
            },
            {
              id: 2,
              name: "Kupa słonia",
              series: [
                {
                  id: 1,
                  weight: 10,
                  repeat: 10,
                },
                {
                  id: 2,
                  weight: 10,
                  repeat: 10,
                },
                {
                  id: 3,
                  weight: 10,
                  repeat: 10,
                },
                {
                  id: 4,
                  weight: 10,
                  repeat: 10,
                },
                {
                  id: 5,
                  weight: 10,
                  repeat: 10,
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: "Kardio",
        },
        {
          id: 4,
          name: "Rozciąganie",
        },
      ],
    },
  ],
};

const initialAddDay = {
  types: [
    {
      id: 1,
      name: "Rozgrzewka",
      exercises: [],
    },
    {
      id: 2,
      name: "Trening właściwy",
      exercises: [],
    },
    {
      id: 3,
      name: "Kardio",
      exercises: [],
    },
    {
      id: 4,
      name: "Rozciąganie",
      exercises: [],
    },
  ],
};

const TrainingCreatorSlice = createSlice({
  name: "trainingCreator",
  initialState,
  reducers: {
    addDay: (state) => {
      let newId = state.trainingDays[state.trainingDays.length - 1].id + 1;
      state.trainingDays.push({ id: newId, ...initialAddDay });
    },
  },
});

export const { addDay } = TrainingCreatorSlice.actions;

export const selectTrainingDays = (state) => state.trainingCreator.trainingDays;

export default TrainingCreatorSlice.reducer;
