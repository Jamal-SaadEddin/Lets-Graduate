import axios from "axios";
import { setFetchedUser } from "../state-management/userStore";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  department: string;
  address: string;
  mobileNumber: string;
  type: "student" | "doctor" | "admin";
  currentPeriod: string;
  info: StudentInfo | DoctorInfo;
}

export interface StudentInfo {
  projectId: number;
  projectOneState: "not started" | "in progress" | "passed";
  projectTwoState: "not started" | "in progress" | "passed";
  isWithGroup: boolean;
}

export interface DoctorInfo {
  isSupervisor: boolean;
  isDepartmentManager: boolean;
  isProjectsCommitteeMember: boolean;
}

export const useAuth = async (userId: number, password: string) => {
  try {
    const response = await axios.get<User>(
      `http://localhost:3000/auth/login?userId=${userId}&password=${password}`
    );
    const fetchedUser = response.data;
    setFetchedUser(fetchedUser);

    return fetchedUser;
  } catch (error) {
    console.error("Error fetching User:", error);
    return null;
  }
};
