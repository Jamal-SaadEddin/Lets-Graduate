import { Outlet, useLocation } from "react-router-dom";
import Overviews from "../components/admin/Overviews";

const AdminPage = () => {
  const location = useLocation();
  if (location.pathname === "/") return <Overviews />;

  return <Outlet />;
};

export default AdminPage;
