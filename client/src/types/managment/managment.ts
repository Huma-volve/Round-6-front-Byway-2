// src/types/managment/managment.ts

export interface User {
  id: number;
  name: string;
  email: string;
  status: "Active" | "Blocked";
  role: string;
  regDate: string;
}

export interface UserState {
  users: User[];
}
