import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slices/adminSlice";
import navSlice from "./slices/navSlice";
import eventSlice from "./slices/eventSlice";

const store = configureStore({
  reducer: {
    admin: adminSlice,
    nav: navSlice,
    event: eventSlice,
  },
});

export default store;
