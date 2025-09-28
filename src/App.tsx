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
import PaymentMethods from "./features/student/PaymentMehods";
import Setting from "./features/student/Setting";
import Favourite from "./features/student/Favourite";
import PaymentHistory from "./features/student/PaymentHistory";
import Notfications from "./features/student/Notfications";

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
      { path: "/student/setting", element: <Setting /> },
      { path: "/student/setting/payment-methods", element: <PaymentMethods /> },
      { path: "/student/payment-history", element: <PaymentHistory /> },
      { path: "/student/favourites", element: <Favourite /> },
      { path: "/student/notfications", element: <Notfications /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
