import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showActive: true,
};

export const userOptionSlice = createSlice({
  name: "userOption",
  initialState,
  reducers: {
    switchShowState: (state) => {
      state.showActive = !state.showActive;
      console.log(`show ${state.showActive}`);
    },
  },
});

export const { switchShowState } = userOptionSlice.actions;

export default userOptionSlice.reducer;
