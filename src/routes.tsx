import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import VerifyEmail from "./pages/auth/VerifyEmail";
import CreateStudentAccount from "./pages/auth/CreateStudentAccount";
import ForgetPassword from "./pages/auth/ForgetPassword";
import VerifyEmailForPassword from "./pages/auth/VerifyEmailForPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ErrorPage from "./pages/ErrorPage";
import StudentDashboard from "./pages/student/StudentDashboard";

const router = createBrowserRouter([
  { path: "/", element: <StudentDashboard />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/verify-email", element: <VerifyEmail /> },
  { path: "/create-student-account", element: <CreateStudentAccount /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/verify-email-for-password", element: <VerifyEmailForPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
]);

export default router;
