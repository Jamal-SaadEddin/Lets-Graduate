import { SyntheticEvent } from "react";
import { create } from "zustand";

interface FilterStudentsStore {
  address: string | null;
  handleAddressChange: (_event: SyntheticEvent, address: string) => void;
  batchNumber: string | null;
  handleBatchNumberChange: (
    _event: SyntheticEvent,
    batchNumber: string
  ) => void;
}

const useFilterStudentsStore = create<FilterStudentsStore>((set) => ({
  address: "",
  handleAddressChange: (_event, address) => set(() => ({ address })),
  batchNumber: "",
  handleBatchNumberChange: (_event, batchNumber) =>
    set(() => ({ batchNumber })),
}));

export default useFilterStudentsStore;
