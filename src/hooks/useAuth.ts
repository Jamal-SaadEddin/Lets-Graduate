import axios from "axios";
import { setFetchedUser } from "../state-management/userStore";

export interface User {
  id: number;
  firstName?: string;
  lastName?: string;
  email: string;
  password?: string;
  department?: string;
  address?: string;
  mobileNumber?: string;
  type: "student" | "doctor" | "admin";
  currentPeriod?:
    | "answering-prerequisites"
    | "create-partnerships"
    | "registration-to-supervisors"
    | "abstract-submission"
    | "evaluating-students"
    | "vacation";
  info?: StudentInfo | DoctorInfo;
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
    // const response = await axios.get<User>(
    //   `http://localhost:3000/auth/login?userId=${userId}&password=${password}`
    // );
    // const fetchedUser = response.data;
    const fetchedUser =
      userId === 101
        ? {
            id: 101,
            type: "admin",
            email: "admin@gmail.com",
          }
        : userId === 1355
        ? {
            id: 1355,
            firstName: "Manar",
            lastName: "Qamhieh",
            email: "qamhiee@najah.edu",
            department: "Computer Engineering",
            address: "Qalqilya",
            mobileNumber: "0595493759",
            type: "doctor",
            currentPeriod: "registration-to-supervisors",
            info: {
              isSupervisor: true,
              isDepartmentManager: true,
              isProjectsCommitteeMember: true,
            },
          }
        : {
            id: 11923604,
            firstName: "Jamal",
            lastName: "SaadEddin",
            email: "s11923604@stu.najah.edu",
            department: "Computer Engineering",
            address: "Ramallah",
            mobileNumber: "0599098598",
            type: "student",
            currentPeriod: "registration-to-supervisors",
            info: {
              projectId: 1,
              projectOneState: "in progress",
              projectTwoState: "passed",
              isWithGroup: true,
            },
          };
    if (userId === 101)
      setFetchedUser({
        id: 101,
        type: "admin",
        email: "admin@gmail.com",
      });
    if (userId === 1355)
      setFetchedUser({
        id: 1355,
        firstName: "Manar",
        lastName: "Qamhieh",
        email: "qamhiee@najah.edu",
        department: "Computer Engineering",
        address: "Qalqilya",
        mobileNumber: "0595493759",
        type: "doctor",
        currentPeriod: "registration-to-supervisors",
        info: {
          isSupervisor: true,
          isDepartmentManager: true,
          isProjectsCommitteeMember: true,
        },
      });
    if (userId === 11923604)
      setFetchedUser({
        id: 11923604,
        firstName: "Jamal",
        lastName: "SaadEddin",
        email: "s11923604@stu.najah.edu",
        department: "Computer Engineering",
        address: "Ramallah",
        mobileNumber: "0599098598",
        type: "student",
        currentPeriod: "registration-to-supervisors",
        info: {
          projectId: 1,
          projectOneState: "in progress",
          projectTwoState: "passed",
          isWithGroup: true,
        },
      });

    return fetchedUser;
  } catch (error) {
    console.error("Error fetching User:", error);
    return null;
  }
};

export const createNewUserAccount = async (body: Object) => {
  try {
    const response = await axios.post<{ message: string }>(
      `http://localhost:3000/signUp/user`,
      body
    );
    const message = response.data.message;
    return message;
  } catch (error) {
    console.error("Error creating new User:", error);
  }
};
