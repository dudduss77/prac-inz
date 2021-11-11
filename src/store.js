import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./features/MenuSlice";
import screenReducer from "./features/ScreenSizeSlice";
import userReducer from './features/UserSlice'

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    screenSize: screenReducer,
    user: userReducer
  },
});
