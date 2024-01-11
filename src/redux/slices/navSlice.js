import { createSlice } from "@reduxjs/toolkit";

const navslice = createSlice({
  name: "nav",
  initialState: {
    sideToggle: false,
    tab: "Members",
  },
  reducers: {
    setSideToggle: (state, action) => {
      state.sideToggle = action.payload;
    },
    setTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { setSideToggle, setTab } = navslice.actions;
export default navslice.reducer;
