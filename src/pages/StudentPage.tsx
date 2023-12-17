import { Outlet, useLocation } from "react-router-dom";
import Overviews from "../components/student/Overviews";

const StudentPage = () => {
  const location = useLocation();
  if (location.pathname === "/") return <Overviews />;

  return <Outlet />;
};

export default StudentPage;
