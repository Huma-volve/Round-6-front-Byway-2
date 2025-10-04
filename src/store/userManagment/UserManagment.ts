// src/redux/slices/userSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserState } from "@/types/managment/managment";
import users from "@/json";

const initialState: UserState = {
  users,
};

const userSlice = createSlice({
  name: "managment",
  initialState,
  reducers: {
    setStatus: (
      state,
      action: PayloadAction<{ id: number; status: "Active" | "Blocked" }>
    ) => {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (user) {
        user.status = action.payload.status;
      }
    },
  },
});

export const { setStatus } = userSlice.actions;
export default userSlice.reducer;
