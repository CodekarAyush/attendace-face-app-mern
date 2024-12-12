import { configureStore } from "@reduxjs/toolkit";
import faceReducer from "./slices/webCam.slice";

export const store = configureStore({
  reducer: {
    face: faceReducer,
  },
});
