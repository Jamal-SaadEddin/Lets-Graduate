import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import VerifyEmail from "./pages/auth/VerifyEmail";
import CreateStudentAccount from "./pages/auth/CreateStudentAccount";
import ForgetPassword from "./pages/auth/ForgetPassword";
import VerifyEmailForPassword from "./pages/auth/VerifyEmailForPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import StudentPage from "./pages/StudentPage";
import Prerequisites from "./components/common/Prerequisites";
import GroupsTable from "./components/GroupsTable";
import SupervisorsTable from "./components/SupervisorsTable";
import ProjectDetails from "./components/ProjectDetails";
import Submissions from "./components/Submissions";
import ProfileDetails from "./components/ProfileDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <StudentPage /> },
      { path: "prerequisites-gp1", element: <Prerequisites /> },
      { path: "prerequisites-gp2", element: <Prerequisites /> },
      { path: "available-groups", element: <GroupsTable /> },
      { path: "available-supervisors", element: <SupervisorsTable /> },
      { path: "my-project", element: <ProjectDetails /> },
      { path: "submissions", element: <Submissions /> },
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
