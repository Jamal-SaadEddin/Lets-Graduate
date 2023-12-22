export interface Department {
  name: string;
  maxNoOfStuInProj: number;
  maxNoOfProjForDoc: number;
  maxNoOfStuForDoc: number;
  currentPeriod:
    | "create partnerships"
    | "registration"
    | "abstract submission"
    | "evaluating students"
    | "vacation";
}

export const departments: Department[] = [
  {
    name: "Computer Engineering - هندسة الحاسوب",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "evaluating students",
  },
  {
    name: "Industrial Engineering - الهندسة الصناعية",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create partnerships",
  },
  {
    name: "Electrical Engineering - الهندسة الكهربائية",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create partnerships",
  },
  {
    name: "Chemical Engineering - الهندسة الكيميائية",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create partnerships",
  },
  {
    name: "Civil Engineering - الهندسة المدنية",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create partnerships",
  },
  {
    name: "Architecture Engineering - الهندسة المعمارية",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create partnerships",
  },
  {
    name: "Mechanical Engineering - الهندسة الميكانيكية",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create partnerships",
  },
  {
    name: "Communications Engineering - هندسة الاتصالات",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create partnerships",
  },
  {
    name: "Construction Engineering - هندسة البناء",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create partnerships",
  },
  {
    name: "Planning Engineering and city technology - هندسة التخطيط وتكنولجيا المدن",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create partnerships",
  },
  {
    name: "Geomatics Engineering - هندسة الجيومتكس",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create partnerships",
  },
  {
    name: "Energy and environmental Engineering - هندسة الطاقة والبيئة",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create partnerships",
  },
  {
    name: "Mechatronics Engineering - هندسة الميكاترونكس",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create partnerships",
  },
  {
    name: "Materials science Engineering - هندسة علوم المواد",
    maxNoOfStuInProj: 2,
    maxNoOfProjForDoc: 4,
    maxNoOfStuForDoc: 9,
    currentPeriod: "create partnerships",
  },
];

export const getDepartment = (name: string) => {
  return departments.filter((dep) => dep.name === name)[0];
};
