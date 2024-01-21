import { create } from "zustand";
import { Prerequisite } from "../constants/prerequisites";

interface PrerequisitesStore {
  prerequisites: Prerequisite[];
  setPrerequisites: (prerequisites: Prerequisite[]) => void;
}

const usePrerequisitesStore = create<PrerequisitesStore>((set) => ({
  prerequisites: [],
  setPrerequisites: (prerequisites) => set(() => ({ prerequisites })),
}));

export default usePrerequisitesStore;

export const setPrerequisites = (prerequisites: Prerequisite[]) =>
  usePrerequisitesStore.getState().setPrerequisites(prerequisites);
