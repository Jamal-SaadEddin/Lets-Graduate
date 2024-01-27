export interface SupervisedProjectsStudent {
  fullName: string;
  address: string;
  id: number;
  email: string;
  department: string;
  studentId?: number;
  projectType: "GP1" | "GP2" | null;
  projectStatus: "not-registered" | "registered" | "passed";
}
