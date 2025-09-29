import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import { Layout, NotFound } from "./layout";
import BrowseCourses from "./features/student/BrowseCourses";
import { InstructorPage } from "./features/instructor";
import Review from "./features/instructor/Review/Review";
import Revenue from "./features/instructor/Revenue/Revenue";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import PayoutDetails from "./features/instructor/PayoutDetails/PayoutDetails";
import Continue from "./features/instructor/PayoutDetails/Continue";
import WithDraw from "./features/instructor/WirhDraw/WithDraw";
import { Profile } from "./features/instructor/Profile/Profile";
import EnrolledCourses from "./features/student/EnrolledCourses";
import EnrolledCourseDetails from "./features/student/EnrolledCourseDetails";
import EnrolledLessonVideo from "./features/student/EnrolledLessonVideo";
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
import PaymentMethods from "./features/student/PaymentMethods";
import Setting from "./features/student/Setting";
import Favourite from "./features/student/Favourite";
import PaymentHistory from "./features/student/PaymentHistory";
import NotificationsEmptyIns from "./features/instructor/NotificationsIns/NotificationsEmptyIns";
import UserProfile from "./features/Dashboard/UserProfile/UserProfile";
import Notifications from "./features/student/Notifications";
import DashboardCourseDetails from "./features/Dashboard/CourseManagement/DashboardCourseDetails";

import {
  Register,
  ResetPassword,
  Welcome,
  Otp,
  Login,
  ForgetPass,
} from "./features/Auth";
import { Payments, Withdrawals } from "./features/Dashboard";

const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <BrowseCourses /> },
      { path: "/welcome", element: <Welcome /> },
      { path: "/register", element: <Register /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "/login", element: <Login /> },
      { path: "/otp", element: <Otp /> },
      { path: "/forgot-password", element: <ForgetPass /> },
      { path: "/student/setting", element: <Setting /> },
      { path: "/student/setting/payment-methods", element: <PaymentMethods /> },
      { path: "/student/payment-history", element: <PaymentHistory /> },
      { path: "/student/favourites", element: <Favourite /> },
      { path: "/student/notifications", element: <Notifications /> },
      { path: "/instructors/dashboard", element: <InstructorPage /> },
      { path: "/instructors/courses/:id/lessons", element: <CourseDetails /> },
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
      {
        path: "/courseManagement/course-details",
        element: <DashboardCourseDetails />,
      },
      { path: "/paymentsRevenue", element: <PaymentsRevenue /> },
      { path: "/paymentsRevenue/withdrawals/:id", element: <Withdrawals /> },
      { path: "/paymentsRevenue/payments/:id", element: <Payments /> },
      { path: "/reviewsRatings", element: <ReviewsRatings /> },
      { path: "/platformSettings", element: <PlatformSettings /> },
      { path: "/reportsAnalytics", element: <ReportsAnalytics /> },
      { path: "/userProfile", element: <UserProfile /> },
      { path: "*", element: <NotFound /> },
      { path: "/student/enrolledCourses", element: <EnrolledCourses /> },
      {
        path: "/student/enrolledCourseDetails/",
        element: <EnrolledCourseDetails />,
      },
      {
        path: "/student/enrolledLessonVideo/",
        element: <EnrolledLessonVideo />,
      },
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
