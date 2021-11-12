import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./features/AppSlice";
import userReducer from './features/UserSlice'
import chatReducer from './features/ChatSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    chat: chatReducer,
  },
});
