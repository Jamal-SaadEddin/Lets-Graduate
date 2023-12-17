export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  department: string;
  address: string;
  village?: string;
  mobileNumber: string;
  type: "student" | "doctor" | "admin";
  info: StudentInfo | DoctorInfo;
}

export interface StudentInfo {
  projectOneState: "Not started" | "In progress" | "Done";
  projectTwoState: "Not started" | "In progress" | "Done";
  projectId: number;
}

export interface DoctorInfo {
  isSupervisor: boolean;
  isDepartmentManager: boolean;
  isProjectsCommitteeMember: boolean;
}

const useAuth = () => ({
  user: <User>{
    id: "11923604",
    firstName: "Jamal",
    lastName: "SaadEddin",
    email: "jamalsa3d2001@gmail.com",
    password: "123456",
    department: "Computer Engineering",
    address: "Nablus",
    mobileNumber: "0599098598",
    type: "student",
    info: <StudentInfo>{
      projectId: 55,
      projectOneState: "Not started",
      projectTwoState: "In progress",
    },
  },
});

// const useAuth = () => ({ user: null });

export default useAuth;
