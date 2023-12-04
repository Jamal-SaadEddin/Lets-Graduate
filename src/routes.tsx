import { createBrowserRouter } from "react-router-dom";
import AccountSettings from "./components/AccountSettings";
import AvailableGroups from "./components/AvailableGroups";
import AvailableSupervisors from "./components/AvailableSupervisors";
import ProfileDetails from "./components/ProfileDetails";
import ProjectDetails from "./components/ProjectDetails";
import Submissions from "./components/Submissions";
import Prerequisites from "./components/common/Prerequisites";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import StudentPage from "./pages/StudentPage";
import CreateStudentAccount from "./pages/auth/CreateStudentAccount";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import SignUp from "./pages/auth/SignUp";
import VerifyEmail from "./pages/auth/VerifyEmail";
import VerifyEmailForPassword from "./pages/auth/VerifyEmailForPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <StudentPage /> },
      { path: "prerequisites/gp/:projectType", element: <Prerequisites /> },
      { path: "prerequisites/gp/:projectType", element: <Prerequisites /> },
      { path: "available-groups", element: <AvailableGroups /> },
      { path: "available-supervisors", element: <AvailableSupervisors /> },
      { path: "my-project", element: <ProjectDetails /> },
      { path: "submissions", element: <Submissions /> },
      { path: "account-settings", element: <AccountSettings /> },
      { path: ":username", element: <ProfileDetails /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/verify-email", element: <VerifyEmail /> },
  { path: "/create-student-account", element: <CreateStudentAccount /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/verify-email-for-password", element: <VerifyEmailForPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
]);

export default router;
