export interface Department {
  departmentName: string;
  noOfRegisteredStudents: number;
  noOfSupervisors: number;
  noOfProjectsCommitteeMembers: number;
  maxNoOfStuPerProj: number;
  maxNoOfProjPerDoct: number;
  maxNoOfStuPerDoct: number;
  currentPeriod:
    | "answering-prerequisites"
    | "create-partnerships"
    | "registration-to-supervisors"
    | "abstract-submission"
    | "evaluating-students"
    | "vacation";
  supervisingDoctors: string[];
  projectsCommitteeMembers: string[];
  allDoctors: string[];
}

export const departments: string[] = [
  "Computer Engineering",
  "Industrial Engineering",
  "Electrical Engineering",
  "Chemical Engineering",
  "Civil Engineering",
  "Architecture Engineering",
  "Mechanical Engineering",
  "Communications Engineering",
  "Construction Engineering",
  "Planning Engineering",
  "Geomatics Engineering",
  "Energy and environmental Engineering",
  "Mechatronics Engineering",
  "Materials science Engineering",
];

export interface AdminDepartment {
  departmentName: string;
  departmentManager: string;
  allDoctors: string[];
}
