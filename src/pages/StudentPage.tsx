import { Outlet, useLocation } from "react-router-dom";
import Overviews from "../components/Overviews";

const StudentPage = () => {
  const location = useLocation();
  if (location.pathname === "/") return <Overviews />;

  return <Outlet />;
};

export default StudentPage;
