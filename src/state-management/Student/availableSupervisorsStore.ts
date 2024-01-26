import { create } from "zustand";
import { AvailableSupervisor } from "../../constants/availableSupervisors";

interface AvailableSupervisorsStore {
  availableSupervisors: AvailableSupervisor[];
  setAvailableSupervisors: (
    availableSupervisors: AvailableSupervisor[]
  ) => void;
}

const useAvailableSupervisorsStore = create<AvailableSupervisorsStore>(
  (set) => ({
    availableSupervisors: [],
    setAvailableSupervisors: (availableSupervisors) =>
      set(() => ({ availableSupervisors })),
  })
);

export default useAvailableSupervisorsStore;

export const setAvailableSupervisors = (
  availableSupervisors: AvailableSupervisor[]
) =>
  useAvailableSupervisorsStore
    .getState()
    .setAvailableSupervisors(availableSupervisors);
