import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/AuthSlice";
import userManagmentSlice from "./userManagment/UserManagment";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    managment: userManagmentSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
