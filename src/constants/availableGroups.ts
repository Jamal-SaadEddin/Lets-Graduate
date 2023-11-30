export interface Project {
  id: number;
  students: Student[];
}

export interface Student {
  studentId?: number;
  name?: string;
  projectId?: number;
  batchNumber: number;
  address: string;
  email?: string;
  mobileNumber?: string;
  department?: string;
}

export const students: Student[] = [
  {
    name: "Jamal SaadEddin",
    projectId: 55,
    batchNumber: 118,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    name: "Omar Qaneer",
    projectId: 55,
    batchNumber: 120,
    address: "Ramallah",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    name: "Omar Ammar",
    projectId: 55,
    batchNumber: 119,
    address: "Jerusalem",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    name: "Mohammad Hamoudeh",
    projectId: 66,
    batchNumber: 119,
    address: "Jerusalem",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    name: "Ibraheem Qadi",
    projectId: 66,
    batchNumber: 118,
    address: "Ramallah",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    name: "Ahmed Qadi",
    projectId: 77,
    batchNumber: 119,
    address: "Ramallah",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    name: "Jamal Abdullah",
    projectId: 77,
    batchNumber: 120,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    name: "Omar Quzmar",
    projectId: 88,
    batchNumber: 120,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    name: "Mohammad Alawni",
    projectId: 88,
    batchNumber: 118,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    name: "Ibraheem Dwekat",
    projectId: 99,
    batchNumber: 119,
    address: "Jerusalem",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    name: "Obaida Aws",
    projectId: 99,
    batchNumber: 120,
    address: "Jerusalem",
    email: "jamalsa3d2001@gmail.com",
  },
];

var addressesArray: string[] = students.map((s) => s.address);
export const addresses: string[] = addressesArray.filter(
  (value, index) => addressesArray.indexOf(value) === index
);

var batchNumbersArray: string[] = students.map((s) => s.batchNumber.toString());
export const batchNumbers: string[] = batchNumbersArray.filter(
  (value, index) => batchNumbersArray.indexOf(value) === index
);

export const projects: Project[] | null | undefined = [
  {
    id: 55,
    students: students.filter((stu) => stu.projectId === 55),
  },
  {
    id: 66,
    students: students.filter((stu) => stu.projectId === 66),
  },
  {
    id: 77,
    students: students.filter((stu) => stu.projectId === 77),
  },
  {
    id: 88,
    students: students.filter((stu) => stu.projectId === 88),
  },
  {
    id: 99,
    students: students.filter((stu) => stu.projectId === 99),
  },
];
