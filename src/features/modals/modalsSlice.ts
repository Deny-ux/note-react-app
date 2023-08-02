import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCreateModal: false,
  showEditModal: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    showCreateModal: (state) => {
      state.showCreateModal = true;
    },
    showEditModal: (state) => {
      state.showEditModal = true;
    },
    hideModals: (state) => {
      state.showEditModal = false;
      state.showCreateModal = false;
    },
  },
});

export const { showCreateModal, showEditModal, hideModals } =
  modalsSlice.actions;

export default modalsSlice.reducer;
