import { create } from "zustand";
import { Department } from "../../constants/departments";

interface DepartmentSettingsStore {
  departmentSettings?: Department;
  setDepartmentSettings: (departmentSettings: Department) => void;
}

const useDepartmentSettingsStore = create<DepartmentSettingsStore>((set) => ({
  departmentSettings: undefined,
  setDepartmentSettings: (departmentSettings) =>
    set(() => ({ departmentSettings })),
}));

export default useDepartmentSettingsStore;

export const setDepartmentSettings = (departmentSettings: Department) =>
  useDepartmentSettingsStore
    .getState()
    .setDepartmentSettings(departmentSettings);
