// import { RouterProvider } from "react-router";
// import { createBrowserRouter } from "react-router";
// import {
//   ForgotPasswordInstructor,
//   LoginInstructor,
//   SignupInstructor,
// } from "./features/Auth/Instructor";
// import { Layout, NotFound } from "./layout";
// import Login from "./features/Auth/Student/Login";
// import SignUp from "./features/Auth/Student/SignUp";
// import LoginInstractor from "./features/Auth/Instractor/LoginInstructor";
// import SignupInstractor from "./features/Auth/Instractor/SignupInstructor";
// import ForgotPasswordInstractor from "./features/Auth/Instractor/ForgotPasswordInstructor";
// import { InstructorPage } from "./features/InstructorPage";
// import BrowseCourses from "./features/BrowseCourses/BrowseCourses";
// import BrowseCourses from "./features/student/BrowseCourses";
// import InstructorPage from "./features/instructor/InstructorPage";
// import Review from "./features/instructor/Review/Review";
// import Revenue from "./features/instructor/Revenue/Revenue";
// import { QueryClient } from "@tanstack/react-query";
// import { QueryClientProvider } from "@tanstack/react-query";
// import PayoutDetails from "./features/instructor/PayoutDetails/PayoutDetails";
// import Continue from "./features/instructor/PayoutDetails/Continue";
// import WithDraw from "./features/instructor/WirhDraw/WithDraw";
// import { Profile } from "./features/instructor/Profile/Profile";
// import CourseDetails from "./features/InstructorCourseDetails/CourseDetails";

// const client = new QueryClient()

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <NotFound />,
//     children: [
//       { path: "/", element: <BrowseCourses /> },
//       { path: "/Student/login", element: <Login /> },
//       { path: "/Student/SignUp", element: <SignUp /> },
//       { path: "/instructor/login", element: <LoginInstractor /> },
//       { path: "/instructor/signup", element: <SignupInstractor /> },
//       { path: "/Instructor/signup", element: <SignupInstructor /> },
//       { path: "/Instructor/login", element: <LoginInstructor /> },
//       {
//         path: "/instructor/forgotpassword",
//         element: <ForgotPasswordInstractor />,
//       },
//       { path: "/instructor/dashboard", element: <InstructorPage /> },
//       { path: "/instructors/Review", element: <Review /> },
//       { path: "/instructors/Revenue", element: <Revenue /> },
//       { path: "/instructors/Continue", element: <Continue /> },
//       { path: "/instructors/PayoutDetails", element: <PayoutDetails /> },
//       { path: "/instructors/WithDraw", element: <WithDraw /> },
//       { path: "/profile", element: <Profile /> },
//       { path: "*", element: <NotFound /> },
//       {path:"/instructor/courses/:id/lessons", element:<CourseDetails/>}
//     ],
//   },
// ]);

// function App() {
//   return <QueryClientProvider client={client}>
//     <RouterProvider router={router} />
//   </QueryClientProvider>;
// }

// export default App;

import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import {
  // ForgotPasswordInstructor,
  LoginInstructor,
  SignupInstructor,
} from "./features/Auth/Instructor";
import BrowseCourses from "@/features/student/BrowseCourses/BrowseCourses";
import { Layout, NotFound } from "./layout";
import InstructorPage from "./features/instructor/InstructorPage";
import Review from "./features/instructor/Review/Review";
import Revenue from "./features/instructor/Revenue/Revenue";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import PayoutDetails from "./features/instructor/PayoutDetails/PayoutDetails";
import Continue from "./features/instructor/PayoutDetails/Continue";
import WithDraw from "./features/instructor/WirhDraw/WithDraw";
import { Profile } from "./features/instructor/Profile/Profile";
import CourseDetails from "./features/InstructorCourseDetails/CourseDetails";
import Login from "./features/Auth/Student/Login";
import SignUp from "./features/Auth/Student/SignUp";
import PaymentMethods from "./features/student/PaymentMehods";
import Setting from "./features/student/Setting";
import Favourite from "./features/student/Favourite";
import PaymentHistory from "./features/student/PaymentHistory";
import Notfications from "./features/student/Notfications";
import NotificationsEmptyIns from "./features/instructor/NotificationsIns/NotificationsEmptyIns";
import StudentCourseDetails from './features/student/courseDetails/CourseDetails';
import StudentInstractordetails from "./features/student/StudentInstractordetails";



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
      { path: "/Student/StudentCourseDetails", element: <StudentCourseDetails /> },
      { path: "/Student/StudentInstractordetails", element: <StudentInstractordetails /> },
      {
        path: "/Instructor/forgotPassword",
        // element: <ForgotPasswordInstructor />,
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
      { path: "/student/setting", element: <Setting /> },
      { path: "/student/setting/payment-methods", element: <PaymentMethods /> },
      { path: "/student/payment-history", element: <PaymentHistory /> },
      { path: "/student/favourites", element: <Favourite /> },
      { path: "/student/notfications", element: <Notfications /> },
      { path: "/instructors/courses/:id/lessons", element: <CourseDetails /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
