import { create } from "zustand";
import { Student } from "../constants/availableGroups";
import { AvailableSupervisor } from "../constants/availableSupervisors";

interface SearchboxStore {
  student: Student | null;
  setStudent: (stuent: Student | null) => void;
  filteredStudents: Student[];
  setFilteredStudents: (filteredStudents: Student[]) => void;
  allStudents: Student[];
  setAllStudents: (allStudents: Student[]) => void;

  supervisor: AvailableSupervisor | null;
  setSupervisor: (supervisor: AvailableSupervisor | null) => void;
  filteredSupervisors: AvailableSupervisor[];
  setFilteredSupervisors: (filteredSupervisors: AvailableSupervisor[]) => void;
  allSupervisors: AvailableSupervisor[];
  setAllSupervisors: (allSupervisors: AvailableSupervisor[]) => void;
}

const useSearchboxStore = create<SearchboxStore>((set) => ({
  student: null,
  setStudent: (student) => set(() => ({ student })),
  filteredStudents: [],
  setFilteredStudents: (filteredStudents) => set(() => ({ filteredStudents })),
  allStudents: [],
  setAllStudents: (allStudents) => set(() => ({ allStudents })),

  supervisor: null,
  setSupervisor: (supervisor) => set(() => ({ supervisor })),
  filteredSupervisors: [],
  setFilteredSupervisors: (filteredSupervisors) =>
    set(() => ({ filteredSupervisors })),
  allSupervisors: [],
  setAllSupervisors: (allSupervisors) => set(() => ({ allSupervisors })),
}));

export default useSearchboxStore;

export const setFilteredStudents = (filteredStudents: Student[]) =>
  useSearchboxStore.getState().setFilteredStudents(filteredStudents);
export const setAllStudents = (allStudents: Student[]) =>
  useSearchboxStore.getState().setAllStudents(allStudents);

export const setFilteredSupervisors = (
  filteredSupervisors: AvailableSupervisor[]
) => useSearchboxStore.getState().setFilteredSupervisors(filteredSupervisors);
export const setAllSupervisors = (allSupervisors: AvailableSupervisor[]) =>
  useSearchboxStore.getState().setAllSupervisors(allSupervisors);
