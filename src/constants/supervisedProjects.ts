export interface SupervisedProjectsStudent {
  fullName: string;
  address: string;
  id: number;
  email: string;
  department: string;
  studentId?: number;
  projectType?: "gp1" | "gp2" | null;
  projectStatus?: "not started" | "in progress" | "passed";
}
