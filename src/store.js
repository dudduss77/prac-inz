import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./features/AppSlice";
import userReducer from "./features/UserSlice";
import dietCreatorReducer from "./features/DietCreatorSlice";
import tempProduc from "./features/TempProductSlice";
import trainingCreatorReducer from "./features/TrainingCreatorSlice";
import questionaireReducer from "./features/QuestionaireSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    dietCreator: dietCreatorReducer,
    temp: tempProduc,
    trainingCreator: trainingCreatorReducer,
    questionaire: questionaireReducer,
  },
});
