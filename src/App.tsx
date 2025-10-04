import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import BrowseCourses from "@/features/student/BrowseCourses/BrowseCourses";
import { Layout, NotFound } from "./layout";
import { InstructorPage } from "./features/instructor";
import Review from "./features/instructor/Review/Review";
import Revenue from "./features/instructor/Revenue/Revenue";
import { QueryClientProvider } from "@tanstack/react-query";
import PayoutDetails from "./features/instructor/PayoutDetails/PayoutDetails";
import WithDraw from "./features/instructor/WirhDraw/WithDraw";
import { Profile } from "./features/instructor/Profile/Profile";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import ReportsAnalytics from "./features/Dashboard/ReportsAnalytics/ReportsAnalytics";
import CourseDetails from "./features/InstructorCourseDetails/CourseDetails";
<<<<<<< HEAD
import AddCourse from "./features/InstructorCourseDetails/AddCourse";
import PlatformSetting from "./features/PlatformSetting/PlatformSetting";
=======
import PaymentMethods from "./features/student/PaymentMethods";
import Setting from "./features/student/Setting";
import Favourite from "./features/student/Favourite";
import PaymentHistory from "./features/student/PaymentHistory";
import NotificationsEmptyIns from "./features/instructor/NotificationsIns/NotificationsEmptyIns";
import ShoppingCart from "@/features/student/ShoppingCart";
import Payment from "@/features/student/Payment";
import PaymentSuccess from "@/features/student/PaymentSuccess";
import StudentCourseDetails from './features/student/courseDetails/CourseDetails';
import StudentInstractordetails from "./features/student/StudentInstractordetails";


import UserProfile from "./features/Dashboard/UserProfile/UserProfile";
>>>>>>> 972ccb9956c00739d7d2565025ee0e3f0c425cf2
import Notifications from "./features/student/Notifications";
import NotificationsEmptyIns from "./features/instructor/NotificationsIns/NotificationsEmptyIns";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <BrowseCourses /> },
<<<<<<< HEAD
      { path: "/Instructor/signup", element: <SignupInstructor /> },
      { path: "/Instructor/login", element: <LoginInstructor /> },
      {
        path: "/Instructor/forgotPassword",
        element: <ForgotPasswordInstructor />,
      },
=======
      { path: "/Student/login", element: <Login /> },
      { path: "/Student/StudentCourseDetails", element: <StudentCourseDetails /> },
      { path: "/Student/StudentInstractordetails", element: <StudentInstractordetails /> },
      {
        path: "/Instructor/forgotPassword",
      },
      { path: "/instructors/dashboard", element: <InstructorPage /> },
      { path: "/instructors/Review", element: <Review /> },
      { path: "/instructors/Revenue", element: <Revenue /> },
      { path: "/instructors/Continue", element: <Continue /> },
      { path: "/instructors/PayoutDetails", element: <PayoutDetails /> },
      { path: "/instructors/NotificationsEmptyIns", element: <NotificationsEmptyIns /> },
      { path: "/instructors/WithDraw", element: <WithDraw /> },
      { path: "/profile", element: <Profile /> },
      { path: "*", element: <NotFound /> },
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
      { path: "/student/notfications", element: <Notifications /> },
      { path: "/student/enrolledCourses", element: <EnrolledCourses /> },
      { path: "/student/enrolledCourseDetails/", element: <EnrolledCourseDetails /> },
      { path: "/student/enrolledLessonVideo/", element: <EnrolledLessonVideo /> },
      { path: "/student/shoppingCart/", element: <ShoppingCart /> },
      { path: "/student/payment/", element: <Payment /> },
      { path: "/student/payment/success", element: <PaymentSuccess /> },
>>>>>>> 972ccb9956c00739d7d2565025ee0e3f0c425cf2
      { path: "/student/notifications", element: <Notifications /> },
      { path: "/instructors/dashboard", element: <InstructorPage /> },
      { path: "/instructors/courses/:id/lessons", element: <CourseDetails /> },
      { path: "/instructors/Review", element: <Review /> },
      { path: "/instructors/Revenue", element: <Revenue /> },
      { path: "/instructors/PayoutDetails", element: <PayoutDetails /> },
      {
        path: "/instructors/NotificationsEmptyIns",
        element: <NotificationsEmptyIns />,
      },
      { path: "/instructors/WithDraw", element: <WithDraw /> },
      { path: "/profile", element: <Profile /> },
<<<<<<< HEAD
=======
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
      { path: "/reviewsRatings/viewFullReview/:id", element: <ViewFullReview /> },
      { path: "/platformSettings", element: <PlatformSettings /> },
      { path: "/reportsAnalytics", element: <ReportsAnalytics /> },
      { path: "/userProfile/:id", element: <UserProfile /> },
>>>>>>> 972ccb9956c00739d7d2565025ee0e3f0c425cf2
      { path: "*", element: <NotFound /> },

      {path:"/instructor/courses/:id/lessons", element:<CourseDetails/>},
      {path: "/AddCourse" , element:<AddCourse/>},
      {path:"/PlatformSetting" , element:<PlatformSetting/>},
      {path:"/ReportsAnalytics", element:<ReportsAnalytics/>}
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
