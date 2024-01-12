export interface Project {
  id: number;
  name: string;
  students: SupervisedProjectsStudent[];
}

export interface Student {
  studentId: number;
  name: string;
  projectId: number;
  academicNumber: number;
  address: string;
  email: string;
  mobileNumber: string;
  department: string;
}

export interface SupervisedProjectsStudent {
  name: string;
  address: string;
  studentId: number;
  email: string;
  department: string;
}

export const students: Student[] = [
  {
    studentId: 11923604,
    name: "Jamal SaadEddin",
    projectId: 55,
    academicNumber: Number(String(11923604).substring(0, 3)),
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098598",
    department: "Computer Engineering",
  },
  {
    studentId: 12023456,
    name: "Omar Qaneer",
    projectId: 55,
    academicNumber: Number(String(12023456).substring(0, 3)),
    address: "Ramallah",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098501",
    department: "Computer Engineering",
  },
  {
    studentId: 11925044,
    name: "Omar Ammar",
    projectId: 55,
    academicNumber: Number(String(11925044).substring(0, 3)),
    address: "Jerusalem",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098502",
    department: "Computer Engineering",
  },
  {
    studentId: 11923404,
    name: "Mohammad Hamoudeh",
    projectId: 66,
    academicNumber: Number(String(11923404).substring(0, 3)),
    address: "Jerusalem",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098503",
    department: "Computer Engineering",
  },
  {
    studentId: 11825077,
    name: "Ibraheem Qadi",
    projectId: 66,
    academicNumber: Number(String(11825077).substring(0, 3)),
    address: "Ramallah",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098504",
    department: "Computer Engineering",
  },
  {
    studentId: 11922542,
    name: "Ahmed Qadi",
    projectId: 77,
    academicNumber: Number(String(11922542).substring(0, 3)),
    address: "Ramallah",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098505",
    department: "Computer Engineering",
  },
  {
    studentId: 12023064,
    name: "Jamal Abdullah",
    projectId: 77,
    academicNumber: Number(String(12023064).substring(0, 3)),
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098506",
    department: "Computer Engineering",
  },
  {
    studentId: 12015104,
    name: "Omar Quzmar",
    projectId: 88,
    academicNumber: Number(String(12015104).substring(0, 3)),
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098507",
    department: "Computer Engineering",
  },
  {
    studentId: 11825864,
    name: "Mohammad Alawni",
    projectId: 88,
    academicNumber: Number(String(11825864).substring(0, 3)),
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098508",
    department: "Computer Engineering",
  },
  {
    studentId: 11945621,
    name: "Ibraheem Dwekat",
    projectId: 99,
    academicNumber: Number(String(11945621).substring(0, 3)),
    address: "Jerusalem",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098509",
    department: "Computer Engineering",
  },
  {
    studentId: 12078965,
    name: "Obaida Aws",
    projectId: 99,
    academicNumber: Number(String(12078965).substring(0, 3)),
    address: "Jerusalem",
    email: "jamalsa3d2001@gmail.com",
    mobileNumber: "0599098510",
    department: "Computer Engineering",
  },
];

export const projects: Project[] | null | undefined = [
  {
    id: 55,
    name: "Mohito Maker Machine",
    students: students
      .filter((stu) => stu.projectId === 55)
      .map(({ name, studentId, address, email, department }) => ({
        name,
        studentId,
        address,
        email,
        department,
      })),
  },
  {
    id: 66,
    name: "Barille Printer",
    students: students
      .filter((stu) => stu.projectId === 66)
      .map(({ name, studentId, address, email, department }) => ({
        name,
        studentId,
        address,
        email,
        department,
      })),
  },
  {
    id: 77,
    name: "Clothes Cleaner",
    students: students
      .filter((stu) => stu.projectId === 77)
      .map(({ name, studentId, address, email, department }) => ({
        name,
        studentId,
        address,
        email,
        department,
      })),
  },
];