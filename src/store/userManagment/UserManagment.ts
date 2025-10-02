import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserState } from "@/types/managment/managment";

const initialState: UserState = {
  users: [
    {
      id: 1,
      name: "Nour Ali",
      email: "nour@mail.com",
      status: "Active",
      role: "Learner",
      regDate: "2024-06-15",
    },
    {
      id: 2,
      name: "Omar Tarek",
      email: "omar@mail.com",
      status: "Blocked",
      role: "Instructor",
      regDate: "2024-05-12",
    },
    {
      id: 3,
      name: "Salma Ahmed",
      email: "salma@mail.com",
      status: "Active",
      role: "Learner",
      regDate: "2024-05-10",
    },
  ],
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
