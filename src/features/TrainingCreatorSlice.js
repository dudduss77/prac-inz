import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { current } from "immer";
import { db } from "../firebase/configFirebase";

export const loadTrainingFromDatabase = createAsyncThunk(
  "diets/load",
  async ({ userId, trainingId }) => {
    const dietDocRef = doc(db, "users", userId, "trainings", trainingId);
    const docSnap = await getDoc(dietDocRef);
    return docSnap.data();
  }
);

const initialState = {
  name: "Brak nazwy",
  trainingDays: [
    {
      id: 1,
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
    resetTrainingState: () => {
      return initialState;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    addDay: (state) => {
      let newId = state.trainingDays[state.trainingDays.length - 1].id + 1;
      state.trainingDays.push({ id: newId, ...initialAddDay });
    },
    deleteDay: (state, action) => {
      state.trainingDays = state.trainingDays.filter(
        (day) => day.id !== action.payload
      );
    },
    addExercise: (state, action) => {
      const newId = state.trainingDays
        .find((day) => day.id === action.payload.dayId)
        .types.find((type) => type.id === action.payload.typeId)
        .exercises.slice(-1)[0];

      state.trainingDays
        .find((day) => day.id === action.payload.dayId)
        .types.find((type) => type.id === action.payload.typeId)
        .exercises.push({
          id: newId ? newId.id + 1 : 1,
          name: action.payload.name,
          series: [...action.payload.data],
        });
    },
    deleteExercise: (state, action) => {
      const day = state.trainingDays.find(
        (day) => day.id === action.payload.dayId
      );
      if (day) {
        const type = day.types.find(
          (type) => type.id === action.payload.typeId
        );
        if (type) {
          const newExercises = type.exercises.filter(
            (exercise) => exercise.id !== action.payload.exerciseId
          );
          type.exercises = newExercises;
        }
      }
    },
    updateExercise: (state, action) => {
      const day = state.trainingDays.find(
        (day) => day.id === action.payload.dayId
      );
      if (day) {
        const type = day.types.find(
          (type) => type.id === action.payload.typeId
        );
        if (type) {
          type.exercises.map((exercise) => {
            if (exercise.id === action.payload.exerciseId) {
              exercise.series = action.payload.data;
            } else return exercise;
          });
        }
      }
    },
    passExercise: (state, action) => {
      const day = state.trainingDays.find(
        (day) => day.id === action.payload.dayId
      );
      if (day) {
        const type = day.types.find(
          (type) => type.id === action.payload.typeId
        );
        if (type) {
          type.exercises = action.payload.data;
        }
      }
    },
    deleteAllExercise: (state, action) => {
      const day = state.trainingDays.find(
        (day) => day.id === action.payload.dayId
      );
      if (day) {
        const type = day.types.find(
          (type) => type.id === action.payload.typeId
        );
        if (type) {
          type.exercises = [];
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTrainingFromDatabase.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {
  resetTrainingState,
  updateName,
  addDay,
  deleteDay,
  addExercise,
  deleteExercise,
  deleteAllExercise,
  updateExercise,
  passExercise,
} = TrainingCreatorSlice.actions;

export const selectTraining = (state) => state.trainingCreator;
export const selectName = (state) => state.trainingCreator.name;
export const selectTrainingDays = (state) => state.trainingCreator.trainingDays;
export const selectTrainingDayCount = (state) =>
  state.trainingCreator.trainingDays.length;
export const selectTrainingLastId = (state) =>
  state.trainingCreator.trainingDays[
    state.trainingCreator.trainingDays.length - 1
  ].id;

export const selectExercise = createSelector(
  (state) => state.trainingCreator.trainingDays,
  (state) => state.app.modalData.config,
  (items, modaldata) => {
    return items
      .find((day) => day.id === modaldata.dayId)
      .types.find((type) => type.id === modaldata.typeId)
      .exercises.find((exercise) => exercise.id === modaldata.exerciseId);
  }
);

export const selectAllExercise = createSelector(
  (state) => state.trainingCreator.trainingDays,
  (state) => state.app.modalData.config,
  (items, modaldata) => {
    return items
      .find((day) => day.id === modaldata.dayId)
      .types.find((type) => type.id === modaldata.typeId).exercises;
  }
);

export default TrainingCreatorSlice.reducer;
