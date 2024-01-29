import { create } from "zustand";
import { AvailableGroupsProjectItem } from "../../constants/availableGroups";

interface MergeGroupsStore {
  availableMergeGroups: AvailableGroupsProjectItem[];
  setAvailableMergeGroups: (
    availableMergeGroups: AvailableGroupsProjectItem[]
  ) => void;
}

const useMergeGroupsStore = create<MergeGroupsStore>((set) => ({
  availableMergeGroups: [],
  setAvailableMergeGroups: (availableMergeGroups) =>
    set(() => ({ availableMergeGroups })),
}));

export default useMergeGroupsStore;

export const setAvailableMergeGroups = (
  availableMergeGroups: AvailableGroupsProjectItem[]
) =>
  useMergeGroupsStore.getState().setAvailableMergeGroups(availableMergeGroups);
