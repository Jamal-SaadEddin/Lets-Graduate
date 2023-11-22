import { createBrowserRouter } from "react-router-dom";
import StudentDashboard from "./pages/student/StudentDashboard";

const router = createBrowserRouter([
  { path: "/", element: <StudentDashboard /> },
]);

export default router;
