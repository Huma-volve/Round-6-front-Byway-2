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
import { Profile } from "./features/instructor/Profile/Profile";
import EnrolledCourses from "./features/student/EnrolledCourses";
import EnrolledCourseDetails from "./features/student/EnrolledCourseDetails";
import EnrolledLessonVideo from "./features/student/EnrolledLessonVideo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <BrowseCourses /> },
      { path: "/Instructor/signup", element: <SignupInstructor /> },
      { path: "/Instructor/login", element: <LoginInstructor /> },
      {
        path: "/Instructor/forgotPassword",
        element: <ForgotPasswordInstructor />,
      },
      { path: "/Instructor/dashboard", element: <InstructorPage /> },
      { path: "/profile", element: <Profile /> },
      { path: "*", element: <NotFound /> },
      { path: "/student/enrolledCourses", element: <EnrolledCourses /> },
      { path: "/student/enrolledCourseDetails/", element: <EnrolledCourseDetails /> },
      { path: "/student/enrolledLessonVideo/", element: <EnrolledLessonVideo /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
