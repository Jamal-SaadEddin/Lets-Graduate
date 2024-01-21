import { create } from "zustand";
import { Partner } from "../constants/myProject";

interface PartnersStore {
  partners: Partner[];
  setPartners: (partners: Partner[]) => void;
}

const usePartnersStore = create<PartnersStore>((set) => ({
  partners: [
    {
      fullName: "",
      studentId: 0,
      department: "",
      email: "",
      mobileNumber: "",
      address: "",
    },
  ],
  setPartners: (partners) => set(() => ({ partners })),
}));

export default usePartnersStore;

export const setPartners = (partners: Partner[]) =>
  usePartnersStore.getState().setPartners(partners);
