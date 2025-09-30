export type User = {
    id: number;
    name: string;
    email: string;
    status: "Active" | "Blocked";
    role: string;
    regDate: string;
  };
  
  export type UserState = {
    users: User[];
  };
  