import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import {
  ForgotPasswordInstractor,
  LoginInstractor,
  SignupInstractor,
} from "./features/Auth/Instractor";
import BrowseCourses from "./features/BrowseCourses/BrowseCourses";
import { Layout, NotFound } from "./layout";
import { InstractorPage } from "./features/InstractorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <BrowseCourses /> },
      { path: "/instractor/signup", element: <SignupInstractor /> },
      { path: "/instractor/login", element: <LoginInstractor /> },
      {
        path: "/instractor/forgotpassword",
        element: <ForgotPasswordInstractor />,
      },
      { path: "/instractor/dashboard", element: <InstractorPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
