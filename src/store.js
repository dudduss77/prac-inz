import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./features/MenuSlice";
import appReducer from "./features/AppSlice";
import userReducer from './features/UserSlice'

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    app: appReducer,
    user: userReducer
  },
});
