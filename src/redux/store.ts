import { configureStore } from "@reduxjs/toolkit";
import startPageReducer from "./startPageSlice";
import pickDateReducer from "./pickDateSlice";
import queryReducer from "./querySlice";

export const store = configureStore({
  reducer: {
    pickDate: pickDateReducer,
    startSlice: startPageReducer,
    query: queryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
