import { RouterProvider, createBrowserRouter } from "react-router";
import { Layout, NotFound } from "./layout";
import Login from "./features/Auth/Student/Login";
import SignUp from "./features/Auth/Student/SignUp";
import LoginInstractor from "./features/Auth/Instractor/LoginInstructor";
import SignupInstractor from "./features/Auth/Instractor/SignupInstructor";
import ForgotPasswordInstractor from "./features/Auth/Instractor/ForgotPasswordInstructor";
import { InstructorPage } from "./features/InstructorPage";
import BrowseCourses from "./features/BrowseCourses/BrowseCourses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <BrowseCourses /> },
      { path: "/Student/login", element: <Login /> },
      { path: "/Student/SignUp", element: <SignUp /> },
      { path: "/instructor/login", element: <LoginInstractor /> },
      { path: "/instructor/signup", element: <SignupInstractor /> },
      {
        path: "/instructor/forgotpassword",
        element: <ForgotPasswordInstractor />,
      },
      { path: "/instructor/dashboard", element: <InstructorPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
