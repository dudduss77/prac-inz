import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./features/AppSlice";
import userReducer from './features/UserSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer
  },
});
