import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./features/AppSlice";
import userReducer from "./features/UserSlice";
import chatReducer from "./features/ChatSlice";
import dietCreatorReducer from "./features/DietCreatorSlice";
import tempProduc from "./features/TempProductSlice";
import trainingCreatorReducer from "./features/TrainingCreatorSlice";
import questionaireReducer from "./features/QuestionaireSlice";
import protegeViewReducer from "./features/protegeViewSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    chat: chatReducer,
    dietCreator: dietCreatorReducer,
    temp: tempProduc,
    trainingCreator: trainingCreatorReducer,
    questionaire: questionaireReducer,
    actualProtege: protegeViewReducer,
  },
});
