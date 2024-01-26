import { create } from "zustand";
import { Supervisor } from "../../constants/myProject";

interface SupervisorStore {
  supervisors: Supervisor[];
  setSupervisors: (supervisors: Supervisor[]) => void;
}

const useSupervisorStore = create<SupervisorStore>((set) => ({
  supervisors: [],
  setSupervisors: (supervisors) => set(() => ({ supervisors })),
}));

export default useSupervisorStore;

export const setSupervisors = (supervisors: Supervisor[]) =>
  useSupervisorStore.getState().setSupervisors(supervisors);
