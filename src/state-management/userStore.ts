import { create } from "zustand";
import { StudentInfo } from "../constants/myProfile";

interface UserStore {
  currentUser: StudentInfo | undefined;
  setCurrentUser: (currentUser: StudentInfo | undefined) => void;
}

const useUserStore = create<UserStore>((set) => ({
  currentUser: {
    fullName: "",
    studentId: 0,
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    address: "",
    mobileNumber: "",
    gp1State: "",
    gp2State: "",
    projectType: "",
    isWithGroup: false,
  },
  setCurrentUser: (currentUser) => set(() => ({ currentUser })),
}));

export default useUserStore;
