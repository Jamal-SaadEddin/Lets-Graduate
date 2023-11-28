import { create } from "zustand";
import { Student, students } from "../constants/availableGroups";

interface SearchboxStore {
  student: Student | null;
  setStudent: (stuent: Student | null) => void;
  filteredStudents: Student[];
  setFilteredStudents: (filteredStudents: Student[]) => void;
}

const useSearchboxStore = create<SearchboxStore>((set) => ({
  student: null,
  setStudent: (student) => set(() => ({ student })),
  filteredStudents: students,
  setFilteredStudents: (filteredStudents) => set(() => ({ filteredStudents })),
}));

export default useSearchboxStore;
