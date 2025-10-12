import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    increment: () => {
      console.log("incremented");
    },
    decremented: () => {
      console.log("decremented");
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { increment, decremented } = profileSlice.actions;
