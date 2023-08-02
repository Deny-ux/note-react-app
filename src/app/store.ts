import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/notesSlice";
import userOptionReducer from "../features/userOption/userOptionSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    userOption: userOptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
