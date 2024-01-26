import { create } from "zustand";
import { AvailableGroupsProjectItem } from "../../constants/availableGroups";

interface AvailableGroupsStore {
  availableGroups: AvailableGroupsProjectItem[];
  setAvailableGroups: (availableGroups: AvailableGroupsProjectItem[]) => void;
}

const useAvailableGroupsStore = create<AvailableGroupsStore>((set) => ({
  availableGroups: [],
  setAvailableGroups: (availableGroups) => set(() => ({ availableGroups })),
}));

export default useAvailableGroupsStore;

export const setAvailableGroups = (
  availableGroups: AvailableGroupsProjectItem[]
) => useAvailableGroupsStore.getState().setAvailableGroups(availableGroups);
