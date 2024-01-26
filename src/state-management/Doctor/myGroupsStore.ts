import { create } from "zustand";
import {
  GradingProjectsProjectItem,
  SupervisedProjectsProjectItem,
} from "../../constants/availableGroups";

interface MyGroupsStore {
  myGroups: SupervisedProjectsProjectItem[] | GradingProjectsProjectItem[];
  setMyGroups: (myGroups: SupervisedProjectsProjectItem[] | undefined) => void;
}

const useMyGroupsStore = create<MyGroupsStore>((set) => ({
  myGroups: [],
  setMyGroups: (myGroups) => set(() => ({ myGroups })),
}));

export default useMyGroupsStore;

export const setMyGroups = (myGroups: SupervisedProjectsProjectItem[]) =>
  useMyGroupsStore.getState().setMyGroups(myGroups);
