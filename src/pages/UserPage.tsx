import { useLocation } from "react-router-dom";
import { Overviews as AdminOverviews } from "../components/admin/Overviews";
import { Overviews as DoctorOverviews } from "../components/doctor/Overviews";
import { Overviews as StudentOverviews } from "../components/student/Overviews";

import useUserStore from "../state-management/userStore";

const StudentPage = () => {
  const fetchedUser = useUserStore((s) => s.fetchedUser);
  const location = useLocation();
  if (location.pathname === "/") {
    if (fetchedUser?.type === "student") return <StudentOverviews />;
    else if (fetchedUser?.type === "doctor") return <DoctorOverviews />;
    else if (fetchedUser?.type === "admin") return <AdminOverviews />;
    else return null;
  }
};

export default StudentPage;
