import { Student } from "./availableGroups";

export interface Doctor {
  doctorId?: number;
  name: string;
  email: string;
  department: string;
  mobileNumber: string;
}

export interface MyProject {
  projectId: number;
  projectTitle: string;
  projectType: string;
  partners?: Student[];
  supervisors?: Doctor[];
}

export const myProject: MyProject = {
  projectId: 55,
  projectTitle: "Mohito Maker Machine",
  projectType: "1",
  partners: [
    {
      name: "Omar Qaneer",
      studentId: 11925044,
      department: "Computer Engineering",
      mobileNumber: "0594656980",
      email: "s11925044@stu.najah.edu",
      address: "Nablus",
      batchNumber: Number(String(11925044).substring(0, 3)),
    },
    {
      name: "Abbas Surakji",
      studentId: 11923634,
      department: "Computer Engineering",
      mobileNumber: "0597655234",
      email: "s11923634@stu.najah.edu",
      address: "Nablus",
      batchNumber: Number(String(11923634).substring(0, 3)),
    },
  ],
  supervisors: [
    {
      name: "Dr. Manar Qamhiee",
      department: "Computer Engineering",
      email: "manarqamhiee@gmail.com",
      mobileNumber: "0599445683",
    },
  ],
};
