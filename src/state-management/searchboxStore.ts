import { create } from "zustand";
import { Student, students } from "../constants/availableGroups";
import {
  AvailableSupervisor,
  availableSupervisors,
} from "../constants/availableSupervisors";

interface SearchboxStore {
  student: Student | null;
  setStudent: (stuent: Student | null) => void;
  filteredStudents: Student[];
  setFilteredStudents: (filteredStudents: Student[]) => void;

  supervisor: AvailableSupervisor | null;
  setSupervisor: (supervisor: AvailableSupervisor | null) => void;
  filteredSupervisors: AvailableSupervisor[];
  setFilteredSupervisors: (filteredSupervisors: AvailableSupervisor[]) => void;
}

const useSearchboxStore = create<SearchboxStore>((set) => ({
  student: null,
  setStudent: (student) => set(() => ({ student })),
  filteredStudents: students,
  setFilteredStudents: (filteredStudents) => set(() => ({ filteredStudents })),

  supervisor: null,
  setSupervisor: (supervisor) => set(() => ({ supervisor })),
  filteredSupervisors: availableSupervisors,
  setFilteredSupervisors: (filteredSupervisors) =>
    set(() => ({ filteredSupervisors })),
}));

export default useSearchboxStore;
