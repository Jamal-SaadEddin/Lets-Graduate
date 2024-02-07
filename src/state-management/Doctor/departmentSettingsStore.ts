import { create } from "zustand";
import { Department } from "../../constants/departments";

interface DepartmentSettingsStore {
  departmentSettings?: Department;
  setDepartmentSettings: (departmentSettings: Department) => void;

  oldSettings?: Department;
  setOldSettings: (oldSettings: Department) => void;
}

const useDepartmentSettingsStore = create<DepartmentSettingsStore>((set) => ({
  departmentSettings: undefined,
  setDepartmentSettings: (departmentSettings) =>
    set(() => ({ departmentSettings })),

  oldSettings: undefined,
  setOldSettings: (oldSettings) => set(() => ({ oldSettings })),
}));

export default useDepartmentSettingsStore;

export const setDepartmentSettings = (departmentSettings: Department) =>
  useDepartmentSettingsStore
    .getState()
    .setDepartmentSettings(departmentSettings);

export const setOldSettings = (oldSettings: Department) =>
  useDepartmentSettingsStore.getState().setOldSettings(oldSettings);
