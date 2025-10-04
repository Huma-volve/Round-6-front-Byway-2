import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import BrowseCourses from "@/features/student/BrowseCourses/BrowseCourses";
import { Layout, NotFound } from "./layout";
import { InstructorPage } from "./features/instructor";
import Review from "./features/instructor/Review/Review";
import Revenue from "./features/instructor/Revenue/Revenue";
import { QueryClientProvider } from "@tanstack/react-query";
import PayoutDetails from "./features/instructor/PayoutDetails/PayoutDetails";
import Continue from "./features/instructor/PayoutDetails/Continue";
import WithDraw from "./features/instructor/WirhDraw/WithDraw";
import { Profile } from "./features/instructor/Profile/Profile";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import ReportsAnalytics from "./features/Dashboard/ReportsAnalytics/ReportsAnalytics";
import CourseDetails from "./features/InstructorCourseDetails/CourseDetails";
import AddCourse from "./features/InstructorCourseDetails/AddCourse";
import PlatformSetting from "./features/PlatformSetting/PlatformSetting";
import Notifications from "./features/student/Notifications";
import NotificationsEmptyIns from "./features/instructor/NotificationsIns/NotificationsEmptyIns";

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
