import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isAdminAuth: false,
  },
  reducers: {
    setIsAdminAuth: (state, action) => {
      state.isAdminAuth = action.payload;
    },
  },
});

export const { setIsAdminAuth } = adminSlice.actions;

export default adminSlice.reducer;
