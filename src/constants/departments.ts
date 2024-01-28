export interface Department {
  departmentName: string;
  noOfRegisteredStudents: number;
  noOfSupervisors: number;
  noOfProjectsCommitteeMembers: number;
  maxNoOfStuPerProj: number;
  maxNoOfProjPerDoct: number;
  maxNoOfStuPerDoct: number;
  currentPeriod:
    | "create-partnerships"
    | "registration"
    | "abstract-submission"
    | "evaluating-students"
    | "vacation";
  supervisingDoctors: string[];
  projectsCommitteeMembers: string[];
  allDoctors: string[];
}

export const departments: Department[] = [
  {
    departmentName: "Computer Engineering - هندسة الحاسوب",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "evaluating-students",
    supervisingDoctors: [
      "Oliver Hansen - 1355",
      "Van Henry - 2101",
      "April Tucker - 5544",
      "Ralph Hubbard - 2456",
    ],
    projectsCommitteeMembers: [
      "Bradley Wilkerson - 7412",
      "Virginia Andrews - 9652",
      "Kelly Snyder - 4561",
    ],
    allDoctors: [],
  },
  {
    departmentName: "Industrial Engineering - الهندسة الصناعية",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
    allDoctors: [],
  },
  {
    departmentName: "Electrical Engineering - الهندسة الكهربائية",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
    allDoctors: [],
  },
  {
    departmentName: "Chemical Engineering - الهندسة الكيميائية",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
    allDoctors: [],
  },
  {
    departmentName: "Civil Engineering - الهندسة المدنية",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
    allDoctors: [],
  },
  {
    departmentName: "Architecture Engineering - الهندسة المعمارية",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
    allDoctors: [],
  },
  {
    departmentName: "Mechanical Engineering - الهندسة الميكانيكية",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
    allDoctors: [],
  },
  {
    departmentName: "Communications Engineering - هندسة الاتصالات",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
    allDoctors: [],
  },
  {
    departmentName: "Construction Engineering - هندسة البناء",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
    allDoctors: [],
  },
  {
    departmentName:
      "Planning Engineering and city technology - هندسة التخطيط وتكنولجيا المدن",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
    allDoctors: [],
  },
  {
    departmentName: "Geomatics Engineering - هندسة الجيومتكس",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
    allDoctors: [],
  },
  {
    departmentName:
      "Energy and environmental Engineering - هندسة الطاقة والبيئة",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
    allDoctors: [],
  },
  {
    departmentName: "Mechatronics Engineering - هندسة الميكاترونكس",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
    allDoctors: [],
  },
  {
    departmentName: "Materials science Engineering - هندسة علوم المواد",
    noOfRegisteredStudents: 80,
    noOfSupervisors: 13,
    noOfProjectsCommitteeMembers: 5,
    maxNoOfStuPerProj: 2,
    maxNoOfProjPerDoct: 4,
    maxNoOfStuPerDoct: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
    allDoctors: [],
  },
];

export const getDepartment = (name: string) => {
  return departments.filter((dep) => dep.departmentName === name)[0];
};
