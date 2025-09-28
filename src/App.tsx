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
import { MyCourses } from "./features/instructor/MyCourses/MyCourses";
import { Provider } from "react-redux";
import { store } from "./store/store";
import LayoutDashboard from "./features/Dashboard/Layout/LayoutDashboard";
import DashboardPage from "./features/Dashboard/DashboardPage/DashboardPage";
import UserManagement from "./features/Dashboard/UserManagement/UserManagement";
import CourseManagement from "./features/Dashboard/CourseManagement/CourseManagement";
import PaymentsRevenue from "./features/Dashboard/Payments&revenue/Payments&revenue";
import ReviewsRatings from "./features/Dashboard/ReviewsRatings/ReviewsRatings";
import PlatformSettings from "./features/Dashboard/PlatformSettings/PlatformSettings";
import ReportsAnalytics from "./features/Dashboard/ReportsAnalytics/ReportsAnalytics";

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
      { path: "/myCourses", element: <MyCourses /> },

      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/",
    element: <LayoutDashboard />,
    children: [
      { path: "/adminDashboard", element: <DashboardPage /> },
      { path: "/userManagement", element: <UserManagement /> },
      { path: "/courseManagement", element: <CourseManagement /> },
      { path: "/paymentsRevenue", element: <PaymentsRevenue /> },
      { path: "/reviewsRatings", element: <ReviewsRatings /> },
      { path: "/platformSettings", element: <PlatformSettings /> },
      { path: "/reportsAnalytics", element: <ReportsAnalytics /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
