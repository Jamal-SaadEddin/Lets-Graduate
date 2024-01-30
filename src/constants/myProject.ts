export interface Partner {
  fullName: string;
  id: number;
  department: string;
  email: string;
  mobileNumber: string;
  address: string;
  studentId?: number;
}

export interface MyProjectInfo {
  projectTitle: string;
  projectType: string;
}

export interface Supervisor {
  id?: number;
  fullName: string;
  email: string;
  department: string;
  mobileNumber: string;
}
