export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  department: string;
  address: string;
  mobileNumber: string;
  projectOneState: string;
  projectTwoState: string;
}

const useAuth = () => ({
  user: {
    id: "11923604",
    firstName: "Jamal",
    lastName: "SaadEddin",
    email: "jamalsa3d2001@gmail.com",
    password: "123456",
    department: "Computer Engineering - هندسة الحاسوب",
    address: "Nablus",
    mobileNumber: "0599098598",
    projectOneState: "Not started",
    projectTwoState: "In progress",
  },
});

// const useAuth = () => ({ user: null });

export default useAuth;
