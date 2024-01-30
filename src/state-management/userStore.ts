import { create } from "zustand";
import { DoctorInfo, StudentInfo } from "../constants/myProfile";
import { User } from "../hooks/useAuth";

interface UserStore {
  currentUser: StudentInfo | DoctorInfo | undefined;
  setCurrentUser: (currentUser: StudentInfo | DoctorInfo | undefined) => void;

  fetchedUser: User | null;
  setFetchedUser: (fetchedUser: User | null) => void;
}

const useUserStore = create<UserStore>((set) => ({
  currentUser: {
    fullName: "",
    id: Number(""),
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

  fetchedUser: null,
  setFetchedUser: (fetchedUser) => set(() => ({ fetchedUser })),
}));

export default useUserStore;

export const setFetchedUser = (fetchedUser: User | null) =>
  useUserStore.getState().setFetchedUser(fetchedUser);
