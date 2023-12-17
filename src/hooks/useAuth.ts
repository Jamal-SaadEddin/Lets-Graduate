export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  department: string;
  address: string;
  village?: string;
  mobileNumber: string;
  projectOneState: string;
  projectTwoState: string;
  projectId: number;
}

const useAuth = () => ({
  user: <User>{
    id: "11923604",
    firstName: "Jamal",
    lastName: "SaadEddin",
    email: "jamalsa3d2001@gmail.com",
    password: "123456",
    department: "Computer Engineering",
    address: "Nablus",
    mobileNumber: "0599098598",
    projectOneState: "Not started",
    projectTwoState: "In progress",
    projectId: 55,
  },
});

// const useAuth = () => ({ user: null });

export default useAuth;
