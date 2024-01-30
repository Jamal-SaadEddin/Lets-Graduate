import { SupervisedProjectsStudent } from "./supervisedProjects";

export interface Project {
  id: number;
  title: string;
}

export interface AvailableGroupsProjectItem extends Project {
  doctorId?: number;
  students: AvailableGroupsStudent[];
}

export interface SupervisedProjectsProjectItem extends Project {
  students: SupervisedProjectsStudent[];
}

export interface Student {
  id?: number;
  firstName?: string;
  lastName?: string;
  fullName: string;
  projectId?: number;
  academicNumber: number;
  address: string;
  email: string;
  mobileNumber?: string;
  department?: string;
}

export interface AvailableGroupsStudent {
  id: number;
  fullName: string;
  academicNumber: number;
  address: string;
  email: string;
  studentId?: number;
  department?: string;
  projectId?: number;
  projectType?: string;
}

export const students: Student[] = [
  {
    id: 11923604,
    fullName: "Jamal SaadEddin",
    projectId: 55,
    academicNumber: Number(String(11923604).substring(0, 3)),
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098598",
    department: "Computer Engineering",
  },
  {
    id: 12023456,
    fullName: "Omar Qaneer",
    projectId: 55,
    academicNumber: Number(String(12023456).substring(0, 3)),
    address: "Ramallah",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098501",
    department: "Computer Engineering",
  },
  {
    id: 11925044,
    fullName: "Omar Ammar",
    projectId: 55,
    academicNumber: Number(String(11925044).substring(0, 3)),
    address: "Jerusalem",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098502",
    department: "Computer Engineering",
  },
  {
    id: 11923404,
    fullName: "Mohammad Hamoudeh",
    projectId: 66,
    academicNumber: Number(String(11923404).substring(0, 3)),
    address: "Jerusalem",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098503",
    department: "Computer Engineering",
  },
  {
    id: 11825077,
    fullName: "Ibraheem Qadi",
    projectId: 66,
    academicNumber: Number(String(11825077).substring(0, 3)),
    address: "Ramallah",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098504",
    department: "Computer Engineering",
  },
  {
    id: 11922542,
    fullName: "Ahmed Qadi",
    projectId: 77,
    academicNumber: Number(String(11922542).substring(0, 3)),
    address: "Ramallah",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098505",
    department: "Computer Engineering",
  },
  {
    id: 12023064,
    fullName: "Jamal Abdullah",
    projectId: 77,
    academicNumber: Number(String(12023064).substring(0, 3)),
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098506",
    department: "Computer Engineering",
  },
  {
    id: 12015104,
    fullName: "Omar Quzmar",
    projectId: 88,
    academicNumber: Number(String(12015104).substring(0, 3)),
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098507",
    department: "Computer Engineering",
  },
  {
    id: 11825864,
    fullName: "Mohammad Alawni",
    projectId: 88,
    academicNumber: Number(String(11825864).substring(0, 3)),
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098508",
    department: "Computer Engineering",
  },
  {
    id: 11945621,
    fullName: "Ibraheem Dwekat",
    projectId: 99,
    academicNumber: Number(String(11945621).substring(0, 3)),
    address: "Jerusalem",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098509",
    department: "Computer Engineering",
  },
  {
    id: 12078965,
    fullName: "Obaida Aws",
    projectId: 99,
    academicNumber: Number(String(12078965).substring(0, 3)),
    address: "Jerusalem",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098510",
    department: "Computer Engineering",
  },
];

var addressesArray: string[] = students.map((s) => s.address);
export const addresses: string[] = addressesArray.filter(
  (value, index) => addressesArray.indexOf(value) === index
);

var academicNumbersArray: string[] = students.map((s) =>
  s.academicNumber.toString()
);
export const academicNumbers: string[] = academicNumbersArray.filter(
  (value, index) => academicNumbersArray.indexOf(value) === index
);
