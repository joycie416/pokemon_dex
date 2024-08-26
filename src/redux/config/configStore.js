import { configureStore } from "@reduxjs/toolkit";
import mockSlice from "../Slices/mockSlice";
import selectedSlice from "../Slices/selectedSlice";

const store = configureStore({
  reducer: { mock: mockSlice, selected: selectedSlice },
});

export default store;
