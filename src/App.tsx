import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import {
  ForgotPasswordInstructor,
  LoginInstructor,
  SignupInstructor,
} from "./features/Auth/Instructor";
import { Layout, NotFound } from "./layout";
import BrowseCourses from "./features/student/BrowseCourses";
import InstructorPage from "./features/instructor/InstructorPage";
import Review from "./features/instructor/Review/Review";
import Revenue from "./features/instructor/Revenue/Revenue";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import PayoutDetails from "./features/instructor/PayoutDetails/PayoutDetails";
import Continue from "./features/instructor/PayoutDetails/Continue";
import WithDraw from "./features/instructor/WirhDraw/WithDraw";
import { Profile } from "./features/instructor/Profile/Profile";
import CourseDetails from "./features/InstructorCourseDetails/CourseDetails";
import Login from "./features/Auth/Student/Login";
import SignUp from "./features/Auth/Student/SignUp";
import FPassword from "@/features/Auth/Student/ForgetPass";
import Otp from "@/features/Auth/Student/Otp";

const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <BrowseCourses /> },
      { path: "/Instructor/signup", element: <SignupInstructor /> },
      { path: "/Instructor/login", element: <LoginInstructor /> },
      { path: "/Student/login", element: <Login /> },
      { path: "/Student/SignUp", element: <SignUp /> },
      { path: "/Student/forgot-password", element: <FPassword /> },
      { path: "/Student/otp", element: <Otp /> },

      {
        path: "/Instructor/forgotPassword",
        element: <ForgotPasswordInstructor />,
      },
      { path: "/instructor/dashboard", element: <InstructorPage /> },
      { path: "/instructors/Review", element: <Review /> },
      { path: "/instructors/Revenue", element: <Revenue /> },
      { path: "/instructors/Continue", element: <Continue /> },
      { path: "/instructors/PayoutDetails", element: <PayoutDetails /> },
      { path: "/instructors/WithDraw", element: <WithDraw /> },
      { path: "/profile", element: <Profile /> },
      { path: "*", element: <NotFound /> },
      { path: "/instructor/courses/:id/lessons", element: <CourseDetails /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
