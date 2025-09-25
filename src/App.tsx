import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import {
  ForgotPasswordInstructor,
  LoginInstructor,
  SignupInstructor,
} from "./features/Auth/Instractor";
import BrowseCourses from "./features/student/BrowseCourses";
import InstructorPage from "./features/instructor/InstructorPage";
import { Layout, NotFound } from "./layout";
import Review from "./features/instructor/Khaled/Review/Review";
import Revenue from "./features/instructor/Khaled/Revenue/Revenue";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import PayoutDetails from "./features/instructor/Khaled/PayoutDetails/PayoutDetails";
import Continue from "./features/instructor/Khaled/PayoutDetails/Continue";
import WithDraw from "./features/instructor/Khaled/WirhDraw/WithDraw";

const client = new QueryClient()

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
      { path: "/instructors/Review", element: <Review /> },
      { path: "/instructors/Revenue", element: <Revenue /> },
      { path: "/instructors/Continue", element: <Continue /> },
      { path: "/instructors/PayoutDetails", element: <PayoutDetails /> },
      { path: "/instructors/WithDraw", element: <WithDraw /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <QueryClientProvider client={client}>
    <RouterProvider router={router} />
  </QueryClientProvider>;
}

export default App;
