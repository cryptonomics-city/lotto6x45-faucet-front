import { configureStore } from "@reduxjs/toolkit";
import lotto6x45 from "./slices/lotto6x45/slice";
import login from "./slices/login/slice";
import modal from "./slices/modal/slice";
import checkboxes from "./slices/checkboxes/slice";

export const store = configureStore({
  reducer: {
    lotto6x45,
    login,
    modal,
    checkboxes,
  },
});
