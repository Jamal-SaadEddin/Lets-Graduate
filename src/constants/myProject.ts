import useAuth from "./../hooks/useAuth";
import { students } from "./availableGroups";

const { user } = useAuth();

export interface Doctor {
  doctorId: number;
  name: string;
  email: string;
  department: string;
  mobileNumber: string;
}

export interface Partner {
  name: string;
  studentId: number;
  department: string;
  email: string;
  mobileNumber: string;
  address: string;
}

export interface MyProject {
  projectId: number;
  projectTitle: string;
  projectType: string;
  partners: Partner[];
  supervisors: Supervisor[];
}

export interface Supervisor {
  name: string;
  email: string;
  department: string;
  mobileNumber: string;
}

export const myProject: MyProject = {
  projectId: 55,
  projectTitle: "Mohito Maker Machine",
  projectType: "1",
  partners: students
    .filter((stu) => stu.projectId === user.projectId)
    .map(({ name, studentId, department, email, mobileNumber, address }) => ({
      name,
      studentId,
      department,
      email,
      mobileNumber,
      address,
    })),
  supervisors: [
    {
      name: "Dr. Manar Qamhiee",
      department: "Computer Engineering",
      email: "manarqamhiee@gmail.com",
      mobileNumber: "0599445683",
    },
  ],
};
