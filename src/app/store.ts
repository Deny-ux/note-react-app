import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/notesSlice";
import userOptionReducer from "../features/userOption/userOptionSlice";
import modalsReducer from "../features/modals/modalsSlice";
export const store = configureStore({
  reducer: {
    notes: notesReducer,
    userOption: userOptionReducer,
    modals: modalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
