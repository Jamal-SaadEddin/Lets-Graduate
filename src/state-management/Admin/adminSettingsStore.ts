import { create } from "zustand";
import { AdminDepartment } from "../../constants/departments";

interface AdminSettingsStore {
  adminDepartments: AdminDepartment[];
  setAdminDepartments: (adminDepartments: AdminDepartment[]) => void;
}

const useAdminSettingsStore = create<AdminSettingsStore>((set) => ({
  adminDepartments: [],
  setAdminDepartments: (adminDepartments) => set(() => ({ adminDepartments })),
}));

export default useAdminSettingsStore;

export const setAdminDepartments = (adminDepartments: AdminDepartment[]) =>
  useAdminSettingsStore.getState().setAdminDepartments(adminDepartments);
