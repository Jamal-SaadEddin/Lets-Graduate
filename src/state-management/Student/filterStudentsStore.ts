import { SyntheticEvent } from "react";
import { create } from "zustand";

interface FilterStudentsStore {
  address: string | null;
  handleAddressChange: (_event: SyntheticEvent, address: string) => void;
  academicNumber: string | null;
  handleAcademicNumberChange: (
    _event: SyntheticEvent,
    academicNumber: string
  ) => void;
}

const useFilterStudentsStore = create<FilterStudentsStore>((set) => ({
  address: "",
  handleAddressChange: (_event, address) => set(() => ({ address })),
  academicNumber: "",
  handleAcademicNumberChange: (_event, academicNumber) =>
    set(() => ({ academicNumber })),
}));

export default useFilterStudentsStore;
