import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import {
  ForgotPasswordInstructor,
  LoginInstructor,
  SignupInstructor,
} from "./features/Auth/Instractor";
import BrowseCourses from "./features/BrowseCourses/BrowseCourses";
import { Layout, NotFound } from "./layout";
import { InstructorPage } from "./features/InstructorPage";
import CourseDetails from "./features/InstructorCourseDetails/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <BrowseCourses /> },
      { path: "/instructor/signup", element: <SignupInstructor /> },
      { path: "/instructor/login", element: <LoginInstructor /> },
      {
        path: "/instructor/forgotpassword",
        element: <ForgotPasswordInstructor />,
      },
      { path: "/instructor/dashboard", element: <InstructorPage /> },
      { path: "*", element: <NotFound /> },
      {path:"/instructor/courses/:id/lessons", element:<CourseDetails/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
