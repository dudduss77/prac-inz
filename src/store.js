import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./features/MenuSlice";
import screenReducer from "./features/ScreenSizeSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    screenSize: screenReducer,
  },
});
