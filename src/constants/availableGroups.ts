export interface Project {
  id: number;
  students: Student[];
}

export interface Student {
  label: string;
  projectId: number;
  batchNumber: number;
  address: string;
  email: string;
}

export const students: Student[] = [
  {
    label: "Jamal SaadEddin",
    projectId: 55,
    batchNumber: 119,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    label: "Omar Qaneer",
    projectId: 55,
    batchNumber: 119,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    label: "Omar Ammar",
    projectId: 55,
    batchNumber: 119,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    label: "Mohammad Hamoudeh",
    projectId: 66,
    batchNumber: 119,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    label: "Ibraheem Qadi",
    projectId: 66,
    batchNumber: 119,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    label: "Ahmed Qadi",
    projectId: 77,
    batchNumber: 119,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    label: "Jamal Abdullah",
    projectId: 77,
    batchNumber: 119,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    label: "Omar Quzmar",
    projectId: 88,
    batchNumber: 119,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    label: "Mohammad Alawni",
    projectId: 88,
    batchNumber: 119,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    label: "Ibraheem Dwekat",
    projectId: 99,
    batchNumber: 119,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
  {
    label: "Obaida Aws",
    projectId: 99,
    batchNumber: 119,
    address: "Nablus",
    email: "jamalsa3d2001@gmail.com",
  },
];

export const projects: Project[] = [
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
