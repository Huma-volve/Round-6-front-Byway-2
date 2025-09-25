import Login from "@/features/Auth/Student/Login";
import SignUp from "@/features/Auth/Student/SignUp";
import BrowseCourses from "@/features/BrowseCourses/BrowseCourses";
import InstructorPage from "@/features/InstructorPage/InstructorPage";
import type { RouteObject } from "react-router-dom";
import LoginInstractor from "@/features/Auth/Instractor/LoginInstructor";
import SignupInstractor from "@/features/Auth/Instractor/SignupInstructor";
import ForgotPasswordInstractor from "@/features/Auth/Instractor/ForgotPasswordInstructor";

export const routes: RouteObject[] = [
  { path: "/", element: <BrowseCourses /> },
  { path: "/Student/login", element: <Login /> },
  { path: "/Student/SignUp", element: <SignUp /> },
  { path: "/instructor/login", element: <LoginInstractor /> },
  { path: "/instructor/signup", element: <SignupInstractor /> },
  { path: "/instructor/forgotpassword", element: <ForgotPasswordInstractor /> },
  { path: "/instructor/dashboard", element: <InstructorPage /> },
];
