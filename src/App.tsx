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
import { MyCourses } from "./features/instructor/MyCourses/MyCourses";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import LayoutDashboard from "./features/Dashboard/Layout/LayoutDashboard";
import DashboardPage from "./features/Dashboard/DashboardPage/DashboardPage";
import UserManagement from "./features/Dashboard/UserManagement/UserManagement";
import CourseManagement from "./features/Dashboard/CourseManagement/CourseManagement";
import PaymentsRevenue from "./features/Dashboard/Payments&revenue/Payments&revenue";
import ReviewsRatings from "./features/Dashboard/ReviewsRatings/ReviewsRatings";
import PlatformSettings from "./features/Dashboard/PlatformSettings/PlatformSettings";
import ReportsAnalytics from "./features/Dashboard/ReportsAnalytics/ReportsAnalytics";
import CourseDetails from "./features/InstructorCourseDetails/CourseDetails";
import Login from "./features/Auth/Student/Login";
import SignUp from "./features/Auth/Student/SignUp";
import PaymentMethods from "./features/student/PaymentMethods";
import Setting from "./features/student/Setting";
import Favourite from "./features/student/Favourite";
import PaymentHistory from "./features/student/PaymentHistory";
import Notfications from "./features/student/Notifications";
import NotificationsEmptyIns from "./features/instructor/NotificationsIns/NotificationsEmptyIns";

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
      { path: "/student/setting", element: <Setting /> },
      { path: "/student/setting/payment-methods", element: <PaymentMethods /> },
      { path: "/student/payment-history", element: <PaymentHistory /> },
      { path: "/student/favourites", element: <Favourite /> },
      { path: "/student/notfications", element: <Notfications /> },
      { path: "/instructors/courses/:id/lessons", element: <CourseDetails /> },
      {
        path: "/Instructor/forgotPassword",
        element: <ForgotPasswordInstructor />,
      },
      { path: "/instructors/dashboard", element: <InstructorPage /> },
      { path: "/instructors/Review", element: <Review /> },
      { path: "/instructors/Revenue", element: <Revenue /> },
      { path: "/instructors/Continue", element: <Continue /> },
      { path: "/instructors/PayoutDetails", element: <PayoutDetails /> },
      {
        path: "/instructors/NotificationsEmptyIns",
        element: <NotificationsEmptyIns />,
      },
      { path: "/instructors/WithDraw", element: <WithDraw /> },
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
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
