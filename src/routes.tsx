import { createBrowserRouter } from "react-router-dom";
import AccountSettings from "./components/common/AccountSettings";
import Comments from "./components/common/Comments";
import Notification from "./components/common/Notification";
import Notifications from "./components/common/Notifications";
import ProfileDetails from "./components/common/ProfileDetails";
import Grading from "./components/doctor/Grading";
import MergeGroups from "./components/doctor/MergeGroups";
import Submission from "./components/doctor/Submission";
import SupervisedProjects from "./components/doctor/SupervisedProjects";
import SupervisorSubmissions from "./components/doctor/SupervisorSubmissions";
import DepartmentPrerequisites from "./components/doctor/department-manager/DepartmentPrerequisites";
import DepartmentSettings from "./components/doctor/department-manager/DepartmentSettings";
import AvailableGroups from "./components/student/AvailableGroups";
import AvailableSupervisors from "./components/student/AvailableSupervisors";
import Prerequisites from "./components/student/Prerequisites";
import ProjectDetails from "./components/student/ProjectDetails";
import Submissions from "./components/student/Submissions";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import CreateStudentAccount from "./pages/auth/CreateStudentAccount";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import SignUp from "./pages/auth/SignUp";
import VerifyEmail from "./pages/auth/VerifyEmail";
import VerifyEmailForPassword from "./pages/auth/VerifyEmailForPassword";

const router = createBrowserRouter([
  {
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <UserPage />,
      },
      { path: "prerequisites/gp/:projectType", element: <Prerequisites /> },
      { path: "available-groups", element: <AvailableGroups /> },
      { path: "available-supervisors", element: <AvailableSupervisors /> },
      { path: "my-project", element: <ProjectDetails /> },
      { path: "submissions", element: <Submissions /> },
      {
        path: "submissions/:id/comments",
        element: <Comments />,
      },
      { path: "account-settings", element: <AccountSettings /> },
      { path: "my-profile", element: <ProfileDetails /> },
      { path: "notifications", element: <Notifications /> },
      { path: "notification/:id", element: <Notification /> },
      { path: "supervised-projects", element: <SupervisedProjects /> },
      { path: "students-submissions", element: <SupervisorSubmissions /> },
      { path: "students-submissions/:id", element: <Submission /> },
      {
        path: "students-submissions/:id/comments",
        element: <Comments canAddComments />,
      },
      { path: "merge-groups", element: <MergeGroups /> },
      { path: "grading", element: <Grading /> },
      {
        path: "department-prerequisites/gp/:projectType",
        element: <DepartmentPrerequisites />,
      },
      { path: "department-settings", element: <DepartmentSettings /> },
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
