export interface Department {
  name: string;
  maxNoOfStuInProj: number;
  maxNoOfProjForDoc: number;
  maxNoOfStuForDoc: number;
  currentPeriod:
    | "create-partnerships"
    | "registration"
    | "abstract-submission"
    | "evaluating-students"
    | "vacation";
  supervisingDoctors: string[];
  projectsCommitteeMembers: string[];
}

export const departments: Department[] = [
  {
    name: "Computer Engineering - هندسة الحاسوب",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
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
  },
  {
    name: "Industrial Engineering - الهندسة الصناعية",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
  },
  {
    name: "Electrical Engineering - الهندسة الكهربائية",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
  },
  {
    name: "Chemical Engineering - الهندسة الكيميائية",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
  },
  {
    name: "Civil Engineering - الهندسة المدنية",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
  },
  {
    name: "Architecture Engineering - الهندسة المعمارية",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
  },
  {
    name: "Mechanical Engineering - الهندسة الميكانيكية",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
  },
  {
    name: "Communications Engineering - هندسة الاتصالات",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
  },
  {
    name: "Construction Engineering - هندسة البناء",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
  },
  {
    name: "Planning Engineering and city technology - هندسة التخطيط وتكنولجيا المدن",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
  },
  {
    name: "Geomatics Engineering - هندسة الجيومتكس",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
  },
  {
    name: "Energy and environmental Engineering - هندسة الطاقة والبيئة",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
  },
  {
    name: "Mechatronics Engineering - هندسة الميكاترونكس",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
  },
  {
    name: "Materials science Engineering - هندسة علوم المواد",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create-partnerships",
    supervisingDoctors: [],
    projectsCommitteeMembers: [],
  },
];

export const getDepartment = (name: string) => {
  return departments.filter((dep) => dep.name === name)[0];
};

export const additionalDepartmentInfo = {
  noOfRegisteredStudents: 80,
  noOfSupervisors: 13,
  noOfProjectsCommitteeMembers: 5,
};
