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
import CourseDetails from "./features/InstructorCourseDetails/CourseDetails";
import AddCourse from "./features/InstructorCourseDetails/AddCourse";
import PlatformSetting from "./features/PlatformSetting/PlatformSetting";
import ReportsAnalytics from "./features/ReportsAnalytics/ReportsAnalytics";

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
      {path:"/instructor/courses/:id/lessons", element:<CourseDetails/>},
      {path: "/AddCourse" , element:<AddCourse/>},
      {path:"/PlatformSetting" , element:<PlatformSetting/>},
      {path:"/ReportsAnalytics", element:<ReportsAnalytics/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
