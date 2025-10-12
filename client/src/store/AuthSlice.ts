// import React from "react";
// import { authSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuthenticated: boolean;
  currentPage: "login" | "signup" | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  currentPage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.currentPage = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentPage = null;
    },
    setCurrentPage: (
      state,
      action: PayloadAction<"login" | "signup" | null>
    ) => {
      state.currentPage = action.payload;
    },
  },
});

export const { loginSuccess, logout, setCurrentPage } = authSlice.actions;
export default authSlice.reducer;
